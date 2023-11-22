// Header
/**View Modal register */
var registerElement = document.querySelector('#Register');
var modalRegisterElement = document.querySelector('.modal-register');
registerElement.onclick = function () {
    modalRegisterElement.style.display = 'flex';
}
/**View Modal Login */
var loginElement = document.querySelector('#Login');
var modalLoginElement = document.querySelector('.modal-login');
loginElement.onclick = function () {
    modalLoginElement.style.display = 'flex';
}

/**Remove Modal */
var removeRegisterElement = document.querySelector('.remove-register');
removeRegisterElement.onclick = function () {
    modalRegisterElement.style.display = 'none'
}

var removeLoginElement = document.querySelector('.remove-login');
removeLoginElement.onclick = function () {  
    modalLoginElement.style.display = 'none'
}
modalLoginElement.onkeydown = function (e) {
    if (e.which === 27) {
        modalLoginElement.style.display = 'none';
    }
}
modalRegisterElement.onkeydown = function (e) {
    if (e.which === 27) {
        modalRegisterElement.style.display = 'none';
    }
}

/**Switch button */
var switchFormLogin = document.querySelector('.switch-form-login');
var switchFormRegister = document.querySelector('.switch-form-register');
var formRegister = document.querySelector('.Auth-form-register');
switchFormLogin.onclick = function () {
    modalRegisterElement.style.display = 'none';
    modalLoginElement.style.display = 'flex';
}
switchFormRegister.onclick = function () {
    modalLoginElement.style.display = 'none';
    modalRegisterElement.style.display = 'flex';
}

/**Search */

// preventDEfault(); Loại bỏ hành vi mặc định lên thẻ ul
var searchHistoryElement = document.querySelector('.header-search-history');
searchHistoryElement.onmousedown = function(e) {
    e.preventDefault();
}
// Đưa innertext của li vào ô input
var ulSearchElement = document.querySelector('.header-search-history__list');
var inputSearchElement = document.querySelector('.header-search__input');
ulSearchElement.onclick = function (e) {
    inputSearchElement.value = e.target.innerText;
}

var submitSearchElement = document.querySelector('.header-search__btn');
// Đưa value ô input vào li đầu tiên qua event
submitSearchElement.onclick = function () {
    if (inputSearchElement.value) {
        // Tạo ra 1 li element để đưa vào đầu ul
        var li1 = document.createElement('li');
        li1.classList.add('header-search-history__item');
        li1.innerHTML = `<a href class="header-search-history__item-link">${inputSearchElement.value}</a>`;
        // Thêm li1 vào đầu ul
        ulSearchElement.insertBefore(li1, ulSearchElement.childNodes[0]);
        // Xóa li cuối ul
        ulSearchElement.removeChild(ulSearchElement.lastElementChild);
    }
}
/**View Notify, View Cart */
var notifyElement = document.querySelector('.header-navbar__item--appear-Notify');
var listNotifyElement = document.querySelector('.header-Notify');
notifyElement.onmouseover = function () {
    listNotifyElement.style.display = 'block';
}
notifyElement.onmouseleave = function () {
    listNotifyElement.style.display = 'none';
}
var cartElement = document.querySelector('.header-cart__wrap');
var listCartElement = document.querySelector('.header-cart');
cartElement.onmouseover = function () {
    listCartElement.style.display = 'block';
}
cartElement.onmouseleave = function () {
    listCartElement.style.display = 'none'; 
}
// Remove view Notify, cart
document.onclick = function () {
    listNotifyElement.style.display = 'none';
    listCartElement.style.display = 'none';
}
/**Register/Login in Notify */
var registerNotifyElement = listNotifyElement.querySelector('.btn-register--no-Notify');
var loginNotifyElement = listNotifyElement.querySelector('.btn-login--no-Notify');
registerNotifyElement.onclick = function () {
    listNotifyElement.style.display = 'none';
    modalRegisterElement.style.display = 'flex';
}
loginNotifyElement.onclick = function () {
    listNotifyElement.style.display = 'none';
    modalLoginElement.style.display = 'flex';
}


// Container
/**Category */
var categoryContainer = document.querySelector('.category__list');
var categoryElements = categoryContainer.querySelectorAll('.category__item');
for (var i = 0; i < categoryElements.length; i++) {
    categoryElements[i].addEventListener('click', function (e) {
        e.preventDefault();
        var current = categoryContainer.querySelector('.category__item--active');
        current.classList.remove('category__item--active');
        // This chính là Element gọi đến sự kiện
        this.classList.add('category__item--active');
    });
}

/**favourite product */
var likeElements = document.querySelectorAll('.home-product-item__like-icon-empty');
Array.from(likeElements).forEach(function (likeElement) {
    likeElement.onclick = function (e) {
        e.preventDefault();
        likeElement.parentElement.classList.remove('home-product-item__like');
        likeElement.parentElement.classList.add('home-product-item__like--liked');
    }
});
var likedElements = document.querySelectorAll('.home-product-item__like-icon-fill');
Array.from(likedElements).forEach(function (likedElement) {
    likedElement.onclick = function (e) {
        e.preventDefault();
        likedElement.parentElement.classList.remove('home-product-item__like--liked');
        likedElement.parentElement.classList.add('home-product-item__like');
    }
});

/**Rating product */
var interactContainer = document.querySelector('.home-product-item__interact');
interactContainer.onclick = function (e) {
    e.preventDefault();
    // e.stopPropagation();
}
var rateElements = document.querySelectorAll('.fa-star');
Array.from(rateElements).forEach(function (rateElement) {
    rateElement.onclick = function (e) {
        e.preventDefault();
        rateElement.classList.add('home-product-item__star--gold');
    }
});


/**Pagination */
// var paginationContainer = document.querySelector('.pagination');
// var pageElements = paginationContainer.querySelectorAll('.pagination__item');
// Array.from(pageElements).forEach(function (pageElement, index) {
//     var lengthArray = pageElements.length;
//     pageElement.addEventListener('click', function (e) {
//         e.preventDefault();
//         var current = paginationContainer.querySelector('.pagination__item--active');
//         // Xóa active hiện tại 
//         current.classList.remove('pagination__item--active');
//         // Thêm active vào element được click
//         this.classList.add('pagination__item--active');
//         var backPageElement = document.querySelector('.pagination__go-back-item'); 
//         if (index === 0) {
//             backPageElement.classList.add('pagination__item--disabled');  
//         } else {
//             backPageElement.classList.remove('pagination__item--disabled');
//         } 
//         var nextPageElement = document.querySelector('.pagination__next-item'); 
//         if (index === lengthArray - 1) {
//             nextPageElement.classList.add('pagination__item--disabled');  
//         } else {
//             nextPageElement.classList.remove('pagination__item--disabled');
//         }
//     });
//     if (index != lengthArray - 1) {
//         var nextPageElement = document.querySelector('.pagination__next-item');
//         nextPageElement.onclick = function (e) {
//             e.preventDefault();
//             index = index + 1;
//         }
//     }
// }); 
    
    // var nextPageElement = document.querySelector('.pagination__next-item');
    // nextPageElement.onclick = function (e) {
    //     e.preventDefault();

    //     var j = i + 1;
    //     console.log(j)
    //     console.log(pageElements[0])
    //     while (pageElements[j]) {
    //         console.log(pageElements[j])
    //         var current = paginationContainer.querySelector('.pagination__item--active');
    //         // Xóa active hiện tại 
    //         current.classList.remove('pagination__item--active');
    //         pageElements[j].classList.add('pagination__item--active');
    //         current = pageElements[j];
    //     }
    // }
