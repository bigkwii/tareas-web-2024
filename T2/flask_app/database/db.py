import pymysql
import json

# -- config --

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

# with open('database/querys.json', 'r') as querys:
#     QUERY_DICT = json.load(querys)

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

print("db.py loaded")
print("getting connection...")
conn = get_conn()
print("connection obtained:", conn)
