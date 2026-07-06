# ⛅ ClimaApp - Monitoreo de Clima

Este proyecto corresponde a la entrega del **Módulo 4: Lógica y Estadísticas Semanales** del Bootcamp Academy. Consiste en una aplicación web interactiva que procesa, analiza y renderiza dinámicamente datos meteorológicos históricos de diversas ciudades de Chile mediante la manipulación avanzada del DOM y programación estructurada en JavaScript.

---

## 🛠️ Estructura del Proyecto

El desarrollo ha sido refactorizado modularmente para separar las responsabilidades de datos, interfaz y control, utilizando estilos dinámicos compilados con Sass:

- `index.html`: Estructura semántica base de la aplicación.
- `app.js`: Inicializador principal y control de eventos de navegación.
- `datos.js`: Modelo de datos (Arreglo de objetos) con los registros climáticos.
- `dom.js`: Módulo encargado exclusivamente de la renderización dinámica y manipulación del DOM.
- `scss/main.scss`: Archivo maestro de estilos desarrollado con preprocesadores SASS.

---

## 📊 Modelo y Estructura de Datos

Los datos climáticos de las ciudades (*Santiago, Valdivia, Iquique, Concepción y Punta Arenas*) están estructurados de forma estricta en JavaScript mediante un **Arreglo de Objetos** (`datos.js`). Cada ciudad contiene una colección con el historial de los últimos 7 días con las siguientes propiedades:

- `id`: Identificador numérico único de la zona.
- `nombre`: Nombre de la ciudad.
- `climaActual`: Temperatura y estado del día de hoy.
- `pronosticoSemanal`: Lista de objetos que registran la `temperatura` y el `estado` (Soleado, Lluvia, Nublado, etc.) de cada día de la semana.

---

## 📈 Lógica de Negocio y Estadísticas Calculadas

Al seleccionar una ciudad a través de la interfaz, el programa ejecuta algoritmos dinámicos basados en ciclos (`for`, `for...in`) y condicionales para calcular en tiempo real los siguientes indicadores exigidos:

1. **Máxima Absoluta:** Identifica la temperatura más alta registrada en la semana.
2. **Mínima Absoluta:** Identifica la temperatura más baja registrada en la semana.
3. **Promedio Diurno:** Calcula la media aritmética de las temperaturas semanales de la zona con redondeo decimal.
4. **Frecuencia del Estado:** Aplica un mapa de frecuencias para contabilizar de forma exacta cuántos días se repitió cada estado climático (ej. *Nublado: 4 día(s), Soleado: 3 día(s)*).

---

## 🚀 Tecnologías Utilizadas

- **JavaScript (ES6+):** Lógica, arreglos, objetos, algoritmos de cálculo y manipulación del DOM.
- **HTML5:** Estructura semántica estructurada.
- **SASS / CSS3:** Diseño visual modular, efectos hover dinámicos y maquetación adaptativa mediante flexbox.

---

## 🔗 Enlaces del Proyecto

- **Repositorio de GitHub:** [Inserta aquí la URL de tu repositorio de GitHub]
- **Despliegue Activo (GitHub Pages):** [Inserta aquí la URL de tu GitHub Pages si realizaste el deploy]
## 📊 Modelo y Estructura de Datos

Los datos climáticos de las ciudades (*Santiago, Valdivia, Iquique, Concepción y Punta Arenas*) están estructurados de forma estricta en JavaScript mediante un **Arreglo de Objetos** (`datos.js`). Cada ciudad contiene una colección con el historial de los últimos 7 días con las siguientes propiedades:

- `id`: Identificador numérico único de la zona.
- `nombre`: Nombre de la ciudad.
- `climaActual`: Temperatura y estado del día de hoy.
- `pronosticoSemanal`: Lista de objetos que registran la `temperatura` y el `estado` (Soleado, Lluvia, Nublado, etc.) de cada día de la semana.

---

## 📈 Lógica de Negocio y Estadísticas Calculadas

Al seleccionar una ciudad a través de la interfaz, el programa ejecuta algoritmos dinámicos basados en ciclos (`for`, `for...in`) y condicionales para calcular en tiempo real los siguientes indicadores exigidos:

1. **Máxima Absoluta:** Identifica la temperatura más alta registrada en la semana.
2. **Mínima Absoluta:** Identifica la temperatura más baja registrada en la semana.
3. **Promedio Diurno:** Calcula la media aritmética de las temperaturas semanales de la zona con redondeo decimal.
4. **Frecuencia del Estado:** Aplica un mapa de frecuencias para contabilizar de forma exacta cuántos días se repitió cada estado climático (ej. *Nublado: 4 día(s), Soleado: 3 día(s)*).

---

## 🚀 Tecnologías Utilizadas

- **JavaScript (ES6+):** Lógica, arreglos, objetos, algoritmos de cálculo y manipulación del DOM.
- **HTML5:** Estructura semántica estructurada.
- **SASS / CSS3:** Diseño visual modular, efectos hover dinámicos y maquetación adaptativa mediante flexbox.

---

## 🔗 Enlaces del Proyecto

- **Repositorio de GitHub:** [Inserta aquí la URL de tu repositorio de GitHub]
- **Despliegue Activo (GitHub Pages):** [Inserta aquí la URL de tu GitHub Pages si realizaste el deploy]

---
Desarrollado por **Sergio Nuñez / Toolsanb** - 2026.