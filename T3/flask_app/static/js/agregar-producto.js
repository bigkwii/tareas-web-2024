// -- dom elements --
const frutasContainer = document.getElementById("frutas-container");
const verdurasContainer = document.getElementById("verduras-container");
const productosContainer = document.getElementById("productos")
const selectComuna = document.getElementById("comuna");

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
        checkbox.name = "productos";
        checkbox.value = product.id;
        checkbox.id = product.id;
        checkbox.onclick = () => checkLimit(checkbox);
        const span = document.createElement("span");
        span.classList.add("checkbox-checkmark");
        const label = document.createElement("label");
        label.htmlFor = product.id;
        label.appendChild(document.createTextNode(product.nombre));
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
const displayComunas = (region_index) => {
    // find the element in the regiones array 
    const comunas = regiones[region_index - 1].comunas;
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
        option.value = comuna.id;
        option.innerText = comuna.nombre;
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
    if ((description.trim()).length > 0 && (description.trim()).length > 200) {
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
    if (!(name.trim()) || (name.trim()).length > 80) {
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

// -- submit form --
// gets called by modal (not clean, i know, but it's a quick hack)
const submitForm = () => {
    console.log("submitting form...");
    // get all the relevante data into a FormData object
    const formData = new FormData();
    const selectedType = document.querySelector("input[name='tipo']:checked").value;
    const checkedCheckboxes = document.querySelectorAll("input[type='checkbox']:checked");
    const selectedProducts = Array.from(checkedCheckboxes).map(checkbox => checkbox.value);
    const description = document.getElementById("description").value;
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;
    const productor = document.getElementById("productor").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const image1 = document.getElementById("image1").files[0];
    const image2 = document.getElementById("image2").files[0];
    const image3 = document.getElementById("image3").files[0];
    formData.append("tipo", selectedType);
    formData.append("productos", selectedProducts);
    formData.append("description", description);
    formData.append("region", region);
    formData.append("comuna", comuna);
    formData.append("productor", productor);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("image1", image1);
    formData.append("image2", image2);
    formData.append("image3", image3);
    // submit the form
    fetch("/agregar-producto", {
        method: "POST",
        body: formData
    }).then(response => {
        console.log("response: ", response);
        if (response.ok) {
            finishModal("Hemos recibido el registro de producto.", "Muchas gracias!");
        } else {
            alertModal("Error!", "Hubo un error al enviar el formulario. Inténtelo de nuevo más tarde.");
        }
    });
}

// finishModal("Hemos recibido el registro de producto.", "Muchas gracias!"
// alertModal("Error!", "Hubo un error al enviar el formulario. Inténtelo de nuevo más tarde.")