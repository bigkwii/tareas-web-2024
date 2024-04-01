// -- dom elements --
const frutasContainer = document.getElementById("frutas-container");
const verdurasContainer = document.getElementById("verduras-container");
const productosContainer = document.getElementById("productos")
const selectComuna = document.getElementById("comuna");

// -- consts --
// fruits
const frutas = ["Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja", "Pomelo", "Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña", "Plátano", "Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero", "Pera", "Uva", "Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"];
// vegetables
const verduras = ["Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino", "Haba", "Maíz", "Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago", "Puerro", "Acelga", "Espinaca", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria"];
// region to comunas object
region_to_comunas = {
    "regiones": [
        {
            "region": "Arica y Parinacota",
            "roman": "XV",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            "region": "Tarapacá",
            "roman": "I",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "region": "Antofagasta",
            "roman": "II",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            "region": "Atacama",
            "roman": "III",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            "region": "Coquimbo",
            "roman": "IV",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            "region": "Valparaíso",
            "roman": "V",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
            "region": "Región del Libertador Gral. Bernardo O’Higgins",
            "roman": "VI",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            "region": "Región del Maule",
            "roman": "VII",
            "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            "region": "Región de Ñuble",
            "roman": "XVI",
            "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
        },
        {
            "region": "Región del Biobío",
            "roman": "VIII",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
        {
            "region": "Región de la Araucanía",
            "roman": "IX",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
        },
        {
            "region": "Región de Los Ríos",
            "roman": "XIV",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            "region": "Región de Los Lagos",
            "roman": "X",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            "region": "Región Aisén del Gral. Carlos Ibáñez del Campo",
            "roman": "XI",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            "region": "Región de Magallanes y de la Antártica Chilena",
            "roman": "XII",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        },
        {
            "region": "Región Metropolitana de Santiago",
            "roman": "RM",
            "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
         }
    ]
}

// -- functions --
// display a bunch of checkboxes depending on the given type
const displayCheckboxes = (type) => {
    let product_list;
    if (type === "Fruta") {
        product_list = frutas;
    }
    if (type === "Verdura") {
        product_list = verduras;
    }
    // remove all items from the container
    productosContainer.innerHTML = "";
    // create the checkboxes
    product_list.forEach(product => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = type;
        checkbox.value = product;
        checkbox.id = product;
        checkbox.onclick = () => checkLimit(checkbox);
        const span = document.createElement("span");
        span.classList.add("checkbox-checkmark");
        const label = document.createElement("label");
        label.htmlFor = product;
        label.appendChild(document.createTextNode(product));
        label.appendChild(checkbox);
        label.appendChild(span);
        label.classList.add("checkbox-container");
        productosContainer.appendChild(label);
    });
}

// called when the user clicks a checkbox. It checks if there aren't more than 5 checkboxes checked
// if there are, alerts the user that the limit is 5 and unchecks the last checked checkbox
const checkLimit = (checkbox) => {
    const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    if (checkedCheckboxes.length > 5) {
        alertModal("Alerta!", "No puedes seleccionar más de 5 productos.");
        checkbox.checked = false;
    }
}

// display the comunas depending on the selected region
const displayComunas = (roman) => {
    // go get the correct list of comunas from the region_to_comunas object
    const comunas = region_to_comunas.regiones.find(region => region.roman === roman).comunas;
    // remove all options from the comuna select
    selectComuna.innerHTML = "";
    // add the default option
    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.innerText = "Seleccione una comuna";
    selectComuna.appendChild(defaultOption);
    // add the comunas options
    comunas.forEach(comuna => {
        const option = document.createElement("option");
        option.value = comuna;
        option.innerText = comuna;
        selectComuna.appendChild(option);
    });
}

// -- validation --
// make sure the user selected either frutas or verduras
const validateType = () => {
    const selectedType = document.querySelector("input[name='tipo']:checked");
    // console.log("selected type: ", selectedType);
    if (!selectedType) {
        return [false, "Debes seleccionar si tu producto es una fruta o una verdura."];
    }
    return [true, ""];
}

// make sure the number of selected products is between 1 and 5
const validateProducts = () => {
    const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    // console.log("checked checkboxes: ", checkedCheckboxes);
    if (checkedCheckboxes.length < 1 || checkedCheckboxes.length > 5) {
        return [false, "Debes seleccionar entre 1 y 5 productos."];
    }
    return [true, ""];
}

// make sure the description less than 4*50 chars
// (optional)
const validateDescription = () => {
    const description = document.getElementById("description").value;
    // console.log("description: ", description);
    if (description.length > 0 && description.length > 200) {
        return [false, "La descripción debe tener no más de 200 caracteres."];
    }
    return [true, ""];
}

// make sure the user uploaded at least one image
const validateImages = () => {
    const image1 = document.getElementById("image1").value;
    const image2 = document.getElementById("image2").value;
    const image3 = document.getElementById("image3").value;
    // console.log("image1: ", image1);
    // console.log("image2: ", image2);
    // console.log("image3: ", image3);
    if (!image1 && !image2 && !image3) {
        return [false, "Debes subir al menos una imagen."];
    }
    return [true, ""];
}

// make sure the user selected a region
const validateRegion = () => {
    const region = document.getElementById("region").value;
    // console.log("selected region: ", region);
    if (!region || region === "default") {
        return [false, "Debes seleccionar una región."];
    }
    return [true, ""];
}

// make sure the user selected a comuna
const validateComuna = () => {
    const comuna = document.getElementById("comuna").value;
    // console.log("selected comuna: ", comuna);
    if (!comuna || comuna === "default") {
        return [false, "Debes seleccionar una comuna."];
    }
    return [true, ""];
}

// make sure the user added his name and that it's less than 80 chars
const validateProductor = () => {
    const name = document.getElementById("productor").value;
    // console.log("productor: ", name);
    if (!name || name.length > 80) {
        return [false, "El nombre del productor no puede estar vacío y debe tener menos de 80 caracteres"];
    }
    return [true, ""];
}

// make sure the user added his email, that it's a valid email and that it's less than 30 chars
const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = document.getElementById("email").value;
    // console.log("email: ", email);
    if (!email || email.length > 30 || !emailRegex.test(email)) {
        return [false, "El email no puede estar vacío, debe tener menos de 30 caracteres y ser un email válido."];
    }
    return [true, ""];
}

// make sure the user added his phone number, that it follows the format and that it's less than 15 chars
// (opcional)
const validatePhone = () => {
    const phoneRegex = /^^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$$/;
    const phone = document.getElementById("phone").value;
    // console.log("phone: ", phone);
    if (phone.length > 0 && (phone.length > 15 || !phoneRegex.test(phone))) {
        return [false, "El teléfono debe ser un número válido y de no más de 15 carácteres."];
    }
    return [true, ""];
}

// the big one
const validateForm = () => {
    const validations = [
        validateType(),
        validateProducts(),
        validateDescription(),
        validateImages(),
        validateRegion(),
        validateComuna(),
        validateProductor(),
        validateEmail(),
        validatePhone()
    ];
    // console.log("validations: ", validations);
    const isValid = validations.every(validation => validation[0]);
    if (!isValid) {
        const errorMessage = validations.filter(validation => !validation[0]).map(validation => validation[1]).join("\n");
        alertModal("Hay errores en el formulario!:", errorMessage);
    } else {
        confirmationModal("El formulario es válido :)", "¿Confirma el registro de este producto?", "Sí, confirmo.", "No, quiero volver al formulario.");
    }
}

// -- button listener --
const submitButton = document.getElementById("submit-btn");
submitButton.addEventListener("click", () => {
    validateForm();
});
