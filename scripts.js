const modalOverlay = document.querySelector('.modal-overlay')
const modal = document.querySelector('.modal')
const content = document.querySelector('.modal-content')
const cards = document.querySelectorAll('.cards')
const frame = document.querySelector('.ifr')

for (let card of cards) {
    card.addEventListener('click', function () {
        const cursoId = card.getAttribute('id')
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${cursoId}`
    })
}

document.querySelector('.close-modal').addEventListener('click', function () {
    //fechando o modal
    modalOverlay.classList.remove('active')
})

document.querySelector('.max-modal').addEventListener('click', function (a) {
    //maximizando o modal
    a.preventDefault()
    if (modalOverlay.classList.contains('maximize')) {
        modalOverlay.classList.remove('maximize')
        modal.classList.remove('modal-max')
        content.classList.remove('modal-content-max')
        frame.classList.remove('iframe-max')
        console.log('saiu')

    } else {
        modalOverlay.classList.add('maximize')
        modal.classList.add('modal-max')
        content.classList.add('modal-content-max')
        frame.classList.add('iframe-max')
        console.log('carol')

    }
})