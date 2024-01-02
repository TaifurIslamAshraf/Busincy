import { detector, homeHeaderMobileActive } from "./main";


homeHeaderMobileActive()
const counterSection = document.querySelector(".services_counter");
const workObserver = detector(counterSection, ".work-counter", "data-counter")
workObserver.observe(counterSection)