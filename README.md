# TAREA 1 CC5002 - Desarrollo de Aplicaciones Web - 2024-1

## Por: Álvaro Morales

### Cómo correr

Simplemente ocupe Live Server en esta carpeta y vaya a `http://127.0.0.1:5500/app/index.html` en su navegador para ver la página web.

### Notas

Acá explicaré algunas decisiones de diseño que tomé:

- Como las imágenes necesitaban tener derechos de uso según el enunciado, decidí hacerlas todas yo (excepto el fondo, que es de libre uso), así que espero que perdonen la calidad de dibujo.
- El enunciado especificaba que todas las páginas excepto `index.html` debían tener un botón para volver a la página principal, sin embargo decidí que `informacion-producto.html` devolviera a `ver-productos.html` y que `información-pedidos.html` devolviera a `ver-pedidos` ya que me parecía más lógico.
- No estaba seguro si hacer que al hacer click en un producto/pedido se abriera en una nueva pestaña o no. Al final decidí que no, ya que de todas formas se tiene un botón para vovler al listado.
- Hay mucho código con nombres malos ya que lo hice para la 1era mitad de la tarea, antes de darme cuenta de hasta que punto podía reutilizar código. Le hace falta un refactor bastante extenzo a este proyecto.
- Por lo mismo, hay bastante javascript copiado y pegado cuando tal vez debería haberlo refactorizado para poder reutilizarlo, pero queda poco plazo así que lo dejaré así.
- Al no haber backend, me inventé los datos por medio de objetos de javascript. 10 pedidos y 10 productos.
- Uno de los productos tiene 3 aceitunas. Esto no sería posible de registrar, pero solo necesitaba un caso de prueba para ver que manejaba bien productos con más de 1 verdura. En los pedidos hay más casos como este, los cuales sí tienen sentido.
- El CSS no es paticularmente bonito. ¯\\_(ツ)_/¯ No soy diseñador gráfico.
  