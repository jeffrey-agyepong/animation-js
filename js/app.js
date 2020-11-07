const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

/*Translate Y-axis*/
tl.fromTo(hero,1,{height:"0%"}, {height: "90%", ease: Power2.easeInOut})

/*Translate X-axis*/
.fromTo(hero, 1.2,{width:"100%"}, {width: "80%", ease: Power2.easeInOut})

/*Slider*/
.fromTo(slider,1.2,{x:"-100%"}, {x:"0%", ease: Power2.easeInOut}, "-=1.2")

/* logo*/
.fromTo(logo, 0.5,{opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5") 

/*hamburger menu*/
.fromTo(hamburger, 0.5,{opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5")

.fromTo(headline, 0.5,{opacity: 0, x:30}, {opacity: 1, x:0}, "-=0.5");