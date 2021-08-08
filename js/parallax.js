//PARALLAX JS

window.addEventListener('scroll', function() {
    const target = document.querySelectorAll('.parallax');
    const scrolled = window.pageYOffset;
    console.log(scrolled);
    let length = target.length;
    if (scrolled > 0) {
        for (let index = 0; index < length; index++) {

            let pos = scrolled * target[index].dataset.rate;
            if (target[index].dataset.direction === "vertical") {
                target[index].style.transform = 'translate3d(0px,' + pos + 'px, 0px)';
            } else {
                let posX = scrolled * target[index].dataset.ratex;
                let posY = scrolled * target[index].dataset.ratey;
                target[index].style.transform = 'translate3d('+posX+'px,'+posY+'px, 0px)';
            }
        }
        document.getElementById("wel").innerHTML = "Welcome !";
        document.getElementById("arg").innerHTML = "Argo Ship,";
    }
    else {
        document.getElementById("wel").innerHTML = "Welcome";
        document.getElementById("arg").innerHTML = "Argo Ship";
    }
});