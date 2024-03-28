// dom elements
const frutasContainer = document.getElementById("frutas-container");
const verdurasContainer = document.getElementById("verduras-container");



// display the given checkbox form depending on the selected radio button
const displayForm = (type) => {
    if (type === "Fruta") {
        frutasContainer.style.display = "block";
        verdurasContainer.style.display = "none";
    }
    if (type === "Verdura") {
        frutasContainer.style.display = "none";
        verdurasContainer.style.display = "block";
    }
}