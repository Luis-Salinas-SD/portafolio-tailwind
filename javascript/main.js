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
        alert('¡¡¡ Gracias por contacatarme, espera mi respuesta pronto !!!');
        this.reset()
    }//if
}//function
