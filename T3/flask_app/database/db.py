import pymysql
import json

# -- config --

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('database/querys.json', 'r') as querys:
	QUERY_DICT = json.load(querys)

# -- connect --
def get_conn():
    conn = pymysql.connect(
        db=DB_NAME,
        user=DB_USERNAME,
        passwd=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
        charset=DB_CHARSET
    )
    return conn

# -- querys --

def get_producto_by_id(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_producto_by_id"], (id,))
    product = cursor.fetchone()
    return product

def get_len_productos():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_len_productos"])
    len_productos = cursor.fetchone()
    return len_productos

def get_producto_images(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_producto_images"], (id,))
    images = cursor.fetchall()
    return images

def add_producto(tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_producto"], (tipo, descripcion, comuna_id, nombre_productor, email_productor, celular_productor))
    conn.commit()

def add_producto_image(ruta_archivo, nombre_archivo, producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_producto_image"], (ruta_archivo, nombre_archivo, producto_id))
    conn.commit()

def get_regiones():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_regiones"])
    regiones = cursor.fetchall()
    return regiones

def get_region_by_id(region_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_region_by_id"], (region_id,))
    region = cursor.fetchone()
    return region

def get_comunas_by_region(region_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comunas_by_region"], (region_id,))
    comunas = cursor.fetchall()
    return comunas

def get_region_by_comuna(comuna_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_region_by_comuna"], (comuna_id,))
    region = cursor.fetchone()
    return region

def get_comuna_by_id(comuna_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_comuna_by_id"], (comuna_id,))
    comuna = cursor.fetchone()
    return comuna

def get_productos_limit_offset(limit, offset):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_productos_limit_offset"], (limit, offset))
    n_productos = cursor.fetchall()
    return n_productos

def get_last_inserted_id():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_last_inserted_id"])
    last_id = cursor.fetchone()
    return last_id

def get_most_recent_producto_id():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_most_recent_producto_id"])
    most_recent_id = cursor.fetchone()
    return most_recent_id

def get_all_frutas():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_all_frutas"])
    frutas = cursor.fetchall()
    return frutas

def get_all_verduras():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_all_verduras"])
    verduras = cursor.fetchall()
    return verduras

def get_all_frutas_verduras():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_all_frutas_verduras"])
    frutas_verduras = cursor.fetchall()
    return frutas_verduras

def get_tipos_verdura_producto(producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_tipos_verdura_producto"], (producto_id,))
    tipos_verdura = cursor.fetchall()
    return tipos_verdura

def add_tipo_verdura_producto(producto_id, tipo_verdura_fruta_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_tipo_verdura_producto"], (producto_id, tipo_verdura_fruta_id))
    conn.commit()

def add_pedido(tipo, descripcion, comuna_id, nombre_comprador, email_comprador, celular_comprador):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_pedido"], (tipo, descripcion, comuna_id, nombre_comprador, email_comprador, celular_comprador))
    conn.commit()

def get_most_recent_pedido_id():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_most_recent_pedido_id"])
    most_recent_id = cursor.fetchone()
    return most_recent_id

def get_tipos_verdura_pedido(producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_tipos_verdura_pedido"], (producto_id,))
    tipos_verdura = cursor.fetchall()
    return tipos_verdura

def add_tipo_verdura_pedido(producto_id, tipo_verdura_fruta_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["add_tipo_verdura_pedido"], (producto_id, tipo_verdura_fruta_id))
    conn.commit()

def get_pedido_by_id(id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_pedido_by_id"], (id,))
    pedido = cursor.fetchone()
    return pedido

def get_len_pedidos():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_len_pedidos"])
    len_pedidos = cursor.fetchone()
    return len_pedidos

def get_pedidos_limit_offset(limit, offset):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_pedidos_limit_offset"], (limit, offset))
    n_pedidos = cursor.fetchall()
    return n_pedidos
