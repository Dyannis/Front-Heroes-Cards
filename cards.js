/* CARDS */
const card = document.querySelectorAll('.base');
const content = document.querySelector('.content');
const img = document.querySelectorAll('.img-heroes');
const p = document.querySelectorAll('.ph');
const title= document.querySelectorAll('.title-h');
const info = document.querySelectorAll('.info');


/* Lenght */
let lengthC = card.length;
let lengthI = img.length;
let lengthP = p.length;
let lengthT = title.length;
let lengthInf = info.length;


content.addEventListener('mousemove', (e) => {

let x = (window.innerWidth / 2 - e.pageX) / 27;
let y = (window.innerHeight / 2 - e.pageY) / 27;


for (let i = 0; i < lengthC ; i++) {

card[i].style.transform = "rotateY("+y+"deg) rotateX("+x+"deg)";
}

});

// Anim In

content.addEventListener('mouseenter', (e) => {
    

    for (let i = 0; i < lengthC ; i++) {
    card[i].style.transition = "none";
    card[i].style.background = "#283b63";
}
    for (let index= 0 ; index < lengthI ; index++){
        img[index].style.transform = "translateZ(100px)";
    }
    for (let ip = 0 ; ip < lengthP ; ip++){
        p[ip].style.color ="lightgoldenrodyellow";
    }
    for (let o = 0 ; o < lengthT ; o++){
        title[o].style.transform ="translateZ(200px) rotateZ(-25deg)";
    }
    for (let u = 0 ; u < lengthInf ; u++){
        info[u].style.transform ="translateZ(70px)";
    }
  

    
});

// Anim Out

content.addEventListener('mouseleave', (e) => {

let lengthC = card.length;
for (let i = 0; i < lengthC ; i++) {

card[i].style.transform = "rotateY(0deg) rotateX(0deg)";
card[i].style.transition = "all .5s ease";
card[i].style.background = "lightgoldenrodyellow";
}

for (let index= 0 ; index < lengthI ; index++){
    img[index].style.transform = "translateZ(0px)";
    img[index].style.transition = "all 0.5s ease";
}

for (let ip = 0 ; ip < lengthP ; ip++){
    p[ip].style.color ="#283b63";
}

for (let o = 0 ; o < lengthT ; o++){
    title[o].style.transform ="translateZ(0px) rotateZ(0deg)";
    title[o].style.transition = "all 0.3s ease";
}

for (let u = 0 ; u < lengthInf ; u++){
    info[u].style.transform ="translateZ(0px)";
}

});

/* 
CARDS APPEAR AND DISPEAR

== > IMPORTANT NEED REFACTORING WITH element.classList.toggle("class") <==

*/

const cardOne = document.querySelector('#cardone');
const apollo = document.querySelector('.apollo');

const cardTwo = document.getElementById('cardtwo');
const aphrodite = document.querySelector('.aphrodite');

const cardThree = document.getElementById('cardthree');
const athena = document.querySelector('.athena');


cardOne.addEventListener('click', function() {
    if(cardOne.className == "perso playerone") {
        apollo.className = "perso-bg apollo base";
        cardOne.className += " one";
    }
    else {
        apollo.className = "onereveal apollo base";
        cardOne.className = "perso playerone";
    }
});

cardTwo.addEventListener('click', function() {
    if(cardTwo.className == "perso playertwo") {
        aphrodite.className = "perso-bg aphrodite base";
        cardTwo.className += " two";
    }
    else {
        aphrodite.className = "tworeveal aphrodite base";
        cardTwo.className = "perso playertwo";
    }
});

cardThree.addEventListener('click', function() {
    if(cardThree.className == "perso playerthree") {
        athena.className = "perso-bg athena base";
        cardThree.className += " three";
    }
    else {
        athena.className = "threereveal athena base";
        cardThree.className = "perso playerthree";
    }
});