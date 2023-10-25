document.querySelectorAll('.price').forEach(item => {
    item.textContent = new Intl.NumberFormat('en-EN', {
        currency: 'usd',
        style: 'currency'
    }).format(item.textContent)
})