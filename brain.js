const searchBtn = document.getElementById('search-btn');
const searchBody = document.getElementById('searchBody');
const innerClose = document.getElementById('innerClose');
const searchInput = document.getElementById('searchInput');
const bgX = document.querySelectorAll('.bgX');
const menuBtn = document.getElementById('menu-btn');
const navClose = document.getElementById('nav-close');

searchBtn.addEventListener('click', e => {
    searchBody.classList.toggle('active');
    if(searchInput.style.height !== '0px') {
        searchInput.style.height = '40px'
    }else{
        searchInput.style.height = '0px'
    }
});
innerClose.addEventListener('click', e =>{
    searchBody.classList.toggle('active');
    searchInput.classList.toggle('active');
});

function made(main) {
    main.addEventListener('click', e => {
        bgX.forEach(ele => {
            ele.classList.toggle('active');
        })
    });
}
made(menuBtn);
made(navClose);