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
const fa = document.querySelectorAll('.side0');
let firstBg = document.getElementById('firstBg');
let mainHeight;
mainHeight = firstBg.clientWidth;
fa.forEach(icons => {
    icons.addEventListener('click', e => {
        if(icons.id == 'next') {
            home.scrollLeft += mainHeight;
        }else{
            home.scrollLeft -= mainHeight;
        }
    });
});

const overFlow = document.getElementById('overFlow')
const side = document.querySelectorAll('.side');
let boxItemOne = document.getElementById('boxItemOne');
let mainHeight1;
mainHeight1 = boxItemOne.clientWidth + 10;
side.forEach(icons => {
    icons.addEventListener('click', e => {
        if(icons.id == 'next1') {
            overFlow.scrollLeft += mainHeight1;
        }else{
            overFlow.scrollLeft -= mainHeight1;
        }
    });
});

const skip = () => {
    setTimeout(() => {
        /* mainHeight = mainHeight + mainHeight; */
        home.scrollLeft += mainHeight;
        skip();
    }, 1000);
}
/* let c = [];

box.forEach( e => {
    c.push(e)
})
console.log(c[0].classList.contains('active001'))
home.addEventListener('click', e => {
        console.log(e)
}) */



