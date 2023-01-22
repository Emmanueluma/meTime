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
        searchInput.style.height = '0px';
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

const home = document.getElementById('home')
const fa = document.querySelectorAll('.fa-sharp');
let box = document.querySelectorAll('.box');
let firstBg = document.getElementById('firstBg');
let mainHeight, maxi;
maxi = home.scrollWidth - home.clientWidth;
/* const showIcons = () => {
    fa[0].style.display = home.scrollLeft == 0 ? 'none' : 'block';
    fa[1].style.display = home.scrollLeft == maxi ? 'none' : 'block';
} */
mainHeight = firstBg.clientWidth;
fa.forEach(icons => {
    icons.addEventListener('click', e => {
        if(icons.id == 'next') {
            home.scrollLeft += mainHeight;
        }else{
            home.scrollLeft -= mainHeight;
        }
        /* showIcons(); */
    });
});




/* let c = [];

box.forEach( e => {
    c.push(e)
})
console.log(c[0].classList.contains('active001'))
home.addEventListener('click', e => {
        console.log(e)
}) */



