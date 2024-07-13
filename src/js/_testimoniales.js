/* import { citas } from './citas/testimonios.js';
console.log("mis citas");
console.log(citas); */
import {citas as citas} from './citas/citas'
console.log(citas);
export function testimoniales() {

    const testimonialContainer = document.querySelector('.testimoniales-dinamico');


    for (let i = 0; i < citas.length; i++) {
        let cita = citas[i];
        console.log(cita);
        let testimonialItem = document.createElement('div');
        testimonialItem.classList.add('testimonial');
        testimonialItem.innerHTML = `
            <div class="testimonial-content">
                <p class="testimonial-text">${cita.texto}</p>
                <p class="autor">${cita.autor}</p>
            </div>
        `;
        testimonialContainer.appendChild(testimonialItem);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    testimoniales();
});