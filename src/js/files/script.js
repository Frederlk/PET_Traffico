// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let load = document.querySelector(".faq__load-title");
let menuBody = document.querySelector(".faq__load-body");
load.addEventListener("click", function (e) {
    load.classList.toggle("_active");
    _slideToggle(menuBody);
});
