/**
 * whatsapp.js — LOGUZ
 * Construye URL wa.me/ con mensaje prellenado por contexto.
 * Fallback a Contacto.html si window.open falla.
 * Número oficial: 18293774584
 */

(function () {
  "use strict";

  var WA_NUMBER = "18293774584";
  var FALLBACK_URL = "/Contacto.html";

  // Mensajes por contexto
  var MESSAGES = {
    "Plan Familiar Solución":
      "Hola, estoy interesado/a en el Plan Familiar Solución de LOGUZ. ¿Podrían brindarme más información?",
    "Plan Familiar Tranquilidad":
      "Hola, estoy interesado/a en el Plan Familiar Tranquilidad de LOGUZ. ¿Podrían brindarme más información?",
    "Plan Familiar Satisfacción":
      "Hola, estoy interesado/a en el Plan Familiar Satisfacción de LOGUZ. ¿Podrían brindarme más información?",
    default:
      "Hola, me gustaría recibir información sobre los planes funerarios de LOGUZ.",
  };

  /**
   * Abre WhatsApp con el mensaje correspondiente al plan.
   * @param {string} [plan] - Nombre del plan o vacío para genérico.
   */
  function openWhatsApp(plan) {
    var msg = MESSAGES[plan] || MESSAGES["default"];
    var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);

    try {
      var win = window.open(url, "_blank", "noopener,noreferrer");
      if (!win || win.closed || typeof win.closed === "undefined") {
        // Popup bloqueado — redirigir en la misma ventana
        window.location.href = url;
      }
    } catch (e) {
      // Fallback: ir a contacto
      window.location.href = FALLBACK_URL;
    }
  }

  // Exponer globalmente
  window.openWhatsApp = openWhatsApp;

  // ── Vincular botones al cargar DOM ───────────────────
  document.addEventListener("DOMContentLoaded", function () {
    // Botones con data-wa-plan (nuevos CTAs)
    document.querySelectorAll("[data-wa-plan]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        openWhatsApp(btn.getAttribute("data-wa-plan") || "");
      });
    });

    // Botón legado MyButtonAdquirir (existente en páginas de planes)
    var legacyBtn = document.getElementById("MyButtonAdquirir");
    if (legacyBtn) {
      legacyBtn.addEventListener("click", function () {
        // El value del botón tiene el nombre parcial del plan
        var val = (legacyBtn.value || "").trim();
        // Normalizar a nombre completo de plan
        var plan = "";
        if (/soluci/i.test(val)) plan = "Plan Familiar Solución";
        else if (/tranquil/i.test(val)) plan = "Plan Familiar Tranquilidad";
        else if (/satisfac/i.test(val)) plan = "Plan Familiar Satisfacción";
        openWhatsApp(plan);
      });
    }
  });
})();
