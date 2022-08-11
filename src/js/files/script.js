// Подключение функционала "Чертогов Фрилансера"
import { isMobile, _slideDown } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

if (document.querySelector(".faq__load-title")) {
    const moreItems = [
        {
            title: "What is a professional traffic permit?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "How to check the traffic condition?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "What are the requirements for a professional traffic permit?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "Are there professional traffic permit training courses at a distance?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "When is a professional traffic permit needed?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "Where to look for a traffic permit?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "Are there differences between a traffic permit and a professional traffic permit?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "How much does a commercial traffic permit cost for goods?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "How to plug in for the traffic permit test?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
        {
            title: "How is the sample for a professional traffic permit booked?",
            text: "Traffic permits are a requirement for conducting professional traffic.",
        },
    ];

    let title = document.querySelector(".faq__load-title");
    let menuBody = document.querySelector(".faq__loaded");
    title.addEventListener("click", function (e) {
        title.classList.toggle("_loaded");
        moreItems.map((item) => {
            let div = document.createElement("div");
            div.className = "faq__spoller";
            div.innerHTML = `
                <button type="button" data-spoller class="faq__spoller-title faq__spoller-title_load">
                    ${item.title}
                </button>
                <p hidden class="faq__spoller-text">${item.text}</p> `;
            menuBody.append(div);
        });
        title.classList.add("_loaded");
        _slideDown(menuBody);
    });
}
