# TAREA2 CC5002 - Desarrollo de Aplicaciones Web - 2024-1

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

- Por temas de tiempo el diseño quedó prácticamente igual a la T1, y esto incluye código bastante feo que debería haber sido refactorizado, pero al menos funciona.
- Incluí páginas de 404 y 400, en caso de que pasen cosas raras.
- *Creo* que hay un bug al crear la imágen más grande, parece que no se crea una imágen más grande de la original. Lo revisaría, pero no tengo tiempo, lamentablemente. El semestre ta duro ;w;
- Con respecto a los pedidos: Como esta funcionalidad no se pide para esta tarea, dejé los botones que llevan a esas páginas como disabled. Si de alguna forma se llegara a entrar a esas páginas, se mostrará 404.
- El submit del form para ingresar un producto se hizo por medio de un fetch de javascript, ya que en la T1 se pedía que al mandar un porducto se mostrara un modal con el mensaje de éxito o error.
- En ver pedidos si se intenta ir a una página que no existe, se mostrará 404.
- En información producto si se intenta ir a una página que no existe, se mostrará 404.
- Creo que eso es todo :3 fuerza en el semestre!
  