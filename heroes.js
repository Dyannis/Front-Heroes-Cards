//SCROLLMAGIC PARALLAX

let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to ('.ship', 14, {y: -950})
.fromTo ('.sea', {y: -50}, {y: 200, duration: 14}, "-=14")
.to ('.sky', 14, {y: -20}, "-=14")
.to('.content-heroes', 14, {top: "0%"}, "-=14");

let scene = new ScrollMagic.Scene({
    triggerElement:".container",
    duration: "400%",
    triggerHook:0,
})

.setTween(timeline)
.setPin(".container")
.addTo(controller);