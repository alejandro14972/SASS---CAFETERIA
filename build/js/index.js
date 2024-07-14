(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = saludo;
function saludo() {
  console.log('saludo 1');
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testimoniales = testimoniales;
var _citas = require("./citas/citas");
/* import { citas } from './citas/testimonios.js';
console.log("mis citas");
console.log(citas); */

console.log(_citas.citas);
function testimoniales() {
  var testimonialContainer = document.querySelector('.testimoniales-dinamico');
  for (var i = 0; i < _citas.citas.length; i++) {
    var cita = _citas.citas[i];
    console.log(cita);
    var testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial');
    testimonialItem.innerHTML = "\n            <div class=\"testimonial-content\">\n                <p class=\"testimonial-text\">".concat(cita.texto, "</p>\n                <p class=\"autor\">").concat(cita.autor, "</p>\n            </div>\n        ");
    testimonialContainer.appendChild(testimonialItem);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  testimoniales();
});

},{"./citas/citas":3}],3:[function(require,module,exports){
"use strict";

console.log("hoal");
var citas = [{
  'autor': 'Albert Einstein',
  'texto': 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
}, {
  'autor': 'Anónimo',
  'texto': 'Semanas de programación te pueden ahorrar horas de planeación.'
}, {
  'autor': 'Alan Kay',
  'texto': 'La mejor forma de predecir el futuro es inventarlo.'
}, {
  'autor': 'Amelia Earhart',
  'texto': 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
}, {
  'autor': 'Aristotle',
  'texto': 'La calidad no es un acto, es un hábito.'
}, {
  'autor': 'Benjamin Franklin',
  'texto': 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
}, {
  'autor': 'Charles R. Swindoll',
  'texto': 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
}, {
  'autor': 'Jane Goodall',
  'texto': 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
}, {
  'autor': 'John Muir',
  'texto': 'El poder de la imaginación nos hace infinitos.'
}, {
  'autor': 'Mark Twain',
  'texto': 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
}];

},{}],4:[function(require,module,exports){
"use strict";

var _saludo = require("./_saludo");
var _testimoniales = require("./_testimoniales");
(0, _saludo.saludo)();
(0, _testimoniales.testimoniales)();

},{"./_saludo":1,"./_testimoniales":2}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvX3NhbHVkby5qcyIsInNyYy9qcy9fdGVzdGltb25pYWxlcy5qcyIsInNyYy9qcy9jaXRhcy9jaXRhcy5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLFNBQVMsTUFBTSxDQUFBLEVBQUc7RUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDM0I7Ozs7Ozs7OztBQ0NBLElBQUEsTUFBQSxHQUFBLE9BQUE7QUFIQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFLLENBQUM7QUFDWCxTQUFTLGFBQWEsQ0FBQSxFQUFHO0VBRTVCLElBQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUc5RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuQyxJQUFJLElBQUksR0FBRyxZQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO0lBQ2pCLElBQUksZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQ25ELGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUM1QyxlQUFlLENBQUMsU0FBUyx1R0FBQSxNQUFBLENBRWEsSUFBSSxDQUFDLEtBQUssK0NBQUEsTUFBQSxDQUNyQixJQUFJLENBQUMsS0FBSyx1Q0FFcEM7SUFDRCxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO0VBQ3JEO0FBQ0o7QUFFQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNoRCxhQUFhLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUM7Ozs7O0FDM0JGLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0FBQ25CLElBQUksS0FBSyxHQUFHLENBQ1I7RUFDRSxPQUFPLEVBQUUsaUJBQWlCO0VBQzFCLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxTQUFTO0VBQ2xCLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxVQUFVO0VBQ25CLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxnQkFBZ0I7RUFDekIsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0UsT0FBTyxFQUFFLFdBQVc7RUFDcEIsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0UsT0FBTyxFQUFFLG1CQUFtQjtFQUM1QixPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRSxPQUFPLEVBQUUscUJBQXFCO0VBQzlCLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxjQUFjO0VBQ3ZCLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxXQUFXO0VBQ3BCLE9BQU8sRUFBRTtBQUNYLENBQUMsRUFDRDtFQUNFLE9BQU8sRUFBRSxZQUFZO0VBQ3JCLE9BQU8sRUFBRTtBQUNYLENBQUMsQ0FDRjs7Ozs7QUMxQ0gsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsY0FBQSxHQUFBLE9BQUE7QUFFQSxJQUFBLGNBQU0sRUFBQyxDQUFDO0FBQ1IsSUFBQSw0QkFBYSxFQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2FsdWRvKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3NhbHVkbyAxJyk7XHJcbn1cclxuIiwiLyogaW1wb3J0IHsgY2l0YXMgfSBmcm9tICcuL2NpdGFzL3Rlc3RpbW9uaW9zLmpzJztcbmNvbnNvbGUubG9nKFwibWlzIGNpdGFzXCIpO1xuY29uc29sZS5sb2coY2l0YXMpOyAqL1xuaW1wb3J0IHtjaXRhcyBhcyBjaXRhc30gZnJvbSAnLi9jaXRhcy9jaXRhcydcbmNvbnNvbGUubG9nKGNpdGFzKTtcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0aW1vbmlhbGVzKCkge1xuXG4gICAgY29uc3QgdGVzdGltb25pYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGltb25pYWxlcy1kaW5hbWljbycpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdGFzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjaXRhID0gY2l0YXNbaV07XG4gICAgICAgIGNvbnNvbGUubG9nKGNpdGEpO1xuICAgICAgICBsZXQgdGVzdGltb25pYWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlc3RpbW9uaWFsSXRlbS5jbGFzc0xpc3QuYWRkKCd0ZXN0aW1vbmlhbCcpO1xuICAgICAgICB0ZXN0aW1vbmlhbEl0ZW0uaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRlc3RpbW9uaWFsLXRleHRcIj4ke2NpdGEudGV4dG99PC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYXV0b3JcIj4ke2NpdGEuYXV0b3J9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIHRlc3RpbW9uaWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlc3RpbW9uaWFsSXRlbSk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHRlc3RpbW9uaWFsZXMoKTtcbn0pO1xuIiwiY29uc29sZS5sb2coXCJob2FsXCIpO1xyXG5sZXQgY2l0YXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICdhdXRvcic6ICdBbGJlcnQgRWluc3RlaW4nLFxyXG4gICAgICAndGV4dG8nOiAnTm8gcG9zZW8gdGFsZW50b3MgZXNwZWNpYWxlcy4gU29sbyBzb3kgYXBhc2lvbmFkYW1lbnRlIGN1cmlvc28uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0Fuw7NuaW1vJyxcclxuICAgICAgJ3RleHRvJzogJ1NlbWFuYXMgZGUgcHJvZ3JhbWFjacOzbiB0ZSBwdWVkZW4gYWhvcnJhciBob3JhcyBkZSBwbGFuZWFjacOzbi4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAnYXV0b3InOiAnQWxhbiBLYXknLFxyXG4gICAgICAndGV4dG8nOiAnTGEgbWVqb3IgZm9ybWEgZGUgcHJlZGVjaXIgZWwgZnV0dXJvIGVzIGludmVudGFybG8uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0FtZWxpYSBFYXJoYXJ0JyxcclxuICAgICAgJ3RleHRvJzogJ0xvIG3DoXMgZGlmaWNpbCBlcyB0b21hciBsYSBkZWNpc2nDs24gZGUgYWN0dWFyLiBFbCByZXN0byBlcyBzaW1wbGVtZW50ZSB0ZW5hY2lkYWQuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0FyaXN0b3RsZScsXHJcbiAgICAgICd0ZXh0byc6ICdMYSBjYWxpZGFkIG5vIGVzIHVuIGFjdG8sIGVzIHVuIGjDoWJpdG8uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0JlbmphbWluIEZyYW5rbGluJyxcclxuICAgICAgJ3RleHRvJzogJ0TDrW1lbG8geSBsbyBvbHZpZGFyw6kuIEVuc8Opw7FhbWVsbyB5IGxvIHJlY29yZGFyw6kuIEludm9sw7pjcmFtZSB5IGxvIGFwcmVuZGVyw6kuJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0NoYXJsZXMgUi4gU3dpbmRvbGwnLFxyXG4gICAgICAndGV4dG8nOiAnTGEgdmlkYSBlcyAxMCUgbG8gcXVlIHRlIG9jdXJyZSB5IDkwJSBjw7NtbyByZWFjY2lvbmFzLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdhdXRvcic6ICdKYW5lIEdvb2RhbGwnLFxyXG4gICAgICAndGV4dG8nOiAnTG8gcXVlIGhhY2VzIGhhY2UgdW5hIGRpZmVyZW5jaWEuIFkgZGViZXMgZGVjaWRpciBzaSBxdcOpIHRpcG8gZGUgZGlmZXJlbmNpYSBxdWllcmVzIGhhY2VyLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdhdXRvcic6ICdKb2huIE11aXInLFxyXG4gICAgICAndGV4dG8nOiAnRWwgcG9kZXIgZGUgbGEgaW1hZ2luYWNpw7NuIG5vcyBoYWNlIGluZmluaXRvcy4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAnYXV0b3InOiAnTWFyayBUd2FpbicsXHJcbiAgICAgICd0ZXh0byc6ICdMb3MgZG9zIGTDrWFzIG3DoXMgaW1wb3J0YW50ZXMgZGUgdHUgdmlkYSBzb24gZWwgZMOtYSBxdWUgbmFjaXN0ZSB5IGVsIGTDrWEgcXVlIGRlc2N1YnJlcyBwb3IgcXXDqS4nXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiIsImltcG9ydCB7IHNhbHVkbyBhcyBzYWx1ZG8gfSBmcm9tICcuL19zYWx1ZG8nO1xyXG5pbXBvcnQgeyB0ZXN0aW1vbmlhbGVzIGFzIHRlc3RpbW9uaWFsZXMgfSBmcm9tICcuL190ZXN0aW1vbmlhbGVzJztcclxuXHJcbnNhbHVkbygpO1xyXG50ZXN0aW1vbmlhbGVzKCk7XHJcbiJdfQ==
