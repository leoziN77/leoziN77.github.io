const navbar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

function getVisitCount() {
    let visitCount = localStorage.getItem("visitCount") || 0;
    return parseInt(visitCount);
}

function updateVisitCount() {
    const counterElement = document.getElementById("counter");
    const visitCount = getVisitCount() + 1;
    localStorage.setItem("visitCount", visitCount);
    counterElement.textContent = visitCount;
}

window.addEventListener("load", updateVisitCount);

button.addEventListener('click', function () {
    mobileNavbar.classList.toggle('active');
});

window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) return navbar.classList.add('active');
    return navbar.classList.remove('active');
});
