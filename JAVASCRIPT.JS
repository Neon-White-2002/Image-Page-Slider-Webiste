// JAVA-SCRIPT:

let SILDE = document.querySelectorAll(".SILDER_CONTAINER");
let INDEX = 0;

function NEXT()
{
    SILDE[INDEX].classList.remove("ACTIVE");
    INDEX = (INDEX + 1) % SILDE.length;
    SILDE[INDEX].classList.add("ACTIVE");
}

function PREV()
{
    SILDE[INDEX].classList.remove("ACTIVE");
    INDEX = (INDEX - 1 + SILDE.length) % SILDE.length;
    SILDE[INDEX].classList.add("ACTIVE");
}

setInterval(NEXT, 10000);