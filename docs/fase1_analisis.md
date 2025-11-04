# Fase 1 – Análisis del proyecto **EcoHuerta**

## 1. Mapa de secciones  


| Sección         | Función principal                                                                 |
|-----------------|-----------------------------------------------------------------------------------|
| **Header**      | Barra superior de navegación: incluye logo, links de secciones, menú (posiblemente móvil) y garantiza que el usuario pueda desplazarse a diferentes partes del sitio. |
| **Hero**        | Área de bienvenida destacada: suele contener un título atractivo, subtítulo y quizá una llamada a la acción (CTA). Su objetivo es captar la atención del usuario al llegar al sitio. |
| **Grid de cultivos** | Muestra los diferentes tipos de cultivos disponibles o representados: funciona como vitrina visual para que el usuario vea lo que ofrece EcoHuerta. |
| **Seasons**     | Sección temática que quizás agrupa los cultivos por estación o momento del año: aporta contexto de “tiempo” o “temporada” al cuidado ambiental / huerta. |
| **Testimonials** | Sección de testimonios de usuarios, clientes o participantes: aporta credibilidad y refuerza el mensaje del sitio. |
| **CTA (Llamada a la acción)** | Sección que invita al usuario a tomar una acción concreta (ejemplo: “Únete”, “Suscríbete”, “Contáctanos”). Es clave para conversión. |
| **Contacto**    | Formulario de contacto o datos de comunicación: permite al visitante comunicarse con el equipo de EcoHuerta. |
| **Suscripción** | Zona para que el usuario deje su correo o se inscriba. |
| **Footer**      | Pie de página que suele contener información legal, enlaces secundarios, redes sociales, derechos de autor: da cierre al sitio. |

## 2. Inventario de tokens  


### Colores  
`--color-primary` / `--color-secondary` / `--color-accent` etc: variables que manejan la identidad visual. Por ejemplo, un verde predominante para “huerta” o agricultura, y quizá tonos complementarios para llamadas a la acción.  
- `--color-background` / `--color-surface` / `--color-hover` etc: utilizadas para fondo general, superficies de tarjetas, estados hover o enfoque. Ayudan a mantener coherencia visual en todo el sitio.  
- Versiones en modo oscuro: `--color-background-dark`, `--color-text-dark` etc. Permiten cambiar el esquema de color cuando se activa el modo oscuro.

### Fuentes 
- `--font-sans`, `--font-serif`, `--font-mono`: define la familia de fuentes principal, secundaria o para código.  
- Tamaños tipográficos: `--text-base`, `--text-lg`, `--text-xl`, etc. Aseguran escala y jerarquía tipográfica consistente.

### Breakpoints (Puntos de ruptura)  
- `--breakpoint-sm`, `--breakpoint-md`, `--breakpoint-lg`, `--breakpoint-xl`: definen cuándo cambia el diseño responsivo. Permiten adaptar la UI a móviles, tablets y escritorio, manteniendo legibilidad y funcionalidad.  
- Este sistema de tokens facilita reutilización: en lugar de repetir valores “640px”, “768px”, etc., se usan variables semánticas.

**Propósito visual**:  
- Los tokens definen la “paleta de diseño” de manera centralizada: cambio rápido de identidad visual, modo oscuro sencillo, consistencia en espaciado, tipografía y adaptabilidad responsiva.  

## 3. Utilidades por sección  


### 3.1 Hero  
- `py-16 md:py-24`: espaciado vertical amplio que da protagonismo a la sección.  
- `text-4xl md:text-6xl font-bold`: tipografía grande para capturar atención; la versión md mejora en pantallas mayores.  
- `text-primary` o `text-accent`: aplican los tokens de color para alinearse con la identidad visual.  
- `bg-background`, `dark:bg-background-dark`: fondo que cambia con el modo oscuro, asegurando buen contraste.  
**Contribuye a**: legibilidad al tener un título grande, consistencia al usar los tokens, accesibilidad al tener espaciado amplio y estilo claro.

### 3.2 Grid de cultivos  
- `grid grid-cols-1 sm:grid-cols-2 lg:grid‐cols-3 gap-8`: define estructura responsiva; en móviles 1 columna, luego 2 y 3 columnas en escritorio.  
- `hover:shadow-lg focus:shadow-outline`: estados de interacción que mejoran experiencia de usuario (hover y foco).  
- `rounded-lg overflow-hidden`: estiliza las tarjetas de cultivos, hace bordes suaves y asegura que el contenido no desborde.  
**Contribuye a**: consistencia visual entre tarjetas, accesibilidad al tener estado de foco visible, legibilidad al mantener estructura ordenada.

### 3.3 Contacto / Suscripción  
- `max-w-2xl mx-auto px-4 sm:px-6 lg:px-8`: centra el formulario y lo limita para que no sea demasiado ancho, mejorando lectura.  
- `space-y-6`: espaciado vertical entre campos del formulario, facilitando navegación.  
- `focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`: buen estilo de foco para accesibilidad .  
- `dark:text-text-dark`, `dark:bg-surface-dark`: configuración para modo oscuro.  
**Contribuye a**: accesibilidad, consistencia en formulario, legibilidad al mantener campos bien separados.

## 4. Dark mode  
El modo oscuro se implementa mediante la estrategia por clase (`.dark`) en el HTML o en el contenedor principal, en lugar de depender del modo automático del sistema. Esto permite:  
- Control explícito del momento en que se activa modo oscuro (por ejemplo, con un toggle de usuario).  
- Consistencia uniforme, independientemente de la configuración del sistema operativo.  
- Evitar sorpresas de diseño cuando el usuario cambia el modo del sistema y el sitio no ajusta bien.

Visualmente, el modo oscuro produce efectos como: fondo más oscuro, texto claro, menor fatiga visual en entornos de poca luz, enfoque en contenido. En este proyecto, los tokens oscuros (`--color-background-dark`, `--color-text-dark`, etc) permiten cambiar rápidamente el esquema de colores.

Ventajas de usar la estrategia por clase frente al modo automático:  
- Permite al usuario cambiar manualmente   
- Evita que los estilos no preparados para modo oscuro se activen por error  
- Facilita la prueba de modos claro/oscuro sin depender de la configuración del sistema

## 5. Componentes reutilizables  
- **Botones**: clase `.btn-primary`, `.btn-secondary` definidas con padding, tipografía, color de fondo, states hover/focus. Se aplican en CTA del hero, en formularios de suscripción, en enlaces de navegación. Esto favorece la coherencia visual (todos los botones similares) y la mantenibilidad (si cambia el estilo, solo se actualiza una vez).

- **Tarjetas**: clase `.card` para contenedores de cultivos/testimonios; incluye sombras, bordes, espaciado interno, bordes redondeados. Aparecen en la sección “Grid de cultivos” y “Testimonials”. Esto mejora la consistencia de diseño de elementos similares.

- **Inputs / Formularios**: clase `.input-field` que define estilo base de campos, borde, padding, focus ring. Se aplica en la sección de contacto y suscripción. Esto ayuda a que todos los campos del sitio compartan apariencia y comportamiento.

## 6. Accesibilidad visual  

- Contraste: Los textos sobre fondos claros/oscuros parecen cumplir el requisito básico de legibilidad (texto oscuro sobre fondo claro, texto claro sobre fondo oscuro).  
- Jerarquía tipográfica: El uso de tamaños grandes en hero, subtítulos, cuerpo de texto y listados parece claro  facilita la lectura y organización visual.
  
- Uso de etiquetas y atributos: Se espera que los botones, inputs tengan etiquetas `aria` o `label` apropiados.

### Mejora sugerida  
  
- Añadir fuentes Bacanas para secciones dinámicas (por ejemplo: “Gracias por suscribirse” en el formulario) para mejorar experiencia en lectores de pantalla.  

## 7. Propuesta de mejora conceptual  
### Sección: **Recursos / Blog EcoHuerta**  
**idea 1**: ampliar el sitio proporcionando contenido educativo sobre cultivos, prácticas sostenibles, y creando mayor engagement con jóvenes interesados en el tema.  
**idea 2**: artículos breves (300-500 palabras) sobre “Cómo preparar tu huerta en casa”, “Cultivos fáciles para principiantes”, “Impacto ambiental de la agricultura urbana”. Cada artículo con imagen, título, fecha y enlace al contenido completo.  
**idea 3**: 
- Nueva sección entre “Testimonios” , con título “Recursos para tu huerta”  
