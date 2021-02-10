$('.menuBtn').click(function() {
   
    $(this).next('.mainMenu').slideDown();
    
});
  




var t1 = new TimelineMax({paused: true});

t1.to(".menu, 0.8,"{
      
      autoAlpha: 1
      
});

t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1,{
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
    
}, 0.1);

t1.staggerFrom(".main-menu li a:not(.submenu li a)", 1,{
    opacity: 0,
    y: 10,
    ease: Power3.easeInOut
    
}, 0.1 "-=2");

t1.reverse();

$(document).on("click", ".menu-btn", function(){
   t1.reversed(!t1.reversed()); 
    
});

$(document).on("click", ".close-menu", function(){
   t1.reversed(!t1.reversed()); 
    
});