const body = document.querySelector('body')
const open = document.querySelector('.open');
const close = document.querySelector('.close')

open.addEventListener('click', (e) => {
    body.classList.add('wrap')
})

close.addEventListener('click', (e) => {
    body.classList.remove('wrap')
}) 