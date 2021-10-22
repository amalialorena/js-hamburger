

// Hamburger menu: mostrare / nascondere il menu principale


//Quando clico sul menu hamburgher, faccio comparire il menu nascosto se il dispositivo ha la width minore di 1000px

const hamburger = document.querySelector(".header-right a i");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const x = document.querySelector(".hamburger-menu a.close")
// let mql = window.matchMedia('(min-width: 1000px)');


hamburger.addEventListener('click',

    function() {
       
        hamburgerMenu.style.display = "block" ;

    }

);

//quando clico sulla x, faccio scomparire il menu nascosto

x.addEventListener('click',

    function() {
       
        hamburgerMenu.style.display = "none" ;

    }

);




//il menu nascosto scompare se il dispositivo ha la width maggiore di 1000px