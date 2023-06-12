// DRM

addEventListener('contextmenu', (e) => {
    e.preventDefault()
})

// somehow doesnt work but it is what it fucking is i guess
addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key == 'i') {
        e.preventDefault()
    }

    if (e.key == 'f12') {
        e.preventDefault()
    }
})

// copy email.
// const email = document.querySelector('.btn-submit')

// email.addEventListener('click', () => {
//     navigator.clipboard.writeText('https://mail.google.com/mail/u/1/#inbox?compose=new')
// })