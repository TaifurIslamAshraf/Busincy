import { homeHeaderMobileActive, teamSwiperSlider, testimonialsSwiperSlider } from "./main";


// play button texts
const playText = document.querySelector(".hero_play_btn-text p")
const arrayOfText = playText.innerHTML.split("").map((char,i)=> (
    `<span style="transform:rotate(${i * 16.4}deg)" >${char}</span>`
)).join("")
playText.innerHTML = arrayOfText


homeHeaderMobileActive();
teamSwiperSlider()
testimonialsSwiperSlider()