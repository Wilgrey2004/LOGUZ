/**
 * theme.js — LOGUZ
 * Sistema de tema claro/oscuro.
 * Detecta prefers-color-scheme, lee/escribe localStorage,
 * aplica data-theme en <html> y expone toggle global.
 */

(function () {
  "use strict";

  const STORAGE_KEY = "loguz-theme";
  const DARK = "dark";
  const LIGHT = "light";

  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === DARK || stored === LIGHT) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK
      : LIGHT;
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);

    // Actualizar aria-label del botón toggle si existe
    const btn = document.querySelector(".ThemeToggle");
    if (btn) {
      btn.setAttribute(
        "aria-label",
        theme === DARK ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
      );
      btn.setAttribute("aria-pressed", theme === DARK ? "true" : "false");
    }
  }

  function toggle() {
    const current =
      document.documentElement.getAttribute("data-theme") || LIGHT;
    applyTheme(current === DARK ? LIGHT : DARK);
  }

  // Aplicar tema inmediatamente (antes del paint) para evitar flash
  applyTheme(getPreferred());

  // Exponer toggle para uso en HTML y otros módulos
  window.loguzTheme = { toggle, apply: applyTheme, get: getPreferred };

  // Vincular botón toggle al cargar el DOM
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".ThemeToggle");
    if (btn) {
      btn.addEventListener("click", toggle);
    }

    // Escuchar cambios del sistema operativo
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", function (e) {
        if (!localStorage.getItem(STORAGE_KEY)) {
          applyTheme(e.matches ? DARK : LIGHT);
        }
      });
  });
})();
