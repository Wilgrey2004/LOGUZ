# Feature Specification: Renovacion SEO UX LOGUZ

**Feature Branch**: `001-create-feature-branch`  
**Created**: 2026-04-29  
**Status**: Draft  
**Input**: User description: "esta pagina web como objetivo tiene atraer nuevos clientes a la funeraria y brindar un contacto mas rapido por via de whatsapp, aparte de eso buscamos que esta se componga con un buen ceo, una paleta de colores de acuerdo con el logo de LOGUZ y que tenga varias animaciones de anime js para animar la pagina pero siempre viendola desde el punto de vista de que es para una funeraria por lo que debe de mantenerse con ese estilo serio, tambien un modo claro oscuro y mejoras de ux ui en menu, botones y reponsive disaing, deberas corregir faltas ortograficas en los textos y planes y corregir el ux ui de cada pagina apaarte de tener una mejor organizacion de carpetas y elementos, estamos trabajando con html, css y js vanilla por asi decirlo asi que ten eso en cuenta he instala lo que necesites, tambien puedes hacer uso de node para intalar las bibliotecas que consideres para mejorar la experiencia de usuario."

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Contacto rapido por WhatsApp (Priority: P1)

Como familiar que busca servicio funerario, quiero encontrar y usar el contacto de WhatsApp en segundos para pedir informacion sin friccion.

**Why this priority**: Es camino mas directo a conversion y genera valor inmediato para negocio.

**Independent Test**: Puede probarse abriendo pagina principal en movil y escritorio, encontrando CTA de WhatsApp y completando inicio de conversacion en menos de 2 clics.

**Acceptance Scenarios**:

1. **Given** visitante entra a cualquier pagina principal de servicio, **When** busca medio de contacto, **Then** encuentra CTA de WhatsApp visible sin hacer scroll excesivo.
2. **Given** visitante toca CTA de WhatsApp, **When** se abre canal de contacto, **Then** mensaje inicial y destino son correctos para iniciar atencion.
3. **Given** visitante usa modo oscuro o claro, **When** navega a contacto, **Then** CTA mantiene legibilidad, contraste y estado interactivo claro.

---

### User Story 2 - Imagen seria moderna y confiable (Priority: P2)

Como potencial cliente, quiero una experiencia visual profesional y sobria para confiar en LOGUZ antes de contactar.

**Why this priority**: Confianza influye directamente en decision de contacto en categoria sensible.

**Independent Test**: Puede probarse revisando home, planes, contacto y acerca de nosotros, validando consistencia de tono visual, ortografia corregida y navegacion clara.

**Acceptance Scenarios**:

1. **Given** usuario navega entre paginas, **When** cambia de seccion, **Then** mantiene coherencia visual con paleta alineada a marca LOGUZ.
2. **Given** usuario revisa textos de planes y secciones informativas, **When** lee contenidos, **Then** no encuentra faltas ortograficas ni redaccion confusa.
3. **Given** usuario interactua con menu y botones, **When** usa sitio en movil, **Then** controles son faciles de tocar y entender.

---

### User Story 3 - Descubrimiento organico y rendimiento UX (Priority: P3)

Como persona que busca funeraria en internet, quiero encontrar LOGUZ facilmente y navegar sin esperas para completar contacto.

**Why this priority**: SEO y rendimiento sostienen crecimiento de alcance y conversion a mediano plazo.

**Independent Test**: Puede probarse con auditoria de metadatos por pagina, estructura semantica, enlaces internos, velocidad percibida y estabilidad visual en multiples resoluciones.

**Acceptance Scenarios**:

1. **Given** motores indexan paginas del sitio, **When** analizan metadatos y estructura, **Then** cada pagina publica expone informacion unica y relevante para busqueda local.
2. **Given** usuario entra desde movil con red comun, **When** carga home y abre menu, **Then** contenido principal aparece rapido y sin saltos molestos.
3. **Given** usuario explora varias secciones, **When** usa enlaces de navegacion, **Then** no encuentra enlaces rotos ni rutas ambiguas.

### Edge Cases

- Cambio de modo claro/oscuro durante animaciones no debe causar parpadeo, perdida de contraste ni bloqueo de interaccion.
- Si WhatsApp no puede abrirse en dispositivo, sistema debe mostrar alternativa de contacto inmediata y visible.
- Si usuario tiene preferencia de movimiento reducido, animaciones deben reducirse sin romper jerarquia visual.
- Si texto largo en planes crece en futuras ediciones, layout movil debe mantener legibilidad sin desbordes.
- Si pagina se visualiza en 320px, menu y CTA principal deben seguir operables sin superposiciones.

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: Sistema MUST priorizar objetivo de negocio de captar nuevos clientes con un camino principal de contacto rapido por WhatsApp en paginas clave.
- **FR-002**: Sistema MUST mantener tono serio, profesional y empatico en textos, microcopys y recursos visuales.
- **FR-003**: Sistema MUST corregir ortografia y redaccion en textos existentes (incluyendo planes) sin perder significado comercial.
- **FR-004**: Sistema MUST aplicar paleta de color coherente con identidad visual de LOGUZ en todos los estados de interfaz.
- **FR-005**: Sistema MUST ofrecer modo claro y modo oscuro consistentes, con contraste legible y persistencia de preferencia de usuario.
- **FR-006**: Feature MUST definir una metrica primaria de negocio y valor base previo a cambios.
- **FR-007**: Feature MUST incluir criterios de aceptacion responsive para 320/375/428/768/1024/1440 y objetivo de touch targets minimos.
- **FR-008**: Feature MUST incluir requisitos SEO por pagina: titulo unico, descripcion, canonical, jerarquia semantica, alt descriptivo y enlazado interno.
- **FR-009**: Feature MUST definir revisiones de calidad UX: accesibilidad por teclado, ausencia de errores bloqueantes en consola y enlaces internos validos.
- **FR-010**: Sistema MUST incorporar animaciones que refuercen claridad visual sin romper estilo sobrio ni distraer del contacto principal.
- **FR-011**: Sistema MUST mejorar UX/UI de menu, botones y componentes de navegacion en todas las paginas publicas.
- **FR-012**: Sistema MUST reorganizar estructura de carpetas y activos con nomenclatura consistente para facilitar mantenimiento futuro.

### Key Entities _(include if feature involves data)_

- **PaginaPublica**: Representa cada vista indexable (inicio, contacto, acerca, planes) con atributos de contenido, metadata SEO y estado visual.
- **CanalContacto**: Representa vias de contacto visibles (WhatsApp primario y alternativa de respaldo) con prioridad y contexto de uso.
- **TemaVisual**: Representa configuraciones de modo claro/oscuro, tokens de color de marca y reglas de contraste.
- **ComponenteNavegacion**: Representa menu, botones y CTAs con estados interactivos, accesibilidad y comportamiento responsive.
- **BloqueContenido**: Representa secciones textuales sujetas a correccion ortografica y consistencia de tono.

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Al menos 80% de visitantes de pagina principal encuentran accion de WhatsApp en menos de 10 segundos durante pruebas moderadas.
- **SC-002**: Tasa de inicio de contacto por WhatsApp mejora minimo 30% frente al baseline previo en periodo comparable de 30 dias.
- **SC-003**: 100% de paginas publicas publican titulo y descripcion unicos, jerarquia de encabezados valida y enlaces internos funcionales.
- **SC-004**: 95% de tareas criticas de navegacion (abrir menu, cambiar tema, abrir contacto) se completan al primer intento en pruebas UX.
- **SC-005**: Errores ortograficos detectados en contenido actual se reducen a 0 en auditoria editorial final.
- **SC-006**: En pruebas de rendimiento orientadas a usuario movil, pagina principal mantiene experiencia estable sin saltos visuales notorios y respuesta interactiva fluida.

## Assumptions

- Audiencia principal llega desde dispositivos moviles y busca contacto inmediato con minima exploracion.
- Marca LOGUZ dispone de lineamientos visuales suficientes (logo y colores base) para derivar paleta final.
- Flujo de contacto principal por WhatsApp se mantiene vigente durante y despues de lanzamiento.
- Alcance de esta feature cubre todas paginas publicas actuales del repositorio, no solo home.
- Cualquier dependencia adicional usada para animacion o UX debe mantener compatibilidad con despliegue estatico.
