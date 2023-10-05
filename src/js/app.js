import accordion from "./modules/accordion.js";
import isWebp from "./modules/webp.js";

window.addEventListener("DOMContentLoaded", () => {
    'use strict';

    isWebp();
    accordion('.accordion__heading');


    const whatsapp = document.querySelector('.pulse-button');
    whatsapp.addEventListener('click', () => {
        open("https://wa.me/77064080686");
    });
});