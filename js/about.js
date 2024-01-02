import { detector, homeHeaderMobileActive, teamSwiperSlider, testimonialsSwiperSlider } from "./main";

homeHeaderMobileActive()
testimonialsSwiperSlider()
teamSwiperSlider()

const counterSection = document.querySelector(".services_counter");
const workObserver = detector(counterSection, ".work-counter", "data-counter")
workObserver.observe(counterSection)