

// Hamburger menu: mostrare / nascondere il menu principale

//Quando clico sul menu hamburgher, faccio comparire il menu nascosto 
const hamburger = document.querySelector(".header-right a i");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const x = document.querySelector(".hamburger-menu a.close")
let mq = window.matchMedia('(max-width: 1000px)');


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

window.addEventListener("resize", 
    function(){
       
        if (window.innerWidth > 1000){
            hamburgerMenu.style.display = "none" ;
        }

        // oppure:
        
        // if (mq.matches == false) {
        //     hamburgerMenu.style.display = "none" ;
        // }

  });







 