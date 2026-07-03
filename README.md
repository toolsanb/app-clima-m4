# App de Clima - Módulo 4: Lógica Dinámica

## Temática
Esta aplicación está enfocada en el monitoreo y estadísticas climáticas de diferentes zonas geográficas y de aventura (playas, senderos, valles y montañas).

## Modelado de Datos
Los datos fueron completamente desacoplados del archivo HTML y se gestionan de forma centralizada en un archivo JavaScript mediante un arreglo estructurado de objetos (`lugares`). Cada elemento posee datos identificadores únicos, estados inmediatos y una colección anidada para representar los siete días correspondientes a los pronósticos semanales.

## Estadísticas Integradas
El sistema realiza procesamiento dinámico usando algoritmos que automatizan los siguientes reportes en tiempo real:
1. Determinación de temperaturas máximas y mínimas de la semana.
2. Cálculo promediado ponderado de la temperatura con redondeo decimal.
3. Conteo absoluto de frecuencias según tipología del cielo (días soleados, lluviosos, etc.).
4. Evaluación condicional de strings de resumen basados en balances meteorológicos dominantes.
## Estilos Visuales
*Los estilos visuales se incluyeron directamente dentro del archivo index.html mediante etiquetas `<style>` para mantener la estructura limpia en un solo documento autónomo y asegurar el correcto renderizado de la interfaz.*
## Proyecto desarrollado para la entrega del Módulo
