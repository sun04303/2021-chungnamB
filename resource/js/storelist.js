fetch('./resource/js/data.json')
.then(res => res.json())
.then(data => {
    console.log(data)

    data.forEach((item, idx) => {
        const {name, etc} = item

        let card = `<div class="card" style="width: 18rem;">
                        <img src="./resource/img/빵집/${name}/1.jpg" class="card-img-top" alt="shop-image">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${etc}</p>
                            <button class="btn btn-secondary view__store" data-id="${idx}" data-bs-toggle="modal" data-bs-target="#storeModal">빵집 보기</button>
                            <button class="btn btn-primary view__goods">상품 보기</button>
                        </div>
                    </div>`
        $('.shop .box').append(card)
    })

    document.querySelectorAll('.view__store').forEach(item => {
        item.addEventListener('click', e => {
            
        })
    })
})

fetch('./resource/js/menus.json')
.then(res => res.json())
.then(data => {
    console.log(data)

    makegoods(data, "전체")

    document.querySelectorAll('.view__goods').forEach(item => {
        item.addEventListener('click', e => {
            makegoods(data, e.path[1].children[0].innerHTML)
        })
    })

    document.querySelector('.view__all').addEventListener('click', e => {
        makegoods(data, "전체")
    })
})

function makegoods(data, target) {
    let cart = document.querySelector('.cart .box')
    let eventTarget
    let goodsList = []

    $('.goods .box').html("")
    
    data.forEach(item => {
        if(target != '전체' && item.name !== target)
        return
        
        const {image, menuname, name, price} = item
        
        let card = `<div class="card" style="width: 18rem;">
                        <img src="./resource/img/menus/${image}" class="card-img-top" alt="shop-image">
                        <div class="card-body">
                            <h5 class="card-title">${menuname}</h5>
                            <p class="card-text">${name} / ${Number(price).toLocaleString()}\\</p>
                        </div>
                    </div>`
        
        $('.goods .box').append(card)
    })

    document.querySelectorAll('.goods img').forEach(item => {
        item.addEventListener('dragstart', e => {
            eventTarget = e.target
        })
    })

    window.addEventListener('mouseup', e => {

        let item = `<div class="item">
                        <img src="${target.src}" alt="goods-image">
                    </div>`

        $('.cart .box').append(item)
    })
}
