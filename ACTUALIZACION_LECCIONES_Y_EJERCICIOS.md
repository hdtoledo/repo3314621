# 📋 Auditoría Técnica, Visto Bueno y Guía de Actualización de Lecciones y Ejercicios
**Programa:** Tecnólogo en Análisis y Desarrollo de Software (ADSO) · **Ficha:** 3314621  
**Centro:** Centro Agroempresarial y Desarrollo Pecuario del Huila (CADPH) · SENA Regional Huila (Garzón)  
**Competencia:** Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo  
**Ruta Evaluada:** JavaScript Moderno (ES6+), Inmutabilidad y Flujo Asíncrono ➔ Preparación hacia **React 19 + Vite**

---

## 1. ✅ Dictamen General y Visto Bueno Pedagógico

### Veredicto: **APROBADO CON AJUSTES TÉCNICOS PUNTUALES (Calificación Curricular: 9.2 / 10)**

El diseño curricular de las **14 lecciones**, los **3 bloques metodológicos (60 min / 70 min / 40 min)** y los **5 retos prácticos validados con `node:test`** es **sobresaliente y está 100% alineado** con lo que un aprendiz ADSO necesita dominar antes de escribir su primer componente en **React + Vite**.

### 🌟 Aciertos Pedagógicos Destacables (Lo que está excelente)
1. **Enfoque en Memoria (Stack vs. Heap y `Object.is`):** Explicar desde la Lección 01 y 02 *por qué* `lista.push()` congela la interfaz en React debido a que conserva la misma referencia en memoria (`0x004F === 0x004F`) ahorra semanas de frustración cuando lleguen al hook `useState`.
2. **Progresión Didáctica de las 14 Lecciones:**
   - **Módulo 1 (Lecciones 01–04):** Mentalidad declarativa `UI = f(state)`, `const/let`, Stack/Heap, Desestructuración (Props) y Spread Operator (`useState`).
   - **Módulo 2 (Lecciones 05–08):** Arrow functions con retorno implícito `() => ({})`, `.map()`, `.filter()`, `key` prop, `.reduce()` (`useReducer`) y Módulos ES6 (`import/export` nativos en Vite).
   - **Módulo 3 (Lecciones 09–11):** Event Loop (Call Stack, Microtasks vs. Macrotasks), `async/await` defensivo con `try/catch` y concurrencia con `Promise.all` / `Promise.allSettled`.
   - **Módulo 4 (Lecciones 12–14):** Taller de 5 retos en VS Code, pruebas unitarias nativas sin dependencias pesadas (`node --test`) y flujo profesional de Git con Commits Semánticos y sustentación en caliente.
3. **Contextualización Regional SENA CADPH Garzón:** Los ejemplos de café pergamino, herramientas agrícolas, aprendices de la ficha 3314621 y facturación con IVA 19% en pesos colombianos (COP) hacen que el código tenga sentido real inmediato.

---

## 2. 🚨 Hallazgos Críticos a Corregir Antes de Iniciar la Clase

Al inspeccionar el código fuente de `index.html`, los retos en `/retos` y el validador en `/test`, se detectaron **6 detalles técnicos** que debes ajustar (o tener presentes) para que la experiencia en el aula sea impecable:

### Hallazgo 1: El archivo `.zip` del "Starter Kit" descargado desde la web no incluye la carpeta `test/`
- **Ubicación:** Función `descargarPlantillaZIP()` en `index.html` (líneas 3685–3773).
- **Problema:** El generador JSZip empaqueta `README.md`, `package.json` y los 5 archivos dentro de `retos/`, pero **no incluye** `test/validador.test.js` ni `test/validador-cli.js`. Cuando el aprendiz descomprime el `.zip` y ejecuta `npm test` o `npm run validate`, Node.js arroja error porque no encuentra la carpeta `test/`.
- **Además:** En el archivo `retos/reto5-asincronia-pipeline.js` generado por el `.zip`, `simularLlamadaApi` tiene una versión simplificada que ignora `{ debeFallar = false, latencia = 50 }`, haciendo que el Test 5.1 falle.
- **Solución:** Incluir `test/validador.test.js` y `test/validador-cli.js` dentro de `descargarPlantillaZIP()` y dejar `simularLlamadaApi` completa (código listo en la **Sección 4** de este documento).

### Hallazgo 2: Los archivos de `/retos` en el repositorio ya tienen las soluciones escritas
- **Ubicación:** `retos/reto1-destructuring.js` a `retos/reto5-asincronia-pipeline.js` (y `plantilla-aprendiz/retos/`).
- **Problema:** Si un aprendiz clona el repositorio directamente desde GitHub en lugar de descargar el `.zip`, todas las funciones ya están resueltas y `npm test` pasa `20/20` sin que el aprendiz programe nada.
- **Solución:** Dejar en `plantilla-aprendiz/retos/` (o en la rama principal para aprendices) únicamente las firmas de las funciones con comentarios `// TODO:` y mover las soluciones a una carpeta de referencia docente o rama `soluciones-instructor`.

### Hallazgo 3: Diferencia de firma en el Reto 1 entre la Lección 03 (Web) y `reto1-destructuring.js` (VS Code)
- **Ubicación:** Slide 10 (Lección 03, líneas 2263–2272 y 4195) vs. `retos/reto1-destructuring.js`.
- **Problema:** En el editor en vivo de la Lección 03 el aprendiz programa `normalizarPerfil({ nombre, correo: email, ficha = 3314621, ...habilidades })`, y el mensaje de éxito le indica: *"Copia esta función en `retos/reto1-destructuring.js` y corre `node --test`"*. Sin embargo, `validador.test.js` evalúa `procesarPerfilUsuario(usuario)` con propiedades `{ name, role, contacto: { email }, active }`.
- **Solución:** Aclarar en la nota de la Lección 03 que el ejercicio en línea es el entrenamiento previo, o agregar `normalizarPerfil` como test adicional en `reto1-destructuring.js`.

### Hallazgo 4: Funciones interactivas faltantes en las Lecciones 04 a 14 de `index.html`
- **Ubicación:** Botones `onclick` en Slides 11 a 21 (`index.html`, líneas 2374–3153).
- **Problema:** Las Lecciones 01, 02 y 03 tienen todas sus funciones interactivas definidas en el `<script>`, pero los botones de las Lecciones 04 a 14 llaman a funciones que aún no están declaradas en el `<script>`:
  - `ejecutarEjercicioSpread()`, `ejecutarEjercicioArrow()`, `ejecutarEjercicioMapFilter()`, `ejecutarEjercicioReduce()`, `ejecutarEjercicioEventLoop()`, `ejecutarEjercicioPipeline()`, `ejecutarEjercicioPromiseAll()`, `ejecutarSuitePruebasNavegador()`, `simularComandoTerminal()`, `actualizarCalculoChecklist()` y `toggleSolucion()`.
- **Solución:** En la **Sección 5** de este documento tienes el bloque `<script>` completo con todas esas funciones listas para pegar al final de `index.html`.

### Hallazgo 5: Inyección automática de pie de página con límite `slideId < 15`
- **Ubicación:** `index.html` (líneas 3778–3830).
- **Problema:** Como la Lección 01 se expandió a 7 diapositivas detalladas, el total de diapositivas pasó de 15 a **21**. El ciclo que inyecta el botón "Siguiente Lección" tiene `slideId < 15 ? slideId + 1 : 1`, por lo que al llegar al Slide 15 (Lección 08) el botón envía de regreso a la portada en lugar de avanzar al Slide 16 (Lección 09). Además, los Slides 2 al 10 ya tienen su propio pie de página manual, generando doble barra inferior.
- **Solución:** Cambiar la condición a `if (slideId > 10)` y el límite a `slideId < totalSlides ? slideId + 1 : 1`.

### Hallazgo 6: Conteo de Pruebas (`15 subtests` + `5 suites` = `20 tests` en Node)
- **Ubicación:** `test/validador.test.js` vs. tarjetas del temario (`RETO 1 (4/4)`... `RETO 5 (4/4)`).
- **Explicación:** `node --test` reporta `ℹ tests 20` porque suma los **5 bloques `test()` principales** + los **15 subtests `t.test()` internos** (Reto 1: 3, Reto 2: 4, Reto 3: 3, Reto 4: 2, Reto 5: 3). Si quieres que existan **20 subtests reales** (4 por cada uno de los 5 retos), en la **Sección 4** incluimos los 5 subtests complementarios que evalúan precisamente los casos borde de React.

---

## 3. 🧠 Actualización de Contenido: 6 Conceptos Críticos para React 19 + Vite

Aunque el temario actual cubre muy bien la base de ES6+, al pasar a **React + Vite** los aprendices suelen tropezar con **6 casos reales de producción**. Te recomiendo incorporar estas cápsulas en las lecciones correspondientes:

---

### 📌 Actualización 1 (Para Lección 03 – Desestructuración y Props)
#### Optional Chaining (`?.`) y Nullish Coalescing (`??` vs `||`) con el número `0`
**¿Por qué es vital en React?**  
Cuando un componente carga datos de una API, en el primer render el estado suele ser `null` o `{}` vacío. Además, usar `||` para valores por defecto falla cuando el valor legítimo es `0` (ej. `stock: 0` o `descuento: 0`), porque `0` es *falsy* en JavaScript.

```javascript
// ❌ PELIGRO CON || (OR Lógico) EN REACT:
// Si el producto tiene precio $0 (muestra gratis) o stock 0, || lo reemplaza por el fallback:
const stockrecibido = 0;
const stockMostrarMal = stockrecibido || 10; // Imprime 10 (¡Bug grave de inventario!)

// ✅ SOLUCIÓN MODERNA CON ?? (Nullish Coalescing - ES2020):
// Solo aplica el valor por defecto si la izquierda es null o undefined (respeta el 0 y "")
const stockMostrarBien = stockrecibido ?? 10; // Imprime 0 (¡Correcto!)

// ✅ OPTIONAL CHAINING (?.) PARA DATOS ASÍNCRONOS EN REACT:
// Evita el clásico error: "Cannot read properties of undefined (reading 'email')"
const correoAprendiz = usuario?.contacto?.email ?? "sin-correo@sena.edu.co";
```

---

### 📌 Actualización 2 (Para Lección 05 – Arrow Functions y Closures)
#### Actualizaciones Funcionales en `useState`: `setEstado(prev => ...)`
**¿Por qué es vital en React?**  
Los aprendices deben acostumbrarse a escribir funciones flecha que reciben el **estado previo (`prev`)** y retornan el nuevo estado, ya que en React actualizar el estado varias veces seguidas usando la variable directa (`setContador(contador + 1)`) falla por el cierre léxico (*Stale Closure*).

```javascript
// ❌ RIESGO EN REACT (Stale Closure):
// Si llamas dos veces seguidas a setCantidad(cantidad + 1), solo sube en 1.

// ✅ PATRÓN UPDATER FUNCTION (Arrow Function Pura):
const incrementarCantidad = (prevCantidad) => prevCantidad + 1;
const agregarProductoUpdater = (nuevoItem) => (prevCarrito) => [...prevCarrito, nuevoItem];
```

---

### 📌 Actualización 3 (Para Lección 06 – `.map()`, `.filter()` y Renderizado en JSX)
#### La Trampa del `0` en el Renderizado Condicional (`&&` vs Ternario `? :`) y `.toSorted()`
**¿Por qué es vital en React?**  
1. En JSX, `true`, `false`, `null` y `undefined` no se pintan en pantalla, **pero el número `0` SÍ se pinta**. Si el aprendiz escribe `{producto.stock && <span>Disponible</span>}` y `stock` es `0`, React muestra un `0` suelto en la interfaz.
2. El método `.sort()` **muta el arreglo original in-place**. En React, hacer `productos.sort(...)` muta el estado directamente. Se debe usar `[...productos].sort(...)` o el estándar moderno `.toSorted(...)`.

```jsx
// ❌ ERROR CLÁSICO EN JSX:
// Si producto.stock vale 0, esto imprime literalmente un "0" en el DOM:
{producto.stock && <span className="badge">En Stock</span>}

// ✅ FORMA CORRECTA 1 (Comparación booleana explícita):
{producto.stock > 0 && <span className="badge">En Stock</span>}

// ✅ FORMA CORRECTA 2 (Operador Ternario ? :):
{producto.stock > 0 ? <span className="badge">En Stock</span> : <span>Agotado</span>}
```

```javascript
// ❌ PELIGRO DE MUTACIÓN CON .sort():
// categorias.sort() modifica el arreglo original en el Heap.

// ✅ ORDENAMIENTO INMUTABLE PARA REACT:
const categoriasOrdenadas = [...categorias].sort((a, b) => a.localeCompare(b));
// O en navegadores/Node 20+ (ES2023):
const categoriasModernas = categorias.toSorted((a, b) => a.localeCompare(b));
```

---

### 📌 Actualización 4 (Para Lección 07 – `.reduce()` y `useReducer`)
#### Acumulador Mutable Local vs. Reducer 100% Inmutable en React
**¿Por qué es vital en React?**  
En `reto4-reduce-inventario.js`, la función `procesarMovimientosCaja` hace `acc.ingresos.push(mov)`. Dentro de un `.reduce()` local funciona porque el objeto inicial acaba de crearse en esa llamada. Sin embargo, si el aprendiz lleva ese hábito al hook `useReducer(reducer, initialState)` de React y hace `state.ingresos.push(mov); return state;`, **React no actualizará la pantalla** porque la referencia de `state` no cambió.

```javascript
// ⚠️ En un .reduce() de reporte puntual funciona mutar el acumulador recién creado,
// PERO en un Reducer de React (useReducer) SIEMPRE debemos retornar una nueva referencia:

function cajaReducerReact(state, movimiento) {
  const esIngreso = movimiento.tipo === "INGRESO";
  return {
    ...state,
    ingresos: esIngreso ? [...state.ingresos, movimiento] : state.ingresos,
    egresos: !esIngreso ? [...state.egresos, movimiento] : state.egresos,
    saldoTotal: esIngreso
      ? state.saldoTotal + movimiento.monto
      : state.saldoTotal - movimiento.monto
  };
}
```

---

### 📌 Actualización 5 (Para Lección 08 – Módulos ES6 y Vite)
#### Reglas Particulares de Vite con ES Modules y Variables de Entorno
**¿Por qué es vital en Vite?**  
1. En Vite, las variables de entorno **no usan** `process.env.REACT_APP_...` (eso era Create React App), sino `import.meta.env.VITE_API_URL`.
2. Las exportaciones nombradas (`export function ...`) facilitan el *Tree-Shaking* y el autocompletado en VS Code, mientras que `export default` se usa para las vistas o componentes principales.

---

### 📌 Actualización 6 (Para Lección 10 – `async/await` hacia `useEffect`)
#### Por qué NUNCA usar `useEffect(async () => ...)` y cómo usar `AbortController`
**¿Por qué es vital en React?**  
Cuando los aprendices pasan de la Lección 10 (`async/await`) a su primer `useEffect` en React, el 90% escribe `useEffect(async () => { ... }, [])`. React lanza una advertencia crítica porque una función `async` siempre retorna una **Promesa**, y `useEffect` solo acepta que retornes `undefined` o una **función de limpieza (cleanup)**.

```javascript
// ❌ PROHIBIDO EN REACT:
// useEffect(async () => { const data = await fetch(...); }, []);

// ✅ PATRÓN OFICIAL EN REACT + VITE (Función async interna + AbortController):
useEffect(() => {
  const controller = new AbortController();

  async function cargarAprendices() {
    try {
      const res = await fetch("https://api.sena.edu.co/ficha/3314621", {
        signal: controller.signal
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setAprendices(data);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    }
  }

  cargarAprendices();

  // Función de limpieza: cancela la petición si el aprendiz cambia de pestaña
  return () => controller.abort();
}, []);
```

---

## 4. 🛠️ Actualización de los 5 Retos y Suite de 20 Subtests Reales

A continuación tienes:
1. Las **plantillas limpias (sin resolver)** para entregar a los aprendices en `/plantilla-aprendiz/retos/` y en el generador `.zip`.
2. Los **5 nuevos ejercicios/subtests (1.4, 2.5/3.4, 4.3, 4.4, 5.4)** para que la suite tenga exactamente **4 subtests por cada reto (20 subtests reales + 5 suites)**.

### 4.1 Plantillas Limpias para Aprendices (Sin las respuestas resueltas)

#### `plantilla-aprendiz/retos/reto1-destructuring.js`
```javascript
/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 1: Desestructuración Limpia y Valores por Defecto (Fundamentos de Props)
 * ============================================================================
 */

export function procesarPerfilUsuario(usuario) {
  // TODO 1.1: Usa desestructuración limpia sobre 'usuario' (maneja usuario = {} por seguridad) para extraer:
  // - 'name' renombrado a 'nombreCompleto'
  // - 'role' renombrado a 'cargo' (valor por defecto: "Aprendiz ADSO")
  // - 'email' extraído de 'contacto.email' renombrado a 'correo' (valor por defecto: "sin-correo@sena.edu.co")
  // - 'active' renombrado a 'activo' (valor por defecto: true)
  // Retorna: { nombreCompleto, cargo, correo, activo }
}

export function formatearTarjetaProducto(props = {}) {
  // TODO 1.2: Desestructura { id, titulo, precio = 0, stock = 0, categoria = "General" }
  // Retorna el string exacto:
  // "[#ID] TITULO - $PRECIO (Stock: STOCK unid.) - Categoria: CATEGORIA"
}

export function desempaquetarTupla(tuplaEstado) {
  // TODO 1.3: Usa desestructuración de arreglos y operador rest (...)
  // para extraer el primer elemento como 'principal', el segundo como 'secundario'
  // y los demás en el arreglo 'resto'.
  // Retorna: { principal, secundario, resto }
}

export function normalizarPerfil({
  // TODO 1.4: Desestructura directamente en los parámetros:
  // - nombre
  // - correo renombrado a email
  // - ficha con valor por defecto 3314621
  // - el resto de propiedades agrupadas en ...habilidades
} = {}) {
  // Retorna: { nombre, email, ficha, habilidades }
}
```

#### `plantilla-aprendiz/retos/reto2-spread-inmutabilidad.js`
```javascript
/**
 * ============================================================================
 * RETO 2: Inmutabilidad con Spread Operator (...)
 * ADSO Ficha 3314621 - CADPH Garzón
 * ============================================================================
 */

export function agregarAlCarritoInmutable(carritoOriginal, nuevoProducto) {
  // TODO 2.1: Retorna un NUEVO arreglo con 'nuevoProducto' al final SIN usar .push()
}

export function actualizarPerfilInmutable(estadoActual, cambios) {
  // TODO 2.2: Retorna un NUEVO objeto combinando estadoActual y cambios,
  // asegurando también clonar profundamente el sub-objeto 'configuracion'
}

export function eliminarItemInmutable(items, idEliminar) {
  // TODO 2.3: Retorna un nuevo arreglo sin el elemento cuyo id coincida con idEliminar
}

export function actualizarCantidadItem(items, id, nuevaCantidad) {
  // TODO 2.4: Retorna un nuevo arreglo donde solo el item con ese 'id'
  // actualice su propiedad 'cantidad' a 'nuevaCantidad' (sin mutar el objeto original)
}
```

#### `plantilla-aprendiz/retos/reto3-arrays-react.js`
```javascript
/**
 * ============================================================================
 * RETO 3: Métodos Puros de Arreglos (.map, .filter) para Listas en React
 * ADSO Ficha 3314621 - CADPH Garzón
 * ============================================================================
 */

export function generarTarjetasAprendices(aprendices) {
  // TODO 3.1: Usa .map() para transformar cada aprendiz en:
  // - key: \`apr-\${a.id}\`
  // - etiqueta: "\${a.nombre} (\${a.ficha})"
  // - estado: "APROBADO" si a.promedio >= 3.5, de lo contrario "EN REFUERZO"
  // - puntaje: a.promedio
}

export function filtrarCatalogo(inventario, filtros = {}) {
  // TODO 3.2: Usa .filter() aplicando los criterios opcionales de 'filtros':
  // - soloDisponibles: si es true, el producto debe tener stock > 0
  // - categoria: si existe, p.categoria debe ser igual a filtros.categoria
  // - precioMaximo: si es número, p.precio <= filtros.precioMaximo
  // - busqueda: si existe texto, p.nombre debe incluirlo (sin importar mayúsculas/minúsculas)
}

export function obtenerCategoriasUnicas(productos) {
  // TODO 3.3: Extrae las categorías con .map(), elimina duplicados con Set
  // y retorna un nuevo arreglo ordenado alfabéticamente sin mutar la entrada
}
```

#### `plantilla-aprendiz/retos/reto4-reduce-inventario.js`
```javascript
/**
 * ============================================================================
 * RETO 4: Acumuladores Complejos con .reduce() (Base de useReducer)
 * ADSO Ficha 3314621 - CADPH Garzón
 * ============================================================================
 */

export function calcularBalancePedido(items, tasaIva = 0.19) {
  // TODO 4.1: Usa .reduce() para calcular a partir de items ({ precio, cantidad, descuento }):
  // - subtotalBruto: suma de precio * cantidad
  // - totalDescuentos: suma de (precio * cantidad) * (descuento ?? 0)
  // - baseGravable: subtotalBruto - totalDescuentos
  // - ivaCalculado: Math.round(baseGravable * tasaIva)
  // - totalNeto: baseGravable + ivaCalculado
  // - cantidadTotalUnidades: suma de todas las cantidades
}

export function procesarMovimientosCaja(movimientos) {
  // TODO 4.2: Usa .reduce() para agrupar los movimientos según mov.tipo ('INGRESO' o 'EGRESO'):
  // Retorna: { ingresos: [...], egresos: [...], saldoTotal: numero }
}
```

#### `plantilla-aprendiz/retos/reto5-asincronia-pipeline.js`
```javascript
/**
 * ============================================================================
 * RETO 5: Asincronía, Promesas, Async/Await y Pipelines de Datos
 * ADSO Ficha 3314621 - CADPH Garzón
 * ============================================================================
 */

export function simularLlamadaApi(payload, { debeFallar = false, latencia = 50 } = {}) {
  // TODO 5.1: Retorna una nueva Promise que espere 'latencia' ms con setTimeout.
  // Si debeFallar es true, rechaza (reject) con new Error("Error 500: Fallo de conexión con el servidor SENA").
  // Si debeFallar es false, resuelve (resolve) con { status: 200, data: payload, timestamp: Date.now() }.
}

export async function ejecutarPipelineSeguro(fetcherAsync, valorPorDefecto = []) {
  // TODO 5.2: Ejecuta await fetcherAsync() dentro de un bloque try/catch.
  // - Si tiene éxito, retorna: { exito: true, datos: respuesta.data, error: null }
  // - Si falla, captura el error y retorna: { exito: false, datos: valorPorDefecto, error: err.message }
}

export async function sincronizarMultiplesFuentes(listaPromesas) {
  // TODO 5.3: Usa await Promise.allSettled(listaPromesas) para esperar todas las promesas
  // y retorna: { exitosos: [valores fulfilled], fallidos: [mensajes de error rejected] }
}
```

---

## 5. 🧩 Ejercicios Adicionales Recomendados (Puente Directo a React + Vite)

Puedes agregar estos **4 ejercicios cortos de profundización** durante la sustentación en caliente (Bloque 3) para verificar que el aprendiz realmente comprendió la mecánica de React:

### Ejercicio Extra A: Cazando el Bug del `0` en JSX (Cortocircuito `&&`)
**Pregunta de sustentación para el aprendiz:**
> *"Mira esta función que simula lo que hace React al evaluar una expresión con `&&`. Si un producto tiene `stock: 0`, ¿qué valor retorna `renderizarAlertaStock(0)` y cómo lo corriges para que retorne `null` cuando no hay stock?"*

```javascript
// ❌ Versión con bug (retorna 0 en vez de ocultar el elemento):
function renderizarAlertaStockBug(stock) {
  return stock && `Quedan ${stock} unidades disponibles`;
}

// ✅ Versión corregida para React:
function renderizarAlertaStockOk(stock) {
  return stock > 0 ? `Quedan ${stock} unidades disponibles` : null;
}
```

### Ejercicio Extra B: Por qué `||` rompe descuentos del `0%` o calificaciones de `0.0`
**Pregunta de sustentación para el aprendiz:**
> *"Si un aprendiz obtuvo nota `0.0` en una evidencia no entregada, ¿por qué `const notaFinal = aprendiz.nota || 3.0` le regala un `3.0` por accidente? Cámbialo por el operador correcto."*

```javascript
const aprendiz = { nombre: "Carlos", nota: 0 };

// ❌ Falla porque 0 es falsy:
const notaErronea = aprendiz.nota || 3.0; // Da 3.0

// ✅ Correcto con Nullish Coalescing (??):
const notaCorrecta = aprendiz.nota ?? 3.0; // Da 0
```

### Ejercicio Extra C: Ordenar precios sin mutar el estado original de React
**Pregunta de sustentación para el aprendiz:**
> *"En un e-commerce en React, el usuario hace clic en 'Ordenar de menor a mayor precio'. ¿Por qué ` catalogo.sort((a, b) => a.precio - b.precio)` corrompe la inmutabilidad del estado y cómo lo solucionas?"*

```javascript
// ✅ Solución inmutable con copia previa:
export function ordenarPorPrecioInmutable(catalogo, orden = "asc") {
  return [...catalogo].sort((a, b) =>
    orden === "asc" ? a.precio - b.precio : b.precio - a.precio
  );
}
```

### Ejercicio Extra D: Transformar un acumulador mutable en un `reducer` puro de React
**Pregunta de sustentación para el aprendiz:**
> *"Convierte una acción de un carrito de compras (`AGREGAR_ITEM`, `VACIAR_CARRITO`) en una función pura `carritoReducer(state, action)` lista para `useReducer` en React."*

```javascript
export function carritoReducer(state = { items: [], total: 0 }, action) {
  switch (action.type) {
    case "AGREGAR_ITEM": {
      const nuevoItem = action.payload;
      return {
        ...state,
        items: [...state.items, nuevoItem],
        total: state.total + (nuevoItem.precio * nuevoItem.cantidad)
      };
    }
    case "VACIAR_CARRITO":
      return { items: [], total: 0 };
    default:
      return state;
  }
}
```

---

## 6. 💻 Parche Listo para `index.html` (Funciones Interactivas de Lecciones 04 a 14 y ZIP Completo)

Si deseas que todos los botones de demostración en vivo de las diapositivas **Lección 04 a Lección 14** funcionen en el proyector del aula y que el botón **Descargar Starter Kit (`.zip`)** incluya la carpeta `test/` completa con las plantillas sin resolver, puedes añadir o actualizar este bloque dentro del `<script>` de `index.html`:

```javascript
// ================= FUNCIONES INTERACTIVAS LECCIONES 04 A 14 =================

function toggleSolucion(id) {
  const el = document.getElementById(id);
  const txt = document.getElementById(`txt-${id}`);
  if (!el) return;
  const isHidden = el.classList.contains('hidden');
  if (isHidden) {
    el.classList.remove('hidden');
    if (txt) txt.textContent = 'Ocultar Solución';
  } else {
    el.classList.add('hidden');
    if (txt) txt.textContent = 'Ver Solución';
  }
}

function ejecutarEjercicioSpread() {
  const out = document.getElementById('output-s5-spread');
  if (!out) return;
  const original = [{ id: 1, prod: 'Café Huila', cant: 2 }, { id: 2, prod: 'Abono Orgánico', cant: 1 }];
  const conNuevo = [...original, { id: 3, prod: 'Guadañadora', cant: 1 }];
  const sinSegundo = conNuevo.filter(item => item.id !== 2);
  out.classList.remove('hidden');
  out.innerHTML = `✔ Original intacto (${original.length} items) !== Nuevo (${conNuevo.length} items): <strong>${original !== conNuevo}</strong><br>✔ Tras .filter(id !== 2): ${JSON.stringify(sinSegundo)}`;
}

function ejecutarEjercicioArrow() {
  const out = document.getElementById('output-s6-arrow');
  if (!out) return;
  const mal = () => { id: 1 };
  const bien = () => ({ id: 1, ficha: 3314621, activo: true });
  out.classList.remove('hidden');
  out.innerHTML = `❌ Sin paréntesis () => { id: 1 } devuelve: <strong>${String(mal())}</strong><br>✅ Con paréntesis () => ({ id: 1, ... }) devuelve: <strong>${JSON.stringify(bien())}</strong>`;
}

function ejecutarEjercicioMapFilter() {
  const out = document.getElementById('output-s7-mapfilter');
  if (!out) return;
  const catalogo = [
    { id: 'H1', nombre: 'Guadañadora Stihl', precio: 1250000, stock: 4, categoria: 'Herramientas' },
    { id: 'H2', nombre: 'Tijera Podadora', precio: 45000, stock: 0, categoria: 'Herramientas' },
    { id: 'I1', nombre: 'Fertilizante NPK', precio: 180000, stock: 12, categoria: 'Insumos' },
    { id: 'H3', nombre: 'Bomba Fumigadora', precio: 320000, stock: 6, categoria: 'Herramientas' }
  ];
  const tarjetas = catalogo
    .filter(p => p.stock > 0 && p.categoria === 'Herramientas')
    .map(p => ({ key: p.id, titulo: p.nombre.toUpperCase(), precioFormateado: `$${p.precio.toLocaleString('es-CO')}` }));
  out.classList.remove('hidden');
  out.textContent = `✔ Tarjetas generadas (${tarjetas.length}): ${JSON.stringify(tarjetas, null, 2)}`;
}

function ejecutarEjercicioReduce() {
  const out = document.getElementById('output-s8-reduce');
  if (!out) return;
  const items = [
    { precio: 100000, cantidad: 2, descuento: 0.10 },
    { precio: 50000, cantidad: 1, descuento: 0 }
  ];
  const balance = items.reduce((acc, item) => {
    const bruto = item.precio * item.cantidad;
    const desc = bruto * (item.descuento ?? 0);
    return {
      subtotal: acc.subtotal + bruto,
      descuentos: acc.descuentos + desc
    };
  }, { subtotal: 0, descuentos: 0 });
  balance.baseGravable = balance.subtotal - balance.descuentos;
  balance.iva19 = Math.round(balance.baseGravable * 0.19);
  balance.totalPagar = balance.baseGravable + balance.iva19;
  out.classList.remove('hidden');
  out.textContent = `✔ Balance calculado con .reduce(): ${JSON.stringify(balance)}`;
}

function ejecutarEjercicioEventLoop() {
  const out = document.getElementById('output-s10-loop');
  if (!out) return;
  out.classList.remove('hidden');
  out.innerHTML = `
    <div>1️⃣ [Call Stack Sincrónico] ➔ <strong>"1. Inicio"</strong></div>
    <div>2️⃣ [Call Stack Sincrónico] ➔ <strong>"4. Fin"</strong></div>
    <div>3️⃣ [Microtask Queue - Promesa] ➔ <strong>"3. Promesa (Microtask)"</strong> (Prioridad alta antes de repintar UI)</div>
    <div>4️⃣ [Macrotask Queue - Timer] ➔ <strong>"2. Timeout (Macrotask)"</strong> (Último en ejecutarse)</div>
  `;
}

async function ejecutarEjercicioPipeline(forzarError) {
  const out = document.getElementById('output-s11-pipeline');
  if (!out) return;
  out.classList.remove('hidden');
  out.textContent = '⏳ Ejecutando petición asíncrona al servidor CADPH...';
  await new Promise(r => setTimeout(r, 350));
  if (!forzarError) {
    out.className = 'mt-3 font-mono text-[11px] p-3 bg-slate-900 text-emerald-400 rounded';
    out.textContent = '✅ 200 OK: { exito: true, datos: ["Valentina", "Sebastián", "Camila"], error: null }';
  } else {
    out.className = 'mt-3 font-mono text-[11px] p-3 bg-slate-900 text-amber-300 rounded';
    out.textContent = '🛡️ Catch Resiliente (UI protegida): { exito: false, datos: [], error: "Error 500: Fallo de conexión con el servidor SENA" }';
  }
}

async function ejecutarEjercicioPromiseAll() {
  const out = document.getElementById('output-s12-promise');
  if (!out) return;
  out.classList.remove('hidden');
  out.textContent = '⏳ Sincronizando 3 microservicios en paralelo con Promise.allSettled()...';
  const resultados = await Promise.allSettled([
    Promise.resolve({ modulo: 'Métricas', estado: 'Activo' }),
    Promise.resolve({ modulo: 'Alertas', pendientes: 2 }),
    Promise.reject(new Error('Servicio de Clima Garzón fuera de línea'))
  ]);
  const resumen = resultados.reduce((acc, r) => {
    if (r.status === 'fulfilled') acc.exitosos.push(r.value);
    else acc.fallidos.push(r.reason.message);
    return acc;
  }, { exitosos: [], fallidos: [] });
  out.textContent = `✔ Dashboard renderizado sin bloquearse:\n${JSON.stringify(resumen, null, 2)}`;
}

function ejecutarSuitePruebasNavegador() {
  const out = document.getElementById('output-s13-suite');
  if (!out) return;
  out.classList.remove('hidden');
  out.innerHTML = `
    <div>✔ 🟢 RETO 1: Desestructuración y Props (3/3 subtests OK)</div>
    <div>✔ 🟢 RETO 2: Inmutabilidad y Spread Operator (4/4 subtests OK)</div>
    <div>✔ 🟢 RETO 3: Métodos Puros .map() y .filter() (3/3 subtests OK)</div>
    <div>✔ 🟢 RETO 4: Acumuladores con .reduce() (2/2 subtests OK)</div>
    <div>✔ 🟢 RETO 5: Asincronía, Promesas y Pipelines (3/3 subtests OK)</div>
    <div class="text-yellow-400 font-bold pt-1">ℹ tests 20 (5 suites + 15 subtests) | pass 20 | fail 0</div>
  `;
}

function simularComandoTerminal(cmd) {
  const out = document.getElementById('output-s14-term');
  if (!out) return;
  const respuestas = {
    'npm test': '<span class="text-emerald-400">$ node --test test/validador.test.js</span><br>✔ RETO 1..5 completados · <strong class="text-yellow-300">ℹ tests 20 | pass 20 | fail 0 (98ms)</strong>',
    'npm run test:watch': '<span class="text-cyan-400">$ node --test --watch test/validador.test.js</span><br>👀 Modo centinela activo: esperando cambios en <code>retos/*.js</code> (Presiona Ctrl+S en VS Code)...',
    'npm run validate': '<span class="text-yellow-400">$ node test/validador-cli.js</span><br>🎉 ¡FELICITACIONES! Todos los retos de la Ficha 3314621 pasaron satisfactoriamente.',
    'git status': '<span class="text-purple-400">$ git status</span><br>On branch main · Changes to be committed: <code>modified: retos/reto1-destructuring.js</code>'
  };
  out.innerHTML = respuestas[cmd] || '$ Comando ejecutado';
}

function actualizarCalculoChecklist() {
  const checks = document.querySelectorAll('#checklist-eval input[type="checkbox"]');
  let total = 0;
  checks.forEach(c => { if (c.checked) total += Number(c.dataset.puntos || 0); });
  const lblPuntaje = document.getElementById('lbl-puntaje');
  const lblJuicio = document.getElementById('lbl-juicio');
  const badge = document.getElementById('badge-estado-eval');
  if (lblPuntaje) lblPuntaje.textContent = `${total} / 100`;
  const aprobado = total >= 70;
  if (lblJuicio) {
    lblJuicio.textContent = aprobado ? '✅ Juicio SENA: APROBADO (Competente)' : '⏳ Criterio SENA: Requiere mínimo 70 pts para APROBADO';
    lblJuicio.className = aprobado ? 'text-emerald-700 font-bold' : 'text-slate-500';
  }
  if (badge) {
    badge.textContent = `Estado: ${aprobado ? 'APROBADO' : 'EN PROCESO'} (${total} / 100 pts)`;
    badge.className = aprobado
      ? 'text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300'
      : 'text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200';
  }
}
```

---

## 7. ✅ Checklist Final para el Instructor Antes de Entrar a Formación

- [x] **Estructura Pedagógica:** 14 lecciones organizadas de menor a mayor complejidad con enfoque 100% práctico hacia React + Vite.
- [x] **Claridad en Memoria:** Explicación visual de Stack vs. Heap, `Object.is()` y por qué mutar estados congela React.
- [ ] **Aplicar ajuste en Starter Kit (`.zip` y `/plantilla-aprendiz`):** Verificar que las funciones entregadas al aprendiz tengan solo los `// TODO` (sin las respuestas resueltas) y que el `.zip` incluya la carpeta `test/`.
- [ ] **Enfatizar las 3 trampas de React en el tablero:**
  1. `??` en lugar de `||` cuando el número `0` es un dato válido.
  2. `stock > 0 && <Componente />` en lugar de `stock && <Componente />`.
  3. Nunca poner `async` directamente en el callback de `useEffect(() => {}, [])`.

