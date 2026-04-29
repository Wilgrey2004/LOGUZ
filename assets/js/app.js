/**
 * app.js — LOGUZ
 * Animaciones anime.js v4 + prefers-reduced-motion.
 */
(function () {
  'use strict';
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('DOMContentLoaded', function () {
    if (reducedMotion) return;
    var animeLib = window.anime;
    if (!animeLib || typeof animeLib.animate !== 'function') return;
    var animate = animeLib.animate;
    animate('.MyTopHeader', { opacity: [0, 1], translateY: [-12, 0], duration: 600, ease: 'outCubic' });
    animate('.MyNabar',     { opacity: [0, 1], translateY: [-8, 0],  duration: 600, ease: 'outCubic', delay: 100 });
    var mainSection = document.querySelector('.MyMain > section');
    if (mainSection) animate(mainSection, { opacity: [0, 1], translateY: [24, 0], duration: 700, ease: 'outCubic', delay: 200 });
    document.querySelectorAll('.ImageCarrucel').forEach(function (el, i) {
      animate(el, { opacity: [0, 1], translateY: [32, 0], scale: [0.96, 1], duration: 600, ease: 'outCubic', delay: 350 + i * 120 });
    });
    document.querySelectorAll('.MyMV').forEach(function (el, i) {
      animate(el, { opacity: [0, 1], translateX: [-20, 0], duration: 600, ease: 'outCubic', delay: 400 + i * 100 });
    });
    var ctaSection = document.querySelector('.wa-cta-section');
    if (ctaSection) animate(ctaSection, { opacity: [0, 1], scale: [0.96, 1], duration: 500, ease: 'outBack', delay: 600 });
  });
})();
