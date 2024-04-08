// -- url parameter --
const id = new URLSearchParams(window.location.search).get('id');
// dom elements
const info_container = document.getElementById('info-container');
// lets just have the products right here as an object. a stand-in for a database.
const pedidosData = [
    {
        "id": 0,
        "Tipo": "Verdura",
        "Producto(s)": ["Lechuga", "Tomate", "Cebolla"],
        "Región": "VI - Región del Libertador Gral. Bernardo O’Higgins",
        "Comuna": "Rancagua",
        "Descripcion": "Aló me da una ensalada.",
        "Comprador": "Don Juanito Perez",
        "Email": "jperez@gmail.com",
        "Fono": "+569 2222 2222",
    },
    {
        "id": 1,
        "Tipo": "Verdura",
        "Producto(s)": ["Zanahoria"],
        "Región": "VII - Región del Maule",
        "Comuna": "Curicó",
        "Descripcion": "demen zanahoria o si no",
        "Comprador": "Bugs Bunny",
        "Email": "bbunny@gmail.com",
        "Fono": "+569 3333 3333",
    },
    {
        "id": 2,
        "Tipo": "Fruta",
        "Producto(s)": ["Kiwi", "Manzana"],
        "Región": "RM - Región Metropolitana de Santiago",
        "Comuna": "Santiago",
        "Descripcion": "no tengo celular, atte: yo él",
        "Comprador": "Joel",
        "Email": "joel@gmail.com",
        "Fono": "",
    },
    {
        "id": 3,
        "Tipo": "Fruta",
        "Producto(s)": ["Limón", "Naranja", "Pera"],
        "Región": "V - Región de Valparaíso",
        "Comuna": "Viña del Mar",
        "Descripcion": "",
        "Comprador": "Señor Invisible Mudo",
        "Email": "invmud@gmail.com",
        "Fono": "+569 8765 4321",
    },
    {
        "id": 4,
        "Tipo": "Fruta",
        "Producto(s)": ["Limón"],
        "Región": "VIII - Región del Biobío",
        "Comuna": "Concepción",
        "Descripcion": "Nos robaron nuestro árbol. Necesitamos limones para hacer limonada.",
        "Comprador": "Bart Simpson",
        "Email": "bart@lossimpson.com",
        "Fono": "+569 4444 4444",
    },
    {
        "id": 5,
        "Tipo": "Fruta",
        "Producto(s)": ["Manzana"],
        "Región": "IX - Región de la Araucanía",
        "Comuna": "Temuco",
        "Descripcion": "Me da una (1) manzana por favor.",
        "Comprador": "Un sujeto con poca hambre",
        "Email": "demen@manzana.cl",
        "Fono": "+569 7777 7777",
    },
    {
        "id": 6,
        "Tipo": "Fruta",
        "Producto(s)": ["Pera"],
        "Región": "XIV - Región de Los Ríos",
        "Comuna": "Valdivia",
        "Descripcion": "Tengo pera",
        "Comprador": "Beauchefian@ promedio",
        "Email": "peron@ing.uchile.cl",
        "Fono": "+569 6969 6969",
    },
    {
        "id": 7,
        "Tipo": "Fruta",
        "Producto(s)": ["Sandía"],
        "Región": "XV - Región de Arica y Parinacota",
        "Comuna": "Arica",
        "Descripcion": "alguien en paine que me de una sandía porfa.",
        "Comprador": "Puanito Jerez",
        "Email": "pjerez@gmail.com",
        "Fono": "+569 0000 1111",
    },
    {
        "id": 8,
        "Tipo": "Verdura",
        "Producto(s)": ["Tomate"],
        "Región": "I - Región de Tarapacá",
        "Comuna": "Iquique",
        "Descripcion": "No me quedan ideas",
        "Comprador": "Cosme Fulanito",
        "Email": "cfulanito@hotmail.com",
        "Fono": "",
    },
    {
        "id": 9,
        "Tipo": "Verdura",
        "Producto(s)": ["Zanahoria"],
        "Región": "II - Región de Antofagasta",
        "Comuna": "Antofagasta",
        "Descripcion": "bla bla bla bla bla",
        "Comprador": "bla bla bla",
        "Email": "bla@bla.bla",
        "Fono": "+569 6669 4200",
    }
];

// get the product data
const pedido = pedidosData.find(pedido => pedido.id == id);

// add all the text data:
const text_container = document.createElement('div');

const tipo = document.createElement('p');
tipo.textContent = "Tipo: "+ pedido["Tipo"];
const productos = document.createElement('p');
productos.textContent = "Producto(s): " + pedido["Producto(s)"].join(', ');
const region = document.createElement('p');
region.textContent = "Región: " + pedido["Región"];
const comuna = document.createElement('p');
comuna.textContent = "Comuna: " + pedido["Comuna"];
const descripcion = document.createElement('p');
if (pedido["Descripcion"] == "") {
    pedido["Descripcion"] = "Sin descripción.";
}
descripcion.textContent = "Descripcion: " + pedido["Descripcion"];
const comprador = document.createElement('p');
comprador.textContent = "Comprador: " + pedido["Comprador"];
const email = document.createElement('p');
email.textContent = "Email: " + pedido["Email"];
const fono = document.createElement('p');
if (pedido["Fono"] == "") {
    pedido["Fono"] = "No disponible.";
}
fono.textContent = "Fono: " + pedido["Fono"];
text_container.appendChild(tipo);
text_container.appendChild(productos);
text_container.appendChild(region);
text_container.appendChild(comuna);
text_container.appendChild(descripcion);
text_container.appendChild(comprador);
text_container.appendChild(email);
text_container.appendChild(fono);

text_container.classList.add('text-container');

info_container.appendChild(text_container);

