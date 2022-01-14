
$('#num').on('keydown', e => {
    e.preventDefault()
})

$('#num').on('focus', e => {
    makeKeyboard()
})

$('#num').on('blur', e => {
    $('.keyboard').css({
        display:'none'
    })
})

document.querySelector('.keyboard').addEventListener('click', e => {
    e.preventDefault()
    if($(e.target).prop('tagName') == 'DIV') return

    if(e.target.classList.contains('del')) {
        let val = $('#num').val()
        $('#num').val(val.substr(0, val.length-1))
    } else if(e.target.classList.contains('reset')) {
        makeKeyboard()
    } else {
        $('#num').val($('#num').val()+e.target.innerHTML)
    }
})

function makeKeyboard() {
    let html = ''
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    $('.keyboard').css({
        display:'grid'
    })

    while(arr.length > 1) {
        let idx = Math.floor(Math.random() * arr.length)
        html+=`<button class="btn btn-primary">${arr[idx]}</button>`
        arr.splice(idx, 1)
    }
    html+=` <button class="btn btn-secondary del">&lt;-</button>
            <button class="btn btn-primary">${arr[0]}</button>
            <button class="btn btn-secondary reset">reset</button>`
    $('.keyboard').html(html)
}