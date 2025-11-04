# MotoPower — Superbikes de Alto Rendimiento

Este proyecto es una página web moderna y visualmente impactante dedicada a motos de alto cilindraje. Utiliza **HTML**, **CSS (TailwindCSS + estilos personalizados)** y **JavaScript** para ofrecer una experiencia dinámica, profesional y con modo oscuro.

---

## Estructura del Proyecto

```
 Proyecto MotoPower
├── index.html        → Estructura principal de la página
├── style.css         → Estilos personalizados (tema oscuro/claro, fuentes y diseño visual)
├── script.js         → Lógica de interacción (modo oscuro, formulario, etc.)
└── /img              → Carpeta para imágenes (fondo y motos)
```

---

## Secciones de la Página

### 1. **Navbar (Barra de navegación)**

* Fija en la parte superior de la pantalla.
* Enlaces de acceso rápido: Inicio, Catálogo, Ventajas y Contacto.
* Incluye botón de **modo oscuro/claro** (`🌙`).

### 2. **Hero / Portada (Sección Inicio)**

* Imagen de fondo a pantalla completa con efecto de superposición oscura.
* Texto principal:

  * **Título:** “Domina la carretera”.
  * **Descripción:** Mensaje que resalta potencia y tecnología.
  * **Botón de acción:** Lleva al catálogo de motos.

### 3. **Catálogo de Motos**

* Título atractivo y contenedor de tarjetas dinámicas (`div#listaMotos`).
* Las motos pueden cargarse desde JavaScript.
* Cada tarjeta incluye imagen, nombre y características básicas.

### 4. **Ventajas / Características**

* Tres bloques resaltando:

  *  Velocidad y precisión.
  *  Diseño futurista.
  *  Tecnología avanzada.
* Fondo oscuro con efecto hover.

### 5. **Formulario de Contacto**

* Inputs para nombre, correo y mensaje.
* Diseño limpio y alineado al estilo oscuro.
* Botón con efecto hover y validación básica.

### 6. **Footer**

* Pie de página con derechos de autor actualizados automáticamente con JavaScript (`<span id="year"></span>`).

---

## Estilos (style.css)

Este archivo contiene el diseño personalizado y complementa a TailwindCSS.

### **Características principales:**

* Tipografías personalizadas: **Montserrat & Oswald** desde Google Fonts.
* Variables CSS para colores y modo oscuro/claro.
* Bordes redondeados, sombras suaves y efectos hover.
* Estilo futurista con colores rojos, negros y detalles minimalistas.

### **Modo oscuro y claro**

* Se controla a través de una clase `.light-mode` en el `<body>`.
* Colores de fondo, texto y botones se alternan dinámicamente.

---

## Lógica (script.js)

Aquí se maneja la interacción del usuario.

### Funciones principales:

* **Modo oscuro/claro:** Cambia la clase del `body` al hacer clic en el botón.
* **Año automático en el footer:** Actualiza el año con JavaScript.
* **Generación dinámica del catálogo (si aplica):** Inserta las motos en el `div#listaMotos`.
* **Validación del formulario de contacto.**

---

## Tecnologías Usadas

| Tecnología   | Uso                                   |
| ------------ | ------------------------------------- |
| HTML5        | Estructura del sitio.                 |
| TailwindCSS  | Estilización rápida y responsive.     |
| CSS Custom   | Estilo único, modo oscuro, fuentes.   |
| JavaScript   | Interactividad y funciones dinámicas. |
| Google Fonts | Tipografías Montserrat y Oswald.      |

---

## ¿Qué hace esta página especial?

✔ Diseño oscuro tipo racing premium.
✔ Responsiva y adaptada para móviles.
✔ Fácil de expandir con más motos o secciones.
✔ Código organizado y limpio para futuras mejoras.
