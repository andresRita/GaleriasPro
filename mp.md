# Fundamentos de Fetch, Promesas, y XMLHttpRequest

## Fetch API
- Alternativa moderna a XMLHttpRequest
- Retorna una Promesa
- Métodos:
  - `.json()`: convierte respuesta a JSON
  - `.text()`: convierte a texto
  - `.blob()`: convierte a Blob
- Manejo de errores con `try/catch`

## Promesas en JavaScript
- Representa una operación asíncrona
- **Estados de una Promesa**
  - Pendiente: operación en progreso
  - Cumplida (fulfilled): éxito en la operación
  - Rechazada: error en la operación
- Métodos de manejo:
  - `.then()`: maneja éxito
  - `.catch()`: maneja errores
  - `.finally()`: se ejecuta siempre

## XMLHttpRequest (XHR)
- Tecnología anterior para solicitudes HTTP
- **readyState**
  - `0`: No inicializado
  - `1`: Conexión establecida
  - `2`: Solicitud recibida
  - `3`: Procesando solicitud
  - `4`: Completado
- **Uso actual**: Recomendación de usar `fetch`

## URL API
- Métodos para manipular URLs
  - Propiedades: `protocol`, `hostname`, `pathname`, `searchParams`
  - Métodos de `searchParams`
    - `.append()`
    - `.get()`
    - `.set()`
