# Implementation Plan: Renovacion SEO UX LOGUZ

**Branch**: `001-create-feature-branch` | **Date**: 2026-04-29 | **Spec**: `specs/001-loguz-seo-ux-refresh/spec.md`
**Input**: Feature specification from `/specs/001-loguz-seo-ux-refresh/spec.md`

## Summary

Redisenar sitio estatico de LOGUZ para aumentar contactos por WhatsApp y mejorar
alcance organico, manteniendo tono serio de funeraria. Enfoque tecnico: conservar
HTML/CSS/JS vanilla, reorganizar activos compartidos, introducir sistema de temas
claro/oscuro, aplicar SEO por pagina, corregir textos y usar animaciones sobrias
con anime.js solo donde aporten jerarquia visual y no afecten rendimiento ni accesibilidad.

## Technical Context

**Language/Version**: HTML5, CSS3, JavaScript vanilla para navegador (ES2019+) y Node.js/npm para utilidades estaticas  
**Primary Dependencies**: `gh-pages`, `sitemap`, `animejs` para animaciones declarativas con soporte de reduccion de movimiento, utilidades nativas del navegador  
**Storage**: N/A; contenido y metadatos viven en archivos estaticos  
**Testing**: validacion manual multi-breakpoint, DevTools/Lighthouse, verificacion de consola, chequeo de enlaces internos y smoke test de sitemap  
**Target Platform**: navegadores moviles y desktop modernos; despliegue estatico en GitHub Pages y Netlify  
**Project Type**: sitio web institucional estatico / marketing site  
**Performance Goals**: LCP < 2.5s, CLS < 0.1, INP < 200ms, CTA principal visible above the fold en movil, contacto WhatsApp en <= 2 clics  
**Constraints**: sin backend, compatible con hosting estatico, tono sensible y profesional, fallback para `prefers-reduced-motion`, evitar dependencias pesadas o build compleja innecesaria  
**Scale/Scope**: 6 paginas publicas actuales (`index`, `Contacto`, `AcercaDeNosotros`, 3 planes), 1 sistema de navegacion compartido, 1 hoja de estilo principal a modularizar, 1 capa JS compartida para interacciones y tema

## Constitution Check

_GATE: Must pass before Phase 0 research. Re-check after Phase 1 design._

- **Business Outcome Gate**: PASS. Metrica primaria = tasa de inicio de contacto por WhatsApp; metricas secundarias = visibilidad SEO local y finalizacion de navegacion movil.
- **Brand Trust Gate**: PASS. Diseno prioriza paleta derivada de logo, correccion editorial y animacion sobria no ornamental.
- **Mobile-First Gate**: PASS. Plan cubre 320/375/428/768/1024/1440, menu thumb-friendly, CTA fijo o persistentemente visible y touch targets >= 44x44.
- **SEO Gate**: PASS. Incluye metadata unica por pagina, canonical, headings semanticos, alt descriptivos, schema `LocalBusiness`/`Organization`/`Service`, sitemap corregido e interlinking entre home, contacto y planes.
- **Quality Gate**: PASS. Validacion definida para consola limpia, enlaces internos sin roturas, accesibilidad por teclado, contrastes y objetivos Core Web Vitals.

**Post-Design Recheck**: PASS. Artefactos de Phase 1 mantienen stack estatico, cubren responsive, SEO, UX y calidad sin violar restricciones de simplicidad.

## Project Structure

### Documentation (this feature)

```text
specs/001-loguz-seo-ux-refresh/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── public-page-contract.md
│   └── whatsapp-entry-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
.
├── index.html
├── AcercaDeNosotros.html
├── Contacto.html
├── Planes/
│   ├── PlanSolucion.html
│   ├── PlanTranquilidad.html
│   └── PlanSatisfaccion.html
├── assets/
│   ├── css/
│   │   ├── tokens.css
│   │   └── site.css
│   ├── js/
│   │   ├── app.js
│   │   ├── theme.js
│   │   ├── menu.js
│   │   └── whatsapp.js
│   └── img/
├── scripts/
│   └── generate-sitemap.js
├── sitemap.xml
├── package.json
└── specs/
```

**Structure Decision**: usar un solo proyecto estatico con paginas HTML en raiz/`Planes/`, y mover estilos, scripts e imagenes a `assets/` para reducir duplicacion. Mantener compatibilidad con rutas relativas de GitHub Pages y Netlify. `scrips/` se renombra logicamente a `scripts/` durante implementacion para consistencia.

## Complexity Tracking

No constitutional violations expected. No extra justification table required.
