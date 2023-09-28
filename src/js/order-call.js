// order-call

let orderCallBtn = document.querySelector('#order-call')
let orderCallModal = document.querySelector('.feedback')
let closeBtn = document.querySelectorAll('.feedback-img')
let shadow = document.querySelector('.shadow')

orderCallBtn.addEventListener('click', () => {
    orderCallModal.classList.remove('hidden')
    shadow.classList.remove('hidden')
})

closeBtn[0].addEventListener('click', () => {
    orderCallModal.classList.add('hidden')
    shadow.classList.add('hidden')
})

let responsivenessBtn = document.querySelector('#responsiveness')
let responsivenessModal = document.querySelector('.responsiveness')

responsivenessBtn.addEventListener('click', () => {
    responsivenessModal.classList.remove('hidden')
    shadow.classList.remove('hidden')
})
closeBtn[1].addEventListener('click', () => {
    responsivenessModal.classList.add('hidden')
    shadow.classList.add('hidden')
})