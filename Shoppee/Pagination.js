var totalProducts = document.querySelectorAll('.home-product-item');
var thisPage = 1;
var limit = 15;

function loadItem () {
    var beginGet = limit * (thisPage - 1);
    var endGet = limit * thisPage - 1;;
    Array.from(totalProducts).forEach(function (item, index) {
        if (index >= beginGet && index <= endGet) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }      
    });
    // Callback đẻ gán lại i cho thisPage
    // i = 2 thì thisPage = 2
    listPage();
};
loadItem();

function listPage () {
    // Math.cell(); làm tròn trên
    var totalPage = Math.ceil(totalProducts.length / limit);
    var listPage = document.querySelector('.pagination');
    listPage.innerHTML = '';
    var movePage = document.querySelector('.home-filter-page__number');
    var movePageControl = document.querySelector('.home-filter-page__control');
    movePageControl.innerHTML = '';
    for (i = 1; i <= totalPage; i++) {
        var newPage = document.createElement('li');
        newPage.classList.add('pagination__item');
        newPage.setAttribute('onclick', "changePage("+ i +")");
        newPage.innerText = i;
        if (i == thisPage) {
            newPage.classList.add('pagination__item--active');
            // Move Page ở góc trên
            movePage.innerHTML = `<span class="home-filter-page__current">${i}</span>/${totalPage}`;
        }
        // Đưa list li vào trong ul
        listPage.appendChild(newPage);
    }
    // List Page: Previous Page
    var prevPage = document.createElement('li');
    prevPage.classList.add('pagination__item');
    prevPage.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
    // Thêm li vào đầu ul
    listPage.insertBefore(prevPage, listPage.childNodes[0])
    prevPage.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
    
    // List Page: Next Page
    // var prevPageSmall = document.querySelector('.prev-page');
    // prevPageSmall.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
    var nextPage = document.createElement('li');
    nextPage.classList.add('pagination__item');
    nextPage.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;
    // Thêm li vào cuối ul
    listPage.insertBefore(nextPage, listPage.childNodes[totalPage + 1]);
    nextPage.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");

    // Move Page: Prev Page góc ở trên
    var prevPageSmall = document.createElement('div');
    prevPageSmall.classList.add('home-filter-page__btn');
    prevPageSmall.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    prevPageSmall.setAttribute('onclick', "changePage("+ (thisPage - 1) +")");
    movePageControl.appendChild(prevPageSmall);
    // Move Page: Next Page góc ở trên
    // var nextPageSmall = document.querySelector('.next-page');
    // nextPageSmall.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
    var nextPageSmall = document.createElement('div');
    nextPageSmall.classList.add('home-filter-page__btn');
    nextPageSmall.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    nextPageSmall.setAttribute('onclick', "changePage("+ (thisPage + 1) +")");
    movePageControl.appendChild(nextPageSmall);
    
    // Disabled
    if (thisPage === 1) {
        prevPage.classList.add('pagination__item--disabled');
        prevPageSmall.classList.add('home-filter-page__btn--disabled');
    };
    if (thisPage === totalPage) {
        nextPage.classList.add('pagination__item--disabled');
        nextPageSmall.classList.add('home-filter-page__btn--disabled');
    }
};
function changePage (i) {
    // Gán i cho thisPage
    thisPage = i;
    loadItem();
}
