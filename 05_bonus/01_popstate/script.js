const h1 = document.querySelector('h1')

window.addEventListener('popstate', (event) => {
    alert('WARTE NOCH')
})

history.pushState({ page: 1 }, null, location.href)
