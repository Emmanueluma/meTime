const searchBtn = document.getElementById('search-btn');
const searchBody = document.getElementById('searchBody');
const innerClose = document.getElementById('innerClose');
const searchInput = document.getElementById('searchInput');
const bgX = document.querySelectorAll('.bgX');
const menuBtn = document.getElementById('menu-btn');
const navClose = document.getElementById('nav-close');
const nav = document.getElementById('nav');

window.onscroll = function(){
    if(window.pageYOffset > 100){
        nav.style.background = '#fff';
        nav.style.boxShadow = '0 4px 5px rgba(0, 0, 0, 0.1)';

    }else {
        nav.style.background = 'transparent';
        nav.style.boxShadow = ' none';
    }
}

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

const link = document.querySelectorAll('.link');
link.forEach(icon => {
    console.log(icon)
    icon.addEventListener('click', e => {
        bgX.forEach(ele => {
            ele.classList.toggle('active');
        })
        console.log(1)
    });
}) 

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
const skip = async() => {
    setTimeout(() => {
        let num1;
        num1 = home.offsetWidth + mainHeight;
        if (home.scrollLeft == num1){
            home.scrollLeft = 0;
            
        }
        else{
            home.scrollLeft += mainHeight;
        }
        skip();
    }, 9000);
}
const body = document.getElementById('body')
window.addEventListener('load', e => {
    skip();
})

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



