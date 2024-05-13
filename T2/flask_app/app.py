from flask import Flask, request, render_template, redirect, url_for, session
#from utils.validations import validate_login_user, validate_register_user, validate_confession, validate_conf_img
#from database import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
import uuid

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
    # request to add a product
    if request.method == "POST";
        tipo = request.form.get("tipo")
        descripcion = request.form.get("descripcion")
        comuna_id = request.form.get("comuna_id")
        nombre_productor = request.form.get("nombre_productor")
        email_productor = request.form.get("email_productor")
        celular_productor = request.form.get("celular_productor")
        error = ""
    # TODO

    return render_template("agregar-producto.html")

@app.route("/ver-productos", methods=["GET"])
def ver_productos():
    return render_template("ver-productos.html")

@app.route("/informacion-producto/<int:id_producto>", methods=["GET"])
def informacion_producto(id_producto):
    return render_template("informacion-producto.html", id=id_producto)

# -- error handling --

@app.errorhandler(404)
def page_not_found(error):
    return render_template("404.html"), 404


# -- run --
if __name__ == "__main__":
    app.run(debug=True)