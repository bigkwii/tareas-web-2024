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
- Habiendo dicho esto último, por lo tanto, no se cargan datos de juguete en estos scripts. Favor de meter varios datos de mentira a través de la página antes de intentar ver los gráficos.
- Los gráficos están hechos con Flot.
- Decidí no instalar jQuery y Flot directamente, sino que los estoy inclyendo desde un CDN (junto con un par de assets). Así que por favor revisar esto con conexión a internet.
- Los gráficos terminaron siendo bastante simples y no entregan información particularmente reveladora o interesante, pero cumplen con lo pedido.
- En particular, decidí hacer 2 gráficos circulares para Productos, uno solo comparando cuantso productos son Fruta vs cuantos son Verdura, y otro comparando los vegetales en sí, en total.
- Para los gráficos de pedidos, poner todas las comunas lo haría completamente ilegible, así que hice un gráfico circular por región, con botones para cambiar entre las regiones.
- También estoy omitiendo algunos datos si es que no hay suficientes datos para poner el label, para ver el detalle se puede hacer click en los sectores del gráfico, y se abrirá un modal.
- Por último, la implementación de los gráficos es bastante fea, pero funciona. No me dio tiempo de hacerlo más bonito o escalable. También está más o menos para vista móvil, hay cosas que se salen del márgen, pero no tengo tiempo de arreglarlo.
  