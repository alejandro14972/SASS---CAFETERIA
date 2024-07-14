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
exports.saludo = saludo;
function saludo() {
  console.log('saludo pppppppp');
}

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//console.log(citas);
function testimoniales() {
  var testimonialContainer = document.querySelector('.testimoniales-dinamico');
  for (var i = 0; i < citas.length; i++) {
    var cita = citas[i];
    //console.log(cita);
    var testimonialItem = document.createElement('div');
    testimonialItem.classList.add('testimonial');
    testimonialItem.innerHTML = "\n            <div class=\"testimonial-content\">\n                <p class=\"testimonial-text\">".concat(cita.texto, "</p>\n                <p class=\"autor\">").concat(cita.autor, "</p>\n            </div>\n        ");
    testimonialContainer.appendChild(testimonialItem);
  }
}
document.addEventListener('DOMContentLoaded', function () {
  testimoniales();
});

},{}],4:[function(require,module,exports){
"use strict";

var _saludo = require("./_saludo");
var _testimoniales = require("./_testimoniales");
var _navegacion = require("./_navegacion");
(0, _navegacion.navegacion)();
(0, _saludo.saludo)();
(0, _testimoniales.testimoniales)();

},{"./_navegacion":1,"./_saludo":2,"./_testimoniales":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvX25hdmVnYWNpb24uanMiLCJzcmMvanMvX3NhbHVkby5qcyIsInNyYy9qcy9fdGVzdGltb25pYWxlcy5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLFNBQVMsVUFBVSxDQUFBLEVBQUc7RUFDekIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdEQsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRO0lBQzNDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtJQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ3RCO01BQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7O01BRTFDO01BQ0EsSUFBSSxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbkM7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7QUNyQk8sU0FBUyxNQUFNLENBQUEsRUFBRztFQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDOzs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLLEdBQUcsQ0FDUjtFQUNFLE9BQU8sRUFBRSxpQkFBaUI7RUFDMUIsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0UsT0FBTyxFQUFFLFNBQVM7RUFDbEIsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxFQUNEO0VBQ0UsT0FBTyxFQUFFLFVBQVU7RUFDbkIsT0FBTyxFQUFFO0FBQ1gsQ0FBQyxDQUNKOztBQUVEO0FBQ0E7QUFDTyxTQUFTLGFBQWEsQ0FBQSxFQUFHO0VBRTVCLElBQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQztFQUc5RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtJQUNuQyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25CO0lBQ0EsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDbkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO0lBQzVDLGVBQWUsQ0FBQyxTQUFTLHVHQUFBLE1BQUEsQ0FFYSxJQUFJLENBQUMsS0FBSywrQ0FBQSxNQUFBLENBQ3JCLElBQUksQ0FBQyxLQUFLLHVDQUVwQztJQUNELG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUM7RUFDckQ7QUFDSjtBQUVBLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFNO0VBQ2hELGFBQWEsQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQzs7Ozs7QUMzQ0YsSUFBQSxPQUFBLEdBQUEsT0FBQTtBQUNBLElBQUEsY0FBQSxHQUFBLE9BQUE7QUFDQSxJQUFBLFdBQUEsR0FBQSxPQUFBO0FBRUEsSUFBQSxzQkFBVSxFQUFDLENBQUM7QUFDWixJQUFBLGNBQU0sRUFBQyxDQUFDO0FBQ1IsSUFBQSw0QkFBYSxFQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gbmF2ZWdhY2lvbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2TGlua3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXByaW5jaXBhbCcpO1xyXG4gICAgICAgIGlmICghbmF2TGlua3NDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBuYXZMaW5rc0NvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IG5hdkxpbmtzW2ldO1xyXG4gICAgICAgICAgICAvLyBPYnTDqW4gc29sbyBsYSBydXRhIGRlbCBocmVmIChzaW4gZWwgZG9taW5pbyBjb21wbGV0bylcclxuICAgICAgICAgICAgbGV0IGxpbmtQYXRoID0gbmV3IFVSTChsaW5rLmhyZWYpLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGFyYSBsYSBydXRhIGRlbCBlbmxhY2UgY29uIGxhIHJ1dGEgYWN0dWFsXHJcbiAgICAgICAgICAgIGlmIChsaW5rUGF0aCA9PT0gY3VycmVudFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZvJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2bycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhbHVkbygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzYWx1ZG8gcHBwcHBwcHAnKTtcclxufVxyXG4iLCIvKiBpbXBvcnQgeyBjaXRhcyB9IGZyb20gJy4vY2l0YXMvdGVzdGltb25pb3MuanMnO1xyXG5jb25zb2xlLmxvZyhcIm1pcyBjaXRhc1wiKTtcclxuY29uc29sZS5sb2coY2l0YXMpOyAqL1xyXG5cclxubGV0IGNpdGFzID0gW1xyXG4gICAge1xyXG4gICAgICAnYXV0b3InOiAnQWxiZXJ0IEVpbnN0ZWluJyxcclxuICAgICAgJ3RleHRvJzogJ05vIHBvc2VvIHRhbGVudG9zIGVzcGVjaWFsZXMuIFNvbG8gc295IGFwYXNpb25hZGFtZW50ZSBjdXJpb3NvLidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdhdXRvcic6ICdBbsOzbmltbycsXHJcbiAgICAgICd0ZXh0byc6ICdTZW1hbmFzIGRlIHByb2dyYW1hY2nDs24gdGUgcHVlZGVuIGFob3JyYXIgaG9yYXMgZGUgcGxhbmVhY2nDs24uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ2F1dG9yJzogJ0FsYW4gS2F5JyxcclxuICAgICAgJ3RleHRvJzogJ0xhIG1lam9yIGZvcm1hIGRlIHByZWRlY2lyIGVsIGZ1dHVybyBlcyBpbnZlbnRhcmxvLidcclxuICAgIH1cclxuXTtcclxuXHJcbi8vaW1wb3J0IHtjaXRhcyBhcyBjaXRhc30gZnJvbSAnLi9jaXRhcy9jaXRhcydcclxuLy9jb25zb2xlLmxvZyhjaXRhcyk7XHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXN0aW1vbmlhbGVzKCkge1xyXG5cclxuICAgIGNvbnN0IHRlc3RpbW9uaWFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlc3RpbW9uaWFsZXMtZGluYW1pY28nKTtcclxuXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXRhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjaXRhID0gY2l0YXNbaV07XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaXRhKTtcclxuICAgICAgICBsZXQgdGVzdGltb25pYWxJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGVzdGltb25pYWxJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rlc3RpbW9uaWFsJyk7XHJcbiAgICAgICAgdGVzdGltb25pYWxJdGVtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlc3RpbW9uaWFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGVzdGltb25pYWwtdGV4dFwiPiR7Y2l0YS50ZXh0b308L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImF1dG9yXCI+JHtjaXRhLmF1dG9yfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICB0ZXN0aW1vbmlhbENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXN0aW1vbmlhbEl0ZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgdGVzdGltb25pYWxlcygpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgc2FsdWRvIGFzIHNhbHVkbyB9IGZyb20gJy4vX3NhbHVkbyc7XHJcbmltcG9ydCB7IHRlc3RpbW9uaWFsZXMgYXMgdGVzdGltb25pYWxlcyB9IGZyb20gJy4vX3Rlc3RpbW9uaWFsZXMnO1xyXG5pbXBvcnQgeyBuYXZlZ2FjaW9uIGFzIG5hdmVnYWNpb24gfSBmcm9tICcuL19uYXZlZ2FjaW9uJztcclxuXHJcbm5hdmVnYWNpb24oKTtcclxuc2FsdWRvKCk7XHJcbnRlc3RpbW9uaWFsZXMoKTtcclxuXHJcblxyXG4iXX0=
