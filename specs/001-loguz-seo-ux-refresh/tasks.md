# Tasks: Renovacion SEO UX LOGUZ

**Input**: Design documents from `/specs/001-loguz-seo-ux-refresh/`
**Prerequisites**: plan.md ✅ | spec.md ✅ | research.md ✅ | data-model.md ✅ | contracts/ ✅ | quickstart.md ✅

**Tests**: No test tasks (not requested in spec). Validation via checklist manual, Lighthouse y smoke tests definidos en quickstart.md.

**Organization**: Tareas agrupadas por historia de usuario para implementacion y validacion independiente.

## Format: `[ID] [P?] [Story?] Description`

- **[P]**: puede correr en paralelo (archivo diferente, sin dependencia de tarea incompleta)
- **[Story]**: historia de usuario a la que pertenece (US1, US2, US3)
- Rutas absolutas relativas a raiz del repositorio

---

## Phase 1: Setup (Infraestructura compartida)

**Purpose**: Inicializacion del proyecto, instalacion de dependencias y estructura de carpetas limpia.

- [X] T001 Instalar animejs: ejecutar `npm install animejs` en raiz del repositorio (package.json)
- [X] T002 Crear carpeta `assets/css/` con `tokens.css` y `site.css` vacios como punto de entrada CSS modularizado
- [X] T003 [P] Crear carpeta `assets/js/` con archivos `app.js`, `theme.js`, `menu.js` y `whatsapp.js` vacios
- [X] T004 [P] Mover y renombrar `scrips/index.js` a `scripts/generate-sitemap.js` con contenido actual preservado
- [X] T005 [P] Mover `style/style.css` a `assets/css/site.css` manteniendo contenido; actualizar referencias en todos los HTML

**Checkpoint**: dependencias instaladas, estructura de carpetas lista y todas las paginas cargan sin error de recursos.

---

## Phase 2: Foundational (Prerequisitos que bloquean todas las historias)

**Purpose**: Tokens CSS, sistema de tema y capa JS compartida que todas las paginas necesitan antes de implementar por historia.

- [X] T006 Definir tokens CSS de paleta de marca LOGUZ en `assets/css/tokens.css` (colores claro/oscuro, tipografia, spacing, shadow, accent)
- [X] T007 Escribir `assets/js/theme.js`: detectar `prefers-color-scheme`, leer/escribir `localStorage`, aplicar `data-theme` en `<html>` y exponer toggle
- [X] T008 [P] Escribir `assets/js/menu.js`: logica de hamburger, submenu, cierre al click externo, accesibilidad ARIA
- [X] T009 [P] Actualizar `assets/css/site.css`: refactorizar CSS actual para consumir tokens, mobile-first, breakpoints 320/375/428/768/1024/1440, eliminar reglas duplicadas
- [X] T010 Referenciar `assets/css/tokens.css`, `assets/css/site.css`, `assets/js/theme.js` y `assets/js/menu.js` en fragment de `<head>` y `<body>` comun (validar en los 6 HTML)

**Checkpoint**: tokens activos, cambio de tema funciona en todas las paginas, menu mobile opera sin errores de consola.

---

## Phase 3: User Story 1 - Contacto rapido por WhatsApp (Priority: P1) 🎯 MVP

**Goal**: CTA de WhatsApp claro, correcto y visible en home, contacto y cada plan sin mas de 2 clics desde cualquier pagina.

**Independent Test**: abrir `index.html` en movil 375px, verificar CTA visible above the fold, tocar CTA, confirmar que abre `wa.me/18293774584` con mensaje prellenado. Verificar mismo flujo en modo oscuro y claro.

### Implementacion User Story 1

- [X] T011 [US1] Escribir `assets/js/whatsapp.js`: funcion `openWhatsApp(plan)` que construye URL `wa.me/` con numero oficial y mensaje prellenado segun contexto (plan o generico), con fallback a `Contacto.html` si falla
- [X] T012 [P] [US1] Agregar CTA de WhatsApp en seccion hero de `index.html`: boton visible, touch target >= 44x44 px, contraste AA en ambos temas
- [X] T013 [P] [US1] Agregar CTA de WhatsApp en `Contacto.html`: boton principal con label claro y fallback de telefono/correo visible debajo
- [X] T014 [P] [US1] Agregar CTA de WhatsApp en `Planes/PlanSolucion.html`: boton en card o seccion de adquisicion usando `openWhatsApp('Plan Familiar Solución')`
- [X] T015 [P] [US1] Agregar CTA de WhatsApp en `Planes/PlanTranquilidad.html`: boton en card o seccion de adquisicion usando `openWhatsApp('Plan Familiar Tranquilidad')`
- [X] T016 [P] [US1] Agregar CTA de WhatsApp en `Planes/PlanSatisfaccion.html`: boton en card o seccion de adquisicion usando `openWhatsApp('Plan Familiar Satisfacción')`
- [X] T017 [US1] Estilar boton CTA WhatsApp en `assets/css/site.css`: estados hover/focus/active/disabled visibles, icon de WhatsApp integrado, contraste en modo claro y oscuro
- [X] T018 [US1] Agregar CTA de WhatsApp en footer global de las 6 paginas publicas para alcance universal

**Checkpoint**: US1 completamente funcional e independiente. CTA visible, enlace correcto, fallback presente, funciona en ambos temas y en mobile.

---

## Phase 4: User Story 2 - Imagen seria, moderna y confiable (Priority: P2)

**Goal**: Consistencia visual sobria en todas las paginas, ortografia corregida, menu y botones mejorados, animaciones discretas con anime.js.

**Independent Test**: navegar entre `index.html`, `AcercaDeNosotros.html`, `Contacto.html` y `Planes/` en desktop y 375px. Confirmar paleta coherente, cero faltas ortograficas, menu sin bugs y animaciones sin interrumpir flujo.

### Implementacion User Story 2

- [X] T019 [US2] Escribir `assets/js/app.js`: inicializar tema, menu y animaciones; importar modulos en orden correcto; respetar `prefers-reduced-motion`
- [X] T020 [P] [US2] Corregir ortografia y redaccion en `index.html`: Mision, Vision, Valores, Reglas Generales y microcopys (ej. "dificiles" -> "difíciles", duplicacion de viewport meta, doble `<title>`)
- [X] T021 [P] [US2] Corregir ortografia y redaccion en `AcercaDeNosotros.html`: todos los textos
- [X] T022 [P] [US2] Corregir ortografia y redaccion en `Contacto.html`: todos los textos y labels de formulario si aplica
- [X] T023 [P] [US2] Corregir ortografia y redaccion en `Planes/PlanSolucion.html`: nombres de plan, descripcion, reglas y CTA
- [X] T024 [P] [US2] Corregir ortografia y redaccion en `Planes/PlanTranquilidad.html`: nombres de plan, descripcion, reglas y CTA
- [X] T025 [P] [US2] Corregir ortografia y redaccion en `Planes/PlanSatisfaccion.html`: nombres de plan, descripcion, reglas y CTA
- [X] T026 [US2] Refactorizar header/nav compartido: logo, nombre LOGUZ, submenu de Planes, toggle de tema y link de contacto; touch targets >= 44x44 px; hamburger en mobile (usa `assets/js/menu.js`)
- [X] T027 [US2] Aplicar header/nav refactorizado en las 6 paginas publicas con HTML consistente
- [X] T028 [P] [US2] Estilar header y nav en `assets/css/site.css` para mobile-first: sticky opcional, sombra sutil, transicion de apertura de menu
- [X] T029 [P] [US2] Estilar botones generales en `assets/css/site.css`: variantes primario/secundario, estados interactivos, contraste AA en ambos temas
- [X] T030 [US2] Agregar animaciones anime.js en `assets/js/app.js`: fade-in hero (opacidad 0->1), entrada escalonada de cards de planes, reveal suave de seccion mision/vision/valores; desactivar todo si `prefers-reduced-motion: reduce`
- [X] T031 [P] [US2] Aplicar footer consistente en las 6 paginas: redes sociales, CTA WhatsApp footer (T018), copyright y enlaces internos

**Checkpoint**: US2 completamente funcional. Visual coherente, sin ortografia erronea, menu funcional, animaciones discretas, footer uniforme.

---

## Phase 5: User Story 3 - Descubrimiento organico y rendimiento UX (Priority: P3)

**Goal**: Metadata SEO unica por pagina, schema JSON-LD valido, sitemap correcto, enlaces internos funcionales y Core Web Vitals dentro de objetivo.

**Independent Test**: revisar source de cada pagina para titulo, meta description y canonical unicos. Validar JSON-LD con Rich Results Test. Verificar sitemap.xml. Correr Lighthouse en home y contacto. Comprobar que no hay enlaces rotos internos.

### Implementacion User Story 3

- [X] T032 [US3] Aplicar metadata SEO completa en `index.html`: title unico, meta description unica, canonical absoluto, OG tags, Twitter card, JSON-LD `LocalBusiness` con nombre/telefono/ciudad/url, eliminar viewport duplicado y segundo title
- [X] T033 [P] [US3] Aplicar metadata SEO completa en `AcercaDeNosotros.html`: title, meta description, canonical, OG, Twitter card, JSON-LD `Organization`
- [X] T034 [P] [US3] Aplicar metadata SEO completa en `Contacto.html`: title, meta description, canonical, OG, Twitter card, JSON-LD `LocalBusiness` con contactPoint
- [X] T035 [P] [US3] Aplicar metadata SEO completa en `Planes/PlanSolucion.html`: title, meta description, canonical, OG, JSON-LD `Service`
- [X] T036 [P] [US3] Aplicar metadata SEO completa en `Planes/PlanTranquilidad.html`: title, meta description, canonical, OG, JSON-LD `Service`
- [X] T037 [P] [US3] Aplicar metadata SEO completa en `Planes/PlanSatisfaccion.html`: title, meta description, canonical, OG, JSON-LD `Service`
- [X] T038 [US3] Auditar y corregir jerarquia semantica en las 6 paginas: un solo `h1`, uso correcto `h2`/`h3`, landmarks `header`/`nav`/`main`/`footer`, `alt` descriptivo en todas las imagenes
- [X] T039 [P] [US3] Verificar y completar interlinking interno: home <-> contacto <-> acerca <-> cada plan; links sin roturas
- [X] T040 [US3] Actualizar `scripts/generate-sitemap.js`: corregir hostname base (`https://wilgrey2004.github.io/LOGUZ/`), agregar todas las rutas actuales y regenerar `sitemap.xml`
- [X] T041 [P] [US3] Optimizar imagenes en `img/`: verificar atributos `width`/`height` en HTML para prevenir CLS; agregar `loading="lazy"` a imagenes fuera de fold

**Checkpoint**: US3 completamente funcional. SEO completo por pagina, schema valido, sitemap correcto, sin enlaces rotos, CLS controlado.

---

## Phase 6: Polish y mejoras transversales

**Purpose**: calidad final, accesibilidad, validacion de rendimiento y documentacion de baseline.

- [X] T042 [P] Validar navegacion por teclado en todas las paginas: tab order logico, foco visible, CTA activable con Enter/Espacio
- [X] T043 [P] Validar contraste de color AA en ambos temas: texto principal, botones, links, CTA WhatsApp y elementos de estado
- [X] T044 Correr Lighthouse/PageSpeed en home y contacto; registrar LCP, CLS e INP; ajustar si alguno supera umbral del plan
- [X] T045 [P] Smoke test final de WhatsApp: verificar numero, mensaje prellenado y fallback en home, contacto y los 3 planes
- [X] T046 [P] Smoke test de enlaces internos: confirmar que ningun link interno devuelve 404 o abre pagina incorrecta
- [X] T047 Validar comportamiento responsive manual en 320, 375, 428, 768, 1024 y 1440 px: menu, CTA, hero, cards y footer sin desbordamiento
- [X] T048 [P] Validar comportamiento de animaciones con `prefers-reduced-motion: reduce` activo: confirmar que no hay motion visible
- [X] T049 Ejecutar `npm run deploy` para verificar build y publicacion en GitHub Pages sin errores

---

## Dependencias y orden de ejecucion

### Dependencias por fase

- **Phase 1 (Setup)**: sin dependencias, empieza inmediatamente.
- **Phase 2 (Foundational)**: depende de T001-T005. BLOQUEA US1, US2 y US3.
- **Phase 3 (US1)**: puede comenzar despues de T006-T010.
- **Phase 4 (US2)**: puede comenzar despues de T006-T010; T030 depende de T019.
- **Phase 5 (US3)**: puede comenzar despues de T006-T010; T040 depende de T004.
- **Phase 6 (Polish)**: depende de completar las historias deseadas.

### Dependencias entre historias

- **US1 (P1)**: empieza despues de Phase 2. Sin dependencia de US2 o US3.
- **US2 (P2)**: empieza despues de Phase 2. T030 requiere T019. T027 requiere T026.
- **US3 (P3)**: empieza despues de Phase 2. T040 requiere T004.

### Dentro de cada historia

- Modulos JS antes de consumidores HTML
- Tokens CSS antes de estilos que los consumen
- Header/nav antes de aplicacion en paginas
- Correccion ortografica en paralelo (archivos distintos)
- Metadata SEO en paralelo (archivos distintos)

---

## Oportunidades de paralelismo

### Phase 1

```
T002, T003, T004 -> en paralelo (carpetas distintas)
T005 -> despues de T002
```

### Phase 3 (US1)

```
T011 -> primero (modulo compartido)
T012, T013, T014, T015, T016 -> en paralelo (HTML distintos, dependen de T011)
T017 -> paralelo con T012-T016 (CSS, archivo distinto)
T018 -> despues de T012-T016
```

### Phase 4 (US2)

```
T020, T021, T022, T023, T024, T025 -> en paralelo (HTML distintos)
T026 -> independiente (refactor header)
T027 -> despues de T026
T028, T029 -> paralelo (mismo archivo CSS, secciones distintas)
T030 -> despues de T019
T031 -> independiente del resto de US2
```

### Phase 5 (US3)

```
T032, T033, T034, T035, T036, T037 -> en paralelo (HTML distintos)
T038 -> despues de T032-T037 (revision transversal)
T039 -> paralelo con T038
T040 -> despues de T004
T041 -> paralelo con T032-T037
```

---

## Estrategia de implementacion

### MVP (solo US1 — minima friccion para contacto)

1. Completar Phase 1: Setup
2. Completar Phase 2: Foundational (tokens, tema, menu base)
3. Completar Phase 3: US1 (CTA WhatsApp en home, contacto y planes)
4. **STOP y VALIDAR**: flujo de WhatsApp funciona en mobile en ambos temas
5. Desplegar si listo

### Entrega incremental

1. Setup + Foundational → base lista
2. US1 → CTA WhatsApp en todas paginas → deploy (MVP!)
3. US2 → visual serio, ortografia, menu, animaciones → deploy
4. US3 → SEO completo, sitemap, rendimiento → deploy
5. Polish → calidad final → release estable

---

## Notas

- [P] = archivos distintos, sin dependencias incompletas bloqueando
- [Story] label mapea tarea a historia de usuario para trazabilidad
- Cada historia es completamente testeable e implementable de forma independiente
- Animaciones solo en `app.js` con gate de `prefers-reduced-motion`
- Numero de WhatsApp actual en codigo: `18293774584`; verificar antes de US1
- Sitemap hostname actual incorrecto en `index.js`; corregir en T040
- Dos `<title>` en `index.html` actual: eliminar duplicado en T020
- Viewport meta duplicado en `index.html` actual: eliminar en T020
