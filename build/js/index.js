(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navegacion = navegacion;
function navegacion() {
  document.addEventListener('DOMContentLoaded', function () {
    var navLinksContainer = document.querySelector('.nav-principal');
    if (!navLinksContainer) return;
    var navLinks = navLinksContainer.children;
    var currentPath = window.location.pathname;
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      // Obtén solo la ruta del href (sin el dominio completo)
      var linkPath = new URL(link.href).pathname;

      // Compara la ruta del enlace con la ruta actual
      if (linkPath === currentPath) {
        link.classList.add('activo');
      } else {
        link.classList.remove('activo');
      }
    }
  });
}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
<<<<<<< HEAD
exports.testimoniales = testimoniales;
/* import { citas } from './citas/testimonios.js';
console.log("mis citas");
console.log(citas); */

var citas = [{
  'autor': 'Albert Einstein',
  'texto': 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
}, {
  'autor': 'Anónimo',
  'texto': 'Semanas de programación te pueden ahorrar horas de planeación.'
}, {
  'autor': 'Alan Kay',
  'texto': 'La mejor forma de predecir el futuro es inventarlo.'
}];

//import {citas as citas} from './citas/citas'
console.log(citas);
function testimoniales() {
  var testimonialContainer = document.querySelector('.testimoniales-dinamico');
  for (var i = 0; i < citas.length; i++) {
    var cita = citas[i];
    console.log(cita);
    var testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial');
    testimonialItem.innerHTML = "\n            <div class=\"testimonial-content\">\n                <p class=\"testimonial-text\">".concat(cita.texto, "</p>\n                <p class=\"autor\">").concat(cita.autor, "</p>\n            </div>\n        ");
    testimonialContainer.appendChild(testimonialItem);
  }
=======
exports.saludo = saludo;
function saludo() {
  console.log('saludo pppppppp');
>>>>>>> 186159ccab0d471d5a0b7c4de755828756a1a98c
}

},{}],3:[function(require,module,exports){
"use strict";

var _saludo = require("./_saludo");
var _navegacion = require("./_navegacion");
//import { testimoniales as testimoniales } from './_testimoniales';

<<<<<<< HEAD
},{"./_saludo":1,"./_testimoniales":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvX3NhbHVkby5qcyIsInNyYy9qcy9fdGVzdGltb25pYWxlcy5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLFNBQVMsTUFBTSxDQUFBLEVBQUc7RUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7QUFDM0I7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLEtBQUssR0FBRyxDQUNSO0VBQ0UsT0FBTyxFQUFFLGlCQUFpQjtFQUMxQixPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRSxPQUFPLEVBQUUsU0FBUztFQUNsQixPQUFPLEVBQUU7QUFDWCxDQUFDLEVBQ0Q7RUFDRSxPQUFPLEVBQUUsVUFBVTtFQUNuQixPQUFPLEVBQUU7QUFDWCxDQUFDLENBQ0o7O0FBRUQ7QUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztBQUNYLFNBQVMsYUFBYSxDQUFBLEVBQUc7RUFFNUIsSUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0VBRzlFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0lBQ25DLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDakIsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzVDLGVBQWUsQ0FBQyxTQUFTLHVHQUFBLE1BQUEsQ0FFYSxJQUFJLENBQUMsS0FBSywrQ0FBQSxNQUFBLENBQ3JCLElBQUksQ0FBQyxLQUFLLHVDQUVwQztJQUNELG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7RUFDckQ7QUFDSjtBQUVBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELGFBQWEsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQzs7Ozs7QUMzQ0YsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsY0FBQSxHQUFBLE9BQUE7QUFFQSxJQUFBLGNBQU0sRUFBQyxDQUFDO0FBQ1IsSUFBQSw0QkFBYSxFQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gc2FsdWRvKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3NhbHVkbyAxJyk7XHJcbn1cclxuIiwiLyogaW1wb3J0IHsgY2l0YXMgfSBmcm9tICcuL2NpdGFzL3Rlc3RpbW9uaW9zLmpzJztcclxuY29uc29sZS5sb2coXCJtaXMgY2l0YXNcIik7XHJcbmNvbnNvbGUubG9nKGNpdGFzKTsgKi9cclxuXHJcbmxldCBjaXRhcyA9IFtcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0FsYmVydCBFaW5zdGVpbicsXHJcbiAgICAgICd0ZXh0byc6ICdObyBwb3NlbyB0YWxlbnRvcyBlc3BlY2lhbGVzLiBTb2xvIHNveSBhcGFzaW9uYWRhbWVudGUgY3VyaW9zby4nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAnYXV0b3InOiAnQW7Ds25pbW8nLFxyXG4gICAgICAndGV4dG8nOiAnU2VtYW5hcyBkZSBwcm9ncmFtYWNpw7NuIHRlIHB1ZWRlbiBhaG9ycmFyIGhvcmFzIGRlIHBsYW5lYWNpw7NuLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdhdXRvcic6ICdBbGFuIEtheScsXHJcbiAgICAgICd0ZXh0byc6ICdMYSBtZWpvciBmb3JtYSBkZSBwcmVkZWNpciBlbCBmdXR1cm8gZXMgaW52ZW50YXJsby4nXHJcbiAgICB9XHJcbl07XHJcblxyXG4vL2ltcG9ydCB7Y2l0YXMgYXMgY2l0YXN9IGZyb20gJy4vY2l0YXMvY2l0YXMnXHJcbmNvbnNvbGUubG9nKGNpdGFzKTtcclxuZXhwb3J0IGZ1bmN0aW9uIHRlc3RpbW9uaWFsZXMoKSB7XHJcblxyXG4gICAgY29uc3QgdGVzdGltb25pYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdGltb25pYWxlcy1kaW5hbWljbycpO1xyXG5cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNpdGFzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNpdGEgPSBjaXRhc1tpXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaXRhKTtcclxuICAgICAgICBsZXQgdGVzdGltb25pYWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGVzdGltb25pYWxJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rlc3RpbW9uaWFsJyk7XHJcbiAgICAgICAgdGVzdGltb25pYWxJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPiR7Y2l0YS50ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImF1dG9yXCI+JHtjaXRhLmF1dG9yfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0ZXN0aW1vbmlhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbEl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgdGVzdGltb25pYWxlcygpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgc2FsdWRvIGFzIHNhbHVkbyB9IGZyb20gJy4vX3NhbHVkbyc7XHJcbmltcG9ydCB7IHRlc3RpbW9uaWFsZXMgYXMgdGVzdGltb25pYWxlcyB9IGZyb20gJy4vX3Rlc3RpbW9uaWFsZXMnO1xyXG5cclxuc2FsdWRvKCk7XHJcbnRlc3RpbW9uaWFsZXMoKTtcclxuIl19
=======
(0, _navegacion.navegacion)();
(0, _saludo.saludo)();
//testimoniales();

},{"./_navegacion":1,"./_saludo":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvX25hdmVnYWNpb24uanMiLCJzcmMvanMvX3NhbHVkby5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLFNBQVMsVUFBVSxDQUFBLEVBQUc7RUFDekIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdEQsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRO0lBQzNDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtJQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ3RCO01BQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7O01BRTFDO01BQ0EsSUFBSSxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbkM7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7QUNyQk8sU0FBUyxNQUFNLENBQUEsRUFBRztFQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDOzs7OztBQ0ZBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFFQSxJQUFBLFdBQUEsR0FBQSxPQUFBO0FBREE7O0FBR0EsSUFBQSxzQkFBVSxFQUFDLENBQUM7QUFDWixJQUFBLGNBQU0sRUFBQyxDQUFDO0FBQ1IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gbmF2ZWdhY2lvbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2TGlua3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXByaW5jaXBhbCcpO1xyXG4gICAgICAgIGlmICghbmF2TGlua3NDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBuYXZMaW5rc0NvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IG5hdkxpbmtzW2ldO1xyXG4gICAgICAgICAgICAvLyBPYnTDqW4gc29sbyBsYSBydXRhIGRlbCBocmVmIChzaW4gZWwgZG9taW5pbyBjb21wbGV0bylcclxuICAgICAgICAgICAgbGV0IGxpbmtQYXRoID0gbmV3IFVSTChsaW5rLmhyZWYpLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGFyYSBsYSBydXRhIGRlbCBlbmxhY2UgY29uIGxhIHJ1dGEgYWN0dWFsXHJcbiAgICAgICAgICAgIGlmIChsaW5rUGF0aCA9PT0gY3VycmVudFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZvJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2bycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhbHVkbygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzYWx1ZG8gcHBwcHBwcHAnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzYWx1ZG8gYXMgc2FsdWRvIH0gZnJvbSAnLi9fc2FsdWRvJztcclxuLy9pbXBvcnQgeyB0ZXN0aW1vbmlhbGVzIGFzIHRlc3RpbW9uaWFsZXMgfSBmcm9tICcuL190ZXN0aW1vbmlhbGVzJztcclxuaW1wb3J0IHsgbmF2ZWdhY2lvbiBhcyBuYXZlZ2FjaW9uIH0gZnJvbSAnLi9fbmF2ZWdhY2lvbic7XHJcblxyXG5uYXZlZ2FjaW9uKCk7XHJcbnNhbHVkbygpO1xyXG4vL3Rlc3RpbW9uaWFsZXMoKTtcclxuXHJcblxyXG4iXX0=
>>>>>>> 186159ccab0d471d5a0b7c4de755828756a1a98c
