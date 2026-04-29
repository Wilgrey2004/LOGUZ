# Research: Renovacion SEO UX LOGUZ

## Decision: Mantener stack estatico HTML/CSS/JS vanilla con Node solo para tooling

Rationale: proyecto ya despliega como sitio estatico y debe seguir compatible con GitHub Pages y Netlify. Evitar framework reduce riesgo de migracion, complejidad y tiempo de entrega. Node se reserva para dependencias de build livianas y checks.

Alternatives considered:

- Migrar a framework SPA/SSG: descartado por costo de migracion y riesgo de romper deploy actual.
- Mantener todo sin tooling: descartado porque dificulta sitemap, validaciones y manejo limpio de dependencias.

## Decision: Usar anime.js de forma limitada y condicional

Rationale: anime.js ofrece animacion ligera y soporte para escenarios con media queries y reduced motion; sirve para reveals, entradas de hero, feedback de CTA y transiciones suaves sin volver sitio estridente. Motion se limitara a opacidad, transform y estados cortos acelerados por navegador.

Alternatives considered:

- Solo CSS animations: valido pero menos flexible para secuencias coordinadas y control condicional.
- GSAP: descartado por peso y alcance innecesario para este sitio.
- Sin animaciones: descartado porque usuario pide refresh visual moderno; aun asi se limitan por tono funerario.

## Decision: Introducir sistema de tema con tokens y modo claro/oscuro persistente

Rationale: tema dual mejora confort de uso y permite modernizar interfaz sin duplicar estilos arbitrarios. Tokens CSS basados en paleta del logo facilitan consistencia de marca, contraste y mantenimiento. Preferencia se persistira en `localStorage`, con fallback a `prefers-color-scheme`.

Alternatives considered:

- Solo modo claro: descartado por requerimiento explicito del feature.
- Dos hojas CSS separadas: descartado por mantenimiento duplicado.

## Decision: SEO por pagina y schema estructurado como parte de definicion de hecho

Rationale: sitio actual muestra metadatos duplicados e inconsistentes. Cada pagina debe publicar `title`, `meta description`, `canonical`, Open Graph, Twitter cards, heading hierarchy y JSON-LD alineado con contacto y localidad. Esto refuerza alcance organico y claridad para buscadores.

Alternatives considered:

- SEO solo en home: descartado; planes y contacto tambien deben captar busquedas.
- Mantener `meta keywords` como estrategia principal: descartado; valor moderno bajo frente a metadata y contenido semantico.

## Decision: Reorganizacion incremental de carpetas y componentes

Rationale: repo actual mezcla contenido, scripts y assets con nombres irregulares (`scrips`, raiz con script de sitemap, HTML duplicado). Reorganizacion incremental permite limpiar sin romper URLs publicas. Componentes repetidos (header, nav, footer, CTA) se normalizaran mediante convenciones y bloques reutilizables.

Alternatives considered:

- Reescritura completa desde cero: descartado por riesgo y costo.
- No tocar estructura: descartado porque aumenta deuda tecnica y dificulta SEO y UX consistente.

## Decision: Validacion principal mediante auditoria manual guiada y checks ligeros

Rationale: sitio no tiene harness de testing automatizado. Para esta iteracion, mejor retorno viene de checklist responsive, keyboard audit, smoke test de links, verificacion de WhatsApp y Lighthouse/PageSpeed. Estos checks cubren calidad real de web estatica sin introducir infraestructura excesiva.

Alternatives considered:

- E2E formal con Playwright desde inicio: util, pero fuera de alcance inmediato de planning.
- Sin checklist de calidad: descartado por riesgo alto de regresiones visuales y SEO.
