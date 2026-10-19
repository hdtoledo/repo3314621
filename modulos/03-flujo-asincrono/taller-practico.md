# 📝 Taller Práctico: Consumo de API REST con Async/Await y Renderizado Dinámico

> **Ficha:** 3314621 · ADSO  
> **Evidencia:** GA7-220501096-AA2-EV01  
> **Modalidad:** Taller Asistido en Sala de Sistemas

---

## 🎯 Caso de Negocio: Buscador de Personajes / Usuarios

El objetivo de este taller es construir un cliente asíncrono robusto en JavaScript Vanilla que consuma una API REST pública (JSONPlaceholder o PokeAPI / Rick & Morty API) y controle todos los estados de interfaz que luego manejaremos en **React**:

1. **Estado de Carga (`Loading / Spinner`):** Indicar al usuario que la petición está en curso.
2. **Estado de Éxito (`Data`):** Transformar los datos de forma inmutable y mostrarlos en el DOM.
3. **Estado de Error (`Error / Fallback`):** Si el servidor se cae, la red falla o el ID no existe, mostrar un mensaje amigable en vez de romper la aplicación.

---

## 📋 Requisitos Técnicos

### 1. Función `obtenerUsuariosSena()`
- Debe estar declarada con la palabra reservada `async`.
- Utilizar `await fetch('https://jsonplaceholder.typicode.com/users')`.
- Validar `if (!response.ok)` y arrojar un error descriptivo con el status HTTP.
- Convertir a JSON con `await response.json()`.
- Capturar cualquier fallo con bloque `try ... catch ... finally`.

### 2. Filtrado Dinámico Inmutable
- Crear una función `filtrarPorCiudad(usuarios, ciudad)` que retorne una nueva lista usando `.filter()` y desestructuración:
```javascript
const filtrarPorCiudad = (usuarios, ciudadBuscada) => 
  usuarios.filter(({ address: { city } }) => 
    city.toLowerCase().includes(ciudadBuscada.toLowerCase())
  );
```

### 3. Paginación / Límite de Resultados
- Utilizar parámetros URL query (ej: `?_limit=5`) y extraer solo los campos necesarios: `{ id, name, email, phone, website }`.

---

## 🏆 Criterios de Evaluación
- Manejo impecable de `async/await` sin bloquear la consola o el hilo de ejecución.
- Inclusión del bloque `try...catch...finally`.
- La interfaz o consola refleja claramente los 3 estados: Cargando ⏳ -> Datos listos ✅ (o Error ❌).
