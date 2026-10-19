# 📝 Taller Práctico: Gestión Inmutable de Carrito de Compras (E-Commerce)

> **Ficha:** 3314621 · ADSO  
> **Evidencia:** GA7-220501096-AA1-EV02  
> **Modalidad:** Taller Asistido en Laboratorio de Cómputo

---

## 🎯 Caso de Negocio: Carrito de Compras para el SENA Agroempresarial

Desarrollarás las funciones del gestor de estado para una tienda virtual de productos del centro CADPH Garzón.
Todas las operaciones deben ser **estrictamente inmutables**, simulando las funciones reductoras o *setters* que utilizaremos en **React con `useReducer` o `useState`**.

---

## 🛒 Estructura Inicial del Estado

```javascript
const carritoInicial = [
  { id: 1, producto: "Café Especial Huila 500g", precio: 28000, cantidad: 2 },
  { id: 2, producto: "Panela Pulverizada 1kg", precio: 8000, cantidad: 5 },
  { id: 3, producto: "Achiras Artesanales 250g", precio: 12000, cantidad: 1 }
];
```

---

## 📋 Retos a Desarrollar

Debes implementar 5 funciones puras:

### 1. `agregarProducto(carrito, nuevoItem)`
- Si el producto **no existe** en el carrito, agrégalo con cantidad 1 al final usando el Spread Operator.
- Si el producto **ya existe** (coincidencia de `id`), incrementa su propiedad `cantidad` en 1 usando `.map()`.
- **Prohibido:** Usar `.push()`.

### 2. `eliminarProducto(carrito, idProducto)`
- Retorna un nuevo carrito excluyendo el producto especificado mediante `.filter()`.
- **Prohibido:** Usar `.splice()`.

### 3. `actualizarCantidad(carrito, idProducto, nuevaCantidad)`
- Si `nuevaCantidad <= 0`, elimina el producto automáticamente.
- Si es mayor a 0, actualiza el valor de `cantidad` inmutablemente.

### 4. `calcularTotales(carrito)`
- Utiliza `.reduce()` para retornar un objeto con:
  - `totalArticulos`: Sumatoria de las cantidades.
  - `subtotal`: Sumatoria de `precio * cantidad`.
  - `iva`: 19% del subtotal.
  - `totalPagar`: `subtotal + iva`.

### 5. `aplicarDescuentoGlobal(carrito, porcentajeDescuento)`
- Retorna un nuevo carrito donde cada producto tenga su precio reducido según el porcentaje (por ejemplo, `0.10` para un 10%).

---

## 🏆 Criterios de Evaluación
- Todas las funciones retornan un nuevo arreglo u objeto sin mutar el parámetro de entrada.
- Comprobación estricta de referencias con `Object.is()` o `===`.
- Código limpio, tipografía homogénea y nombres de variables descriptivos en español o inglés.
