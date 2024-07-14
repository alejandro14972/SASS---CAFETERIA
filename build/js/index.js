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

var _saludo = require("./_saludo");
var _navegacion = require("./_navegacion");
//import { testimoniales as testimoniales } from './_testimoniales';

(0, _navegacion.navegacion)();
(0, _saludo.saludo)();
//testimoniales();

},{"./_navegacion":1,"./_saludo":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvX25hdmVnYWNpb24uanMiLCJzcmMvanMvX3NhbHVkby5qcyIsInNyYy9qcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FPLFNBQVMsVUFBVSxDQUFBLEVBQUc7RUFDekIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLFlBQVk7SUFDdEQsSUFBTSxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDO0lBQ2xFLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtJQUV4QixJQUFNLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQyxRQUFRO0lBQzNDLElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUTtJQUU1QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtNQUN0QyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ3RCO01BQ0EsSUFBSSxRQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7O01BRTFDO01BQ0EsSUFBSSxRQUFRLEtBQUssV0FBVyxFQUFFO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUNoQyxDQUFDLE1BQU07UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7TUFDbkM7SUFDSjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7QUNyQk8sU0FBUyxNQUFNLENBQUEsRUFBRztFQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0FBQ2xDOzs7OztBQ0ZBLElBQUEsT0FBQSxHQUFBLE9BQUE7QUFFQSxJQUFBLFdBQUEsR0FBQSxPQUFBO0FBREE7O0FBR0EsSUFBQSxzQkFBVSxFQUFDLENBQUM7QUFDWixJQUFBLGNBQU0sRUFBQyxDQUFDO0FBQ1IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJleHBvcnQgZnVuY3Rpb24gbmF2ZWdhY2lvbigpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc3QgbmF2TGlua3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LXByaW5jaXBhbCcpO1xyXG4gICAgICAgIGlmICghbmF2TGlua3NDb250YWluZXIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBuYXZMaW5rc0NvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZMaW5rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbGluayA9IG5hdkxpbmtzW2ldO1xyXG4gICAgICAgICAgICAvLyBPYnTDqW4gc29sbyBsYSBydXRhIGRlbCBocmVmIChzaW4gZWwgZG9taW5pbyBjb21wbGV0bylcclxuICAgICAgICAgICAgbGV0IGxpbmtQYXRoID0gbmV3IFVSTChsaW5rLmhyZWYpLnBhdGhuYW1lO1xyXG5cclxuICAgICAgICAgICAgLy8gQ29tcGFyYSBsYSBydXRhIGRlbCBlbmxhY2UgY29uIGxhIHJ1dGEgYWN0dWFsXHJcbiAgICAgICAgICAgIGlmIChsaW5rUGF0aCA9PT0gY3VycmVudFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZCgnYWN0aXZvJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2bycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNhbHVkbygpIHtcclxuICAgIGNvbnNvbGUubG9nKCdzYWx1ZG8gcHBwcHBwcHAnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBzYWx1ZG8gYXMgc2FsdWRvIH0gZnJvbSAnLi9fc2FsdWRvJztcclxuLy9pbXBvcnQgeyB0ZXN0aW1vbmlhbGVzIGFzIHRlc3RpbW9uaWFsZXMgfSBmcm9tICcuL190ZXN0aW1vbmlhbGVzJztcclxuaW1wb3J0IHsgbmF2ZWdhY2lvbiBhcyBuYXZlZ2FjaW9uIH0gZnJvbSAnLi9fbmF2ZWdhY2lvbic7XHJcblxyXG5uYXZlZ2FjaW9uKCk7XHJcbnNhbHVkbygpO1xyXG4vL3Rlc3RpbW9uaWFsZXMoKTtcclxuXHJcblxyXG4iXX0=
