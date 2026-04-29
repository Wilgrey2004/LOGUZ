# Contract: Public Page SEO and Semantics

## Scope

Aplica a todas paginas publicas HTML del sitio.

## Required Metadata Per Page

1. Un `title` unico.
2. Una `meta name="description"` unica.
3. Un `link rel="canonical"` absoluto.
4. Open Graph: `og:title`, `og:description`, `og:image`, `og:url`.
5. Twitter card metadata equivalente.
6. JSON-LD valido para `LocalBusiness`, `Organization` o `Service` segun pagina.

## Required Semantic Structure

1. Un solo `h1` por pagina.
2. Jerarquia `h2-h3` sin saltos arbitrarios para contenido principal.
3. Landmark roles/elementos: `header`, `nav`, `main`, `footer`.
4. Imagenes informativas con `alt` descriptivo.
5. Enlaces internos entre home, planes, contacto y acerca.

## Content Rules

1. Copys sin faltas ortograficas.
2. Tono serio, profesional y empatico.
3. Titulos y descripciones deben apoyar intencion de busqueda local y servicio funerario.

## Failure Conditions

- Metadata duplicada o ausente
- Dos `title` o multiples `h1`
- Canonical incorrecta
- Schema inconsistente con datos de contacto
- Enlaces internos rotos
