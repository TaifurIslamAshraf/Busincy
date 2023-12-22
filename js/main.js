import Aos from "aos";
import "aos/dist/aos.css";

//Init Aos Animations
Aos.init({
    duration: 1000,
    offset: 100
})


//header active mobile
const headerMobile = document.getElementById("mobile_menu")
const homeNav = document.querySelector(".home-nav")

headerMobile.addEventListener("click", function(){
    homeNav.classList.toggle("active-mobile")
    headerMobile.classList.toggle("active-fa-bars")
})