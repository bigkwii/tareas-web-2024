# TAREA 3 CC5002 - Desarrollo de Aplicaciones Web - 2024-1

## Por: Álvaro Morales

### Cómo correr

Primero instale MySQL y corra el contenido de los `.sql` que se encuentran en `flask_app/database/` para crear la base de datos, en el siguiente orden:

- `tarea2.sql`
- `datos_corregido.sql`

Con eso tendrá la base de datos lista.

Luego, instale las dependencias de Python que salen en `flask_app/requirements.txt` con pip, luego haga:

```bash
cd flask_app
python3 app.py
```

...para correr el servidor. Se hosteará la pagina web en `http://127.0.0.1:5000`.

### Notas

Acá explicaré algunas decisiones de diseño que tomé:

- El código sigue sin ser particualrmente bonito, pero ahora está marginalmente más ordenado.
- El esquema de la base de datos es exactamente el mismo que la T2, no hay cambios.
- Los gráficos están hechos con Flot.
- Decidí no instalar jQuery y Flot directamente, sino que los estoy inclyendo desde un CDN. Así que por favor revisar esto con conexión a internet.
  