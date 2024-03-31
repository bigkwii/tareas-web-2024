// -- DOM elements --
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalMessage = document.getElementById("modal-message");

const alertModal = (title, message) => {
    clearModal();
    writeOnModal(title, message);
    openModal();
}

const confirmationModal = (title, message, yes, no) => {
    clearModal();
    writeOnModal(title, message);
    const yesButton = document.createElement("button");
    yesButton.classList.add("btn");
    yesButton.innerText = yes;
    yesButton.onclick = () => {
        closeModal();
        finishModal("Hemos recibido el registro de producto.", "Muchas gracias!");
    };
    const noButton = document.createElement("button");
    noButton.classList.add("btn");
    noButton.innerText = no;
    noButton.onclick = () => {
        closeModal();
    };
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(yesButton);
    modalMessage.appendChild(noButton);
    openModal();
}

const finishModal = (title, message) => {
    clearModal();
    writeOnModal(title, message);
    const goBackAnchor = document.createElement("a");
    goBackAnchor.classList.add("btn");
    goBackAnchor.style.font = "1rem sans-serif";
    goBackAnchor.innerText = "Volver al inicio";
    goBackAnchor.href = "index.html";
    modalMessage.appendChild(document.createElement("br"));
    modalMessage.appendChild(goBackAnchor);
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
