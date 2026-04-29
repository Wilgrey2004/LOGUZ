// scripts/generate-sitemap.js — LOGUZ
// Genera sitemap.xml con todas las rutas del sitio.
// Uso: node scripts/generate-sitemap.js

const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

const BASE_URL = "https://wilgrey2004.github.io/LOGUZ";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/AcercaDeNosotros.html", changefreq: "monthly", priority: 0.7 },
  { url: "/Contacto.html", changefreq: "monthly", priority: 0.9 },
  { url: "/Planes/PlanSolucion.html", changefreq: "weekly", priority: 0.8 },
  { url: "/Planes/PlanTranquilidad.html", changefreq: "weekly", priority: 0.8 },
  { url: "/Planes/PlanSatisfaccion.html", changefreq: "weekly", priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: BASE_URL });
const outPath = path.join(__dirname, "..", "sitemap.xml");
const writeStream = createWriteStream(outPath);

sitemap.pipe(writeStream);
links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then(() => console.log("Sitemap generado correctamente en sitemap.xml"))
  .catch((err) => console.error("Error generando el sitemap:", err));
