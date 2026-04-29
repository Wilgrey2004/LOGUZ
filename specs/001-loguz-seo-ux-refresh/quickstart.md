# Quickstart: Renovacion SEO UX LOGUZ

## Prerequisitos

- Node.js 18+ instalado
- npm disponible
- repositorio clonado en entorno local

## Preparacion

1. Ejecutar `npm install` en raiz.
2. Agregar dependencia de animacion al iniciar implementacion: `npm install animejs`.
3. Servir sitio con servidor estatico local de preferencia.

## Flujo recomendado de implementacion

1. Normalizar estructura de assets y scripts sin romper rutas publicas.
2. Corregir ortografia y consistencia editorial en todas las paginas.
3. Introducir tokens CSS de marca y sistema claro/oscuro.
4. Refactorizar header, menu, CTA y botones para mobile-first.
5. Integrar CTA de WhatsApp consistente y fallback visible.
6. Aplicar metadata SEO y schema por pagina.
7. Integrar anime.js solo en secciones clave con respeto a `prefers-reduced-motion`.

## Verificacion funcional

1. Abrir `index.html`, `Contacto.html`, `AcercaDeNosotros.html` y cada pagina en `Planes/`.
2. Validar menu, submenu, cambio de tema, CTA de WhatsApp y enlaces internos.
3. Revisar widths: 320, 375, 428, 768, 1024 y 1440 px.
4. Confirmar foco visible, navegacion por teclado y targets tactiles.
5. Confirmar que no existan errores bloqueantes en consola.

## Verificacion SEO y rendimiento

1. Confirmar `title`, `meta description`, `canonical`, Open Graph y Twitter por pagina.
2. Confirmar JSON-LD valido para negocio local y servicios.
3. Regenerar sitemap si cambian rutas o canonicals.
4. Ejecutar Lighthouse/PageSpeed en home y contacto.
5. Verificar LCP, CLS e INP frente a objetivos del plan.

## Criterio de salida

Feature lista para tasks cuando:

- flujo de WhatsApp sea claro en todas paginas clave
- visual serio y moderno quede consistente
- responsive y dark/light queden verificados
- SEO por pagina quede completo
