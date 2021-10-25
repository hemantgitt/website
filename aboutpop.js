const openModalButton = documemt.querySelectorAll('[data-modal-target]');
const closeModalButton = documemt.querySelectorAll('[data-close-button]');

const overlay = document.getElementById('overlay');

openModalButton.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    })
})

closeModalButton.forEach(button => {
    button.addEventListener('click',() =>{
        const modal = button.closet
        openModal(modal);
    })
})

function openModal(modal) {
    if(modal==null) return
    modal.classList.add('active')
    modal.overlay.add('active')
}

function closeModal(modal) {
    if(modal==null) return
    modal.classList.remove('active')
    modal.overlay.remove('active')
}

