document.querySelectorAll('.price').forEach(item => {
    item.textContent = new Intl.NumberFormat('en-EN', {
        currency: 'usd',
        style: 'currency'
    }).format(item.textContent)
})

const $card = document.querySelector('#card')
if($card) {
    $card.addEventListener('click', event => {
        if(event.target.classList.contains('js-remove')) {
            const id = event.target.dataset.id

            fetch('/card/remove/' + id, {
                method: 'delete'
            })
            .then(
                res = res.json()
            )
            .then(card => {
                
            })
        } else {

        }
    })
}