//* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[   Menu - Responsive  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

const boton = document.querySelector('#boton')
const menu = document.querySelector('#menu')

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden')
})

//* [[[[[[[[[[[[[[[[[[[[[[[[[[[[[   Menu - Responsive  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]


//! [[[[[[[[[[[[[[[[[[[[[[[[[[[[[   Formulario  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
const formulario = document.querySelector('#formulario')

formulario.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })//fetch
    if (response.ok) {
        document.querySelector('#modal').classList.toggle('hidden')
        const close = document.querySelector('#close')

        close.addEventListener('click', () => {
            modal.classList.toggle('hidden')
        })
        this.reset()

    }//if
}//function
//! [[[[[[[[[[[[[[[[[[[[[[[[[[[[[   /Formulario  ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

