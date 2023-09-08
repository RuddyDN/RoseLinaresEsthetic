const nav = document.querySelector('#navbarNav');
const navbar = document.querySelector('#navbar');
const navbarli = document.querySelectorAll('#li');

const resize =  () => {
        
    if(window.innerWidth <= 991) {
        nav.classList.remove('d-flex' , 'justify-content-end')
        for (let i  = 0; i < navbarli.length; i++) {
            navbarli.item(i).classList.add('text-white' , 'text-center');
        }
    } else {
        nav.classList.add('d-flex' , 'justify-content-end')
        for (let i  = 0; i < navbarli.length; i++) {
            navbarli.item(i).classList.remove('text-white' , 'text-center');
        }
    }

    if (window.innerWidth <= 991) {
        navbar.classList.add('bg-success');
    } else {
        navbar.classList.remove('bg-success');
    }
    
    console.log(window.innerWidth, window.scrollY);
};

const scroll = () => {
    if(window.scrollY > 0 && window.innerWidth >= 992) {
        navbar.classList.add('bg-success', 'box-shadow');
    } else if (window.scrollY <= 0 && window.innerWidth >= 992) {
        navbar.classList.remove('bg-success', 'box-shadow');
    }
 }

addEventListener('load' , resize);

addEventListener('resize', resize);

addEventListener('scroll', scroll);
