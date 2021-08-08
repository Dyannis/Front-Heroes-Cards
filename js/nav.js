/* NAV BURGER MENU 
==> IMPORTANT SHOULD REFACTORING WITH element.classList.toggle("class") <== */

const burger = document.getElementById("res");
const zHero = document.getElementById('zhero');

burger.addEventListener("click", function () {

    if (burger.className === "navhaut") {
        burger.className += " responsively";
        zHero.className = "heroesdown";
    } else {
        burger.className = "navhaut";
        zHero.className = "title-heroes";

    }
});