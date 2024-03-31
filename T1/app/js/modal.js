// -- DOM elements --
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

const alertModal = (title, message) => {
    clearModal();
    writeOnModal(title, message);
    openModal();
}

const openModal = () => {
    modal.style.display = "block";
};

const writeOnModal = (title, message) => {
    modalTitle.innerText = title;
    modalMessage.innerText = message;
}

const clearModal = () => {
    writeOnModal("", "");
};

const closeModal = () => {
    modal.style.display = "none";
};
