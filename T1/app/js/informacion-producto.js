// -- url parameter --
const id = new URLSearchParams(window.location.search).get('id');
// dom elements
const info_container = document.getElementById('info-container');
// lets just have the products right here as an object. a stand-in for a database.
const productosData = [
    {
        "id": 0,
        "Tipo": "Verdura",
        "Producto(s)": ["Aceituna", "Aceituna", "Aceituna"],
        "Región": "VI - Región del Libertador Gral. Bernardo O’Higgins",
        "Comuna": "Rancagua",
        "Fotos": ["./assets/img/aceitunas.png"],
        "Descripcion": "3 aceitunas en una lata",
        "Productor": "Don Aceituno",
        "Email": "don@aceituno.cl",
        "Fono": "+569 1234 5678",
    },
    {
        "id": 1,
        "Tipo": "Verdura",
        "Producto(s)": ["Brócoli"],
        "Región": "VII - Región del Maule",
        "Comuna": "Curicó",
        "Fotos": ["./assets/img/brocoli.png"],
        "Descripcion": "1 brócoli añejo.",
        "Productor": "Brother Coli",
        "Email": "brodercoli@funaosverduras.cl",
        "Fono": "+569 1111 1111",
    },
    {
        "id": 2,
        "Tipo": "Verdura",
        "Producto(s)": ["Champiñón"],
        "Región": "RM - Región Metropolitana de Santiago",
        "Comuna": "Santiago",
        "Fotos": ["./assets/img/champinon.png"],
        "Descripcion": "Un champiñón claramente no alucinógeno.",
        "Productor": "El sujeto encapuchado detrás de la Copec de la esquina",
        "Email": "tramites.santiago@investigaciones.cl",
        "Fono": "",
    },
    {
        "id": 3,
        "Tipo": "Fruta",
        "Producto(s)": ["Coco"],
        "Región": "V - Región de Valparaíso",
        "Comuna": "Viña del Mar",
        "Fotos": ["./assets/img/coco.png"],
        "Descripcion": "Un coco, pero sin la leche de coco. Solo el coco.",
        "Productor": "Coco Co.",
        "Email": "señor.coquitos@cococo.co",
        "Fono": "+569 8765 4321",
    },
    {
        "id": 4,
        "Tipo": "Fruta",
        "Producto(s)": ["Limón"],
        "Región": "VIII - Región del Biobío",
        "Comuna": "Concepción",
        "Fotos": ["./assets/img/limon.png"],
        "Descripcion": "Se regala porque está embrujado.",
        "Productor": "Shelbyville Limones",
        "Email": "burneremail@shelbyville.com",
        "Fono": "",
    },
    {
        "id": 5,
        "Tipo": "Fruta",
        "Producto(s)": ["Manzana"],
        "Región": "IX - Región de la Araucanía",
        "Comuna": "Temuco",
        "Fotos": ["./assets/img/manzana.png", "./assets/img/manzana2.png", "./assets/img/manzana3.png"],
        "Descripcion": "",
        "Productor": "El Huerto de la Esquina",
        "Email": "stemen@elhuerto.cl",
        "Fono": "+569 1827 3645",
    },
    {
        "id": 6,
        "Tipo": "Fruta",
        "Producto(s)": ["Pera"],
        "Región": "XIV - Región de Los Ríos",
        "Comuna": "Valdivia",
        "Fotos": ["./assets/img/pera.png"],
        "Descripcion": "La fruta favorita de Beauchef.",
        "Productor": "Doña Peralta",
        "Email": "meestoyquedando@sinideas.cl",
        "Fono": "+569 6666 6666",
    },
    {
        "id": 7,
        "Tipo": "Fruta",
        "Producto(s)": ["Sandía"],
        "Región": "XV - Región de Arica y Parinacota",
        "Comuna": "Arica",
        "Fotos": ["./assets/img/sandia.png"],
        "Descripcion": "Robada por un cartel de Sandías directamente desde Arica para todo Chile.",
        "Productor": "Los Saniones de Arica",
        "Email": "contrabandistas@desandia.cl",
        "Fono": "+569 8888 8888",
    },
    {
        "id": 8,
        "Tipo": "Verdura",
        "Producto(s)": ["Tomate"],
        "Región": "I - Región de Tarapacá",
        "Comuna": "Iquique",
        "Fotos": ["./assets/img/tomate.png"],
        "Descripcion": "Un tomate a 0.000001 segundos de podrirse. Compre ya!",
        "Productor": "Tonto Mate",
        "Email": "tonto@mate.cl",
        "Fono": "",
    },
    {
        "id": 9,
        "Tipo": "Verdura",
        "Producto(s)": ["Zanahoria"],
        "Región": "II - Región de Antofagasta",
        "Comuna": "Antofagasta",
        "Fotos": ["./assets/img/zanahoria.png"],
        "Descripcion": "No se la den a conejos porque se pueden volver adictos. Un conejo adicto podría matarlo.",
        "Productor": "Zanahoria S.A.",
        "Email": "bugs@bunny.cl",
        "Fono": "+569 0000 0000",
    }
];

// get the product data
const producto = productosData.find(producto => producto.id == id);

// add all the text data:
const text_container = document.createElement('div');

const tipo = document.createElement('p');
tipo.textContent = "Tipo: "+ producto["Tipo"];
const productos = document.createElement('p');
productos.textContent = "Producto(s): " + producto["Producto(s)"].join(', ');
const region = document.createElement('p');
region.textContent = "Región: " + producto["Región"];
const comuna = document.createElement('p');
comuna.textContent = "Comuna: " + producto["Comuna"];
const descripcion = document.createElement('p');
if (producto["Descripcion"] == "") {
    producto["Descripcion"] = "Sin descripción.";
}
descripcion.textContent = "Descripcion: " + producto["Descripcion"];
const productor = document.createElement('p');
productor.textContent = "Productor: " + producto["Productor"];
const email = document.createElement('p');
email.textContent = "Email: " + producto["Email"];
const fono = document.createElement('p');
if (producto["Fono"] == "") {
    producto["Fono"] = "No disponible.";
}
fono.textContent = "Fono: " + producto["Fono"];
text_container.appendChild(tipo);
text_container.appendChild(productos);
text_container.appendChild(region);
text_container.appendChild(comuna);
text_container.appendChild(descripcion);
text_container.appendChild(productor);
text_container.appendChild(email);
text_container.appendChild(fono);

text_container.classList.add('text-container');

// add the images
const fotos_container = document.createElement('div');
const fotos_label = document.createElement('p');
fotos_label.textContent = "Fotos (click para expandir):";
fotos_container.appendChild(fotos_label);
producto["Fotos"].forEach((foto) => {
    const img = document.createElement('img');
    img.src = foto;
    img.classList.add('img-thumbnail');
    img.addEventListener('click', () => {
        img.classList.toggle('img-thumbnail');
        img.classList.toggle('img-expanded');
    });
    fotos_container.appendChild(img);
});
fotos_container.classList.add('fotos-container');

info_container.appendChild(text_container);
info_container.appendChild(fotos_container);

