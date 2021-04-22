$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:true
        },
        968:{
            items:3,
            nav:true,
            margin:0,
            
        },
        1200:{
            items:4,
            nav:true,
            marging: 0,
            stagePadding: 10
            
        }
    }
})

const burder = document.querySelector('.icon');
const menu = document.querySelector('.small-screen');
menu.style.display = "none";
burder.addEventListener('click', () => {
    if(menu.style.display === "none") {
        menu.style.display = "block";
    }else {
        menu.style.display = "none";
    }
    
});

burder.addEventListener('click', () =>{
    burder.classList.toggle('icon_active');
})
