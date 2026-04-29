# Data Model: Renovacion SEO UX LOGUZ

## PaginaPublica

Purpose: representa cada pagina visible e indexable del sitio.

Fields:

- `slug`: identificador de ruta (`inicio`, `contacto`, `acerca`, `plan-solucion`, `plan-tranquilidad`, `plan-satisfaccion`)
- `filePath`: archivo HTML asociado
- `pageTitle`: titulo unico SEO
- `metaDescription`: descripcion corta unica
- `canonicalUrl`: URL absoluta canonica
- `primaryHeading`: encabezado H1
- `themeVariant`: configuracion visual por defecto
- `ctaPriority`: nivel de visibilidad del CTA de contacto
- `status`: `draft`, `ready`, `published`

Validation Rules:

- `pageTitle` obligatorio, unico y recomendado <= 65 caracteres
- `metaDescription` obligatoria, unica y recomendada <= 160 caracteres
- `canonicalUrl` obligatoria y absoluta
- solo un `H1` por pagina

Relationships:

- una `PaginaPublica` contiene multiples `BloqueContenido`
- una `PaginaPublica` referencia uno o mas `CanalContacto`
- una `PaginaPublica` aplica un `TemaVisual`

## BloqueContenido

Purpose: seccion editorial reusable dentro de una pagina.

Fields:

- `blockId`: identificador unico local
- `pageSlug`: referencia a pagina
- `blockType`: `hero`, `benefits`, `rules`, `plan-details`, `contact`, `about`, `footer`
- `heading`: titulo visible del bloque
- `bodyCopy`: contenido textual
- `mediaAlt`: texto alternativo si contiene imagen
- `toneStatus`: `pending-review`, `approved`

Validation Rules:

- texto sin faltas ortograficas
- tono serio y empatico
- alt obligatorio para media informativa

## CanalContacto

Purpose: punto de conversion visible para iniciar contacto.

Fields:

- `channelId`: identificador (`whatsapp-primary`, `email-support`, `phone-backup`)
- `channelType`: `whatsapp`, `email`, `phone`
- `target`: numero, correo o enlace
- `prefilledMessage`: mensaje inicial opcional
- `placement`: `hero`, `sticky`, `footer`, `contact-page`, `plan-card`
- `fallbackOrder`: prioridad de respaldo
- `availabilityLabel`: texto de apoyo opcional

Validation Rules:

- WhatsApp primario debe existir al menos en home, contacto y planes
- enlaces deben abrir destino correcto
- fallback visible si canal principal falla o no abre

State Transitions:

- `hidden` -> `visible`
- `visible` -> `activated`
- `activated` -> `fallback-shown` cuando no abre destino

## TemaVisual

Purpose: sistema de tokens de color, contraste y motion por modo.

Fields:

- `themeId`: `light` o `dark`
- `brandPrimary`, `brandSecondary`, `surface`, `surfaceAlt`, `textPrimary`, `textMuted`, `accent`
- `shadowStyle`: intensidad de elevacion
- `motionLevel`: `full`, `reduced`
- `isDefault`: booleano

Validation Rules:

- contraste AA en texto principal y botones
- tokens equivalentes entre claro y oscuro
- `motionLevel` responde a `prefers-reduced-motion`

## ComponenteNavegacion

Purpose: menu, submenu, toggle de tema y botones globales.

Fields:

- `componentId`
- `componentType`: `header`, `menu`, `submenu`, `theme-toggle`, `cta-button`
- `label`
- `targetRef`
- `interactionMode`: `hover`, `click`, `keyboard`, `touch`
- `minTouchTarget`: numero en px
- `state`: `idle`, `open`, `closed`, `focused`, `active`

Validation Rules:

- target tactil >= 44x44 px
- navegable por teclado
- estado visible claro en `focus` y `active`
