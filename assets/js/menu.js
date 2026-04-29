/**
 * menu.js — LOGUZ
 * Hamburger mobile, submenu, cierre al click externo.
 * Accesibilidad: ARIA expanded, foco retorno, Escape.
 */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("MenuShowB");
    const modal = document.getElementById("MyModal");
    const subMenuBtn = document.getElementById("SubMenuShow");
    const subMenu = document.getElementById("MySubmenuModal");

    if (!menuBtn || !modal) return;

    // ── Menú principal ────────────────────────────
    function openMenu() {
      modal.classList.add("Activo");
      menuBtn.setAttribute("aria-expanded", "true");
      menuBtn.setAttribute("aria-label", "Cerrar menú");
    }

    function closeMenu() {
      modal.classList.remove("Activo");
      menuBtn.setAttribute("aria-expanded", "false");
      menuBtn.setAttribute("aria-label", "Abrir menú");
      // Cerrar submenú también
      if (subMenu) {
        subMenu.classList.remove("ActivoFlex");
        if (subMenuBtn) subMenuBtn.setAttribute("aria-expanded", "false");
      }
    }

    function isMenuOpen() {
      return modal.classList.contains("Activo");
    }

    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      isMenuOpen() ? closeMenu() : openMenu();
    });

    // ── Submenú ───────────────────────────────────
    if (subMenuBtn && subMenu) {
      subMenuBtn.setAttribute("aria-haspopup", "true");
      subMenuBtn.setAttribute("aria-expanded", "false");

      subMenuBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        const isOpen = subMenu.classList.contains("ActivoFlex");
        if (isOpen) {
          subMenu.classList.remove("ActivoFlex");
          subMenuBtn.setAttribute("aria-expanded", "false");
        } else {
          subMenu.classList.add("ActivoFlex");
          subMenuBtn.setAttribute("aria-expanded", "true");
        }
      });
    }

    // ── Cerrar al click externo ───────────────────
    document.addEventListener("click", function (e) {
      if (isMenuOpen() && !modal.contains(e.target) && e.target !== menuBtn) {
        closeMenu();
      }
    });

    // ── Cerrar con Escape ────────────────────────
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && isMenuOpen()) {
        closeMenu();
        menuBtn.focus();
      }
    });

    // ── ARIA init ─────────────────────────────────
    menuBtn.setAttribute("aria-haspopup", "true");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Abrir menú");
    menuBtn.setAttribute("aria-controls", "MyModal");
  });
})();
