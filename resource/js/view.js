window.addEventListener('load', e => {
    let data = JSON.parse(localStorage.getItem('product'))
    let basket = JSON.parse(localStorage.getItem('basket'))
    if(data) {
        const {image, menuname, name, etc, price, shelf, time} = data
        console.log(data)
        document.querySelector('.left img').src = `./resource/img/menus/${image}`
        $('h2').html(`${menuname} / ${name}`)
        $('.top p').html(etc)
        $('.price').html(`${Number(price).toLocaleString()}\\`)
        $('.date').html(shelf)
        $('.time').html(time)
        $('.tot').html(`${Number(price).toLocaleString()}\\`)

        $('#cnt').on('change', e => {
            $('.tot').html(`${(Number(price) * $('#cnt').val()).toLocaleString()}\\`)
        })

        document.querySelector('.basket').addEventListener('click', e => {
            if(basket) {
                basket.push(data)
                localStorage.setItem('basket', basket)
                location.href = '/basket.html'
            } else {
                basket = [data]
                localStorage.setItem('basket', basket)
                location.href = '/basket.html'
            }
        })
    } else {
        location.href = '/storelist.html'
    }
})