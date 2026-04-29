const fs = require("fs");
const pages = [
  "index.html",
  "AcercaDeNosotros.html",
  "Contacto.html",
  "Planes/PlanSolucion.html",
  "Planes/PlanTranquilidad.html",
  "Planes/PlanSatisfaccion.html",
];
let allOk = true;
pages.forEach((p) => {
  const c = fs.readFileSync(p, "utf8");
  const checks = {
    "tokens.css": c.includes("tokens.css"),
    "site.css": c.includes("site.css"),
    "theme.js": c.includes("theme.js"),
    "WhatsApp btn": c.includes("btn-whatsapp"),
    ThemeToggle: c.includes("ThemeToggle"),
    "skip-link": c.includes("skip-link"),
    canonical: c.includes("canonical"),
    "JSON-LD": c.includes("application/ld+json"),
    "anime.min.js": c.includes("anime.min.js"),
  };
  const missing = Object.entries(checks)
    .filter(([, v]) => !v)
    .map(([k]) => k);
  if (missing.length === 0) {
    console.log("OK  ", p);
  } else {
    allOk = false;
    console.log("FAIL", p, "-- missing:", missing.join(", "));
  }
});
console.log(allOk ? "\nAll pages PASS" : "\nSome pages FAILED");
