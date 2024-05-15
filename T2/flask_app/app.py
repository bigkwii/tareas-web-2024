from flask import Flask, request, render_template, redirect, url_for, session
from utils.validations import validate_producto
from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid
from PIL import Image

UPLOAD_FOLDER = "static/uploads"

app = Flask(__name__)
app.secret_key = "asdfghjkl"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

# -- routes --

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/agregar-producto", methods=["GET", "POST"])
def agregar_producto():

    if request.method == "POST":
        # get form data
        tipo = request.form.get("tipo")
        selected_products = request.form.get("productos").split(",")
        description = request.form.get("description")
        imagen1 = request.files.get("image1")
        imagen2 = request.files.get("image2")
        imagen3 = request.files.get("image3")
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        productor = request.form.get("productor")
        email = request.form.get("email")
        phone = request.form.get("phone")
        # -- VALIDATE DATA --
        all_frutas = db.get_all_frutas()
        all_verduras = db.get_all_verduras()
        types_dict = {
            "Fruta": [fruta[0] for fruta in all_frutas],
            "Verdura": [verdura[0] for verdura in all_verduras]
        }
        all_regions = db.get_regiones()
        region_dict = {}
        for _region in all_regions:
            region_id, _ = _region
            comunas = db.get_comunas_by_region(region_id)
            region_dict[str(region_id)] = [str(comuna[0]) for comuna in comunas]

        if not validate_producto(tipo, selected_products, description, imagen1, imagen2, imagen3, region, comuna, productor, email, phone, region_dict, types_dict):
            return redirect(url_for("agregar_producto"), 400)
        # -- SAVE DATA --
        # save producto
        db.add_producto(tipo, description, comuna, productor, email, phone)
        # get last inserted id
        last_id = db.get_most_recent_producto_id()[0]
        print(last_id)
        # - save images -
        # each image gets 3 versions: full, small, thumb
        # of sizes 1280x1024, 640x480, 120x120 respectively
        # they get saved at static/uploads/full, static/uploads/small, static/uploads/thumb
        # along with an original copy at static/uploads/original
        # their names are generated by hashing the original name with sha256
        SIZES = {
            "full": (1280, 1024),
            "small": (640, 480),
            "thumb": (120, 120)
        }
        for i, image in enumerate([imagen1, imagen2, imagen3]):
            if image:
                # generate filename. make sure it's unique
                filename = hashlib.sha256(secure_filename(image.filename).encode("utf-8")).hexdigest()
                extension = filetype.guess(image).extension
                filename = f"{filename}_{str(uuid.uuid4())}.{extension}"
                # save original
                image.save(os.path.join(app.config["UPLOAD_FOLDER"], "original", filename))
                # save other sizes
                for size, (width, height) in SIZES.items():
                    img = Image.open(image)
                    img.thumbnail((width, height))
                    img.save(os.path.join(app.config["UPLOAD_FOLDER"], size, filename))
                # save to db
                db.add_producto_image(f"uploads/original/{filename}", filename, last_id)
        # save selected products
        for product_id in selected_products:
            db.add_tipo_verdura_producto(last_id, product_id)
        # we're done here
        return redirect(url_for("agregar_producto"), 200)

    # request to get data for the form
    data = {
        "frutas": [],
        "verduras": [],
        "regiones": []
    }
    for fruta in db.get_all_frutas():
        fruta_id, fruta_nombre = fruta
        data["frutas"].append({"id": fruta_id, "nombre": fruta_nombre})
    for verdura in db.get_all_verduras():
        verdura_id, verdura_nombre = verdura
        data["verduras"].append({"id": verdura_id, "nombre": verdura_nombre})
    num_to_roman = { # i want it to look **pretty**
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII",
        9: "IX", 10: "X", 11: "XI", 12: "XII", 13: "RM", 14: "XIV", 15: "XV", 16: "XVI"
    }
    for region in db.get_regiones():
        region_id, region_nombre = region
        comunas = []
        for comuna in db.get_comunas_by_region(region_id):
            comuna_id, comuna_nombre = comuna
            comunas.append({"id": comuna_id, "nombre": comuna_nombre})
        data["regiones"].append({"id": region_id, "nombre": f"{num_to_roman[region_id]} - " + region_nombre, "comunas": comunas})
    return render_template("agregar-producto.html", data=data)

@app.route("/ver-productos", methods=["GET"])
def ver_productos():
    return render_template("ver-productos.html")

@app.route("/informacion-producto/<int:id_producto>", methods=["GET"])
def informacion_producto(id_producto):
    return render_template("informacion-producto.html", id=id_producto)

# -- error handling --

@app.errorhandler(400)
def bad_request(error):
    return render_template("400.html"), 400

@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


# -- run --
if __name__ == "__main__":
    app.run(debug=True)