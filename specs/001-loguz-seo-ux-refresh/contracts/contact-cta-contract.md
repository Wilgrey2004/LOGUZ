# Contract: Contact CTA Behavior

## Purpose

Definir comportamiento obligatorio de CTAs de contacto, con prioridad para WhatsApp.

## Entry Points

- Home hero
- Menu / header movil
- Paginas de planes
- Pagina de contacto
- Footer global

## Required Behavior

1. CTA primario debe decir accion clara equivalente a "Hablar por WhatsApp".
2. CTA debe ser visible above the fold en home movil o quedar alcanzable con scroll minimo.
3. CTA debe abrir `https://wa.me/` con numero oficial y mensaje prellenado contextual cuando aplique.
4. CTA debe conservar contraste AA en modo claro y oscuro.
5. CTA debe ofrecer estado hover, focus, active y disabled/fallback visibles.
6. Si WhatsApp no abre, pagina de contacto debe exponer telefono o correo alterno sin ocultarse.

## Interaction Rules

- Mobile: target tactil minimo 44x44 px.
- Keyboard: CTA debe ser focusable y activable con Enter/Espacio.
- Analytics-ready: comportamiento debe permitir agregar tracking de click sin reescritura estructural.

## Failure Conditions

- Numero incorrecto o enlace roto
- Mensaje prellenado mal codificado
- CTA no visible en mobile
- CTA ilegible en dark mode
