# Módulo 01: JavaScript Moderno (ES6+)

> **Programa:** Tecnólogo en Análisis y Desarrollo de Software (ADSO)  
> **Ficha:** 3314621  
> **Competencia:** Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.

---

## 🎯 Objetivo de Aprendizaje
Apropiar la sintaxis moderna de ECMAScript 2015 (ES6) en adelante, erradicando prácticas obsoletas (como el uso de `var` y funciones anónimas complejas) y sentando las bases sintácticas requeridas para programar componentes y hooks en React.

---

## 📌 1. Variables y Ámbito: `const` y `let` (Cero `var`)

En JavaScript moderno, la palabra clave `var` ha quedado completamente en desuso debido al **hoisting** impredecible y su ámbito de función (*function scope*).

### A. Diferencias Fundamentales

| Característica | `var` (Obsoleto) | `let` (Moderno) | `const` (Preferido) |
|---|---|---|---|
| **Ámbito (Scope)** | Función o Global | Bloque `{ }` | Bloque `{ }` |
| **Reasignación** | Permitida | Permitida | ❌ Prohibida |
| **Redeclaración** | Permitida (provoca bugs) | ❌ Prohibida | ❌ Prohibida |
| **Temporal Dead Zone** | No (produce `undefined`) | Sí (lanza `ReferenceError`) | Sí (lanza `ReferenceError`) |

```javascript
// Scope de Bloque con const y let
if (true) {
  const FICHA = "3314621"; // Solo vive dentro de este bloque if
  let contador = 1;
}
// console.log(FICHA); // Error: FICHA is not defined

// En React:
// El 90% de tus variables de componentes son 'const'
const [contador, setContador] = useState(0);
```

> 💡 **Regla de Oro en React:** Usa siempre `const` por defecto. Si el valor necesita ser reasignado en un bucle o cálculo incremental, usa `let`. Nunca uses `var`.

---

## 📌 2. Funciones Flecha (Arrow Functions)

Las funciones flecha no solo son una sintaxis más limpia y corta; además tienen dos características determinantes para React:
1. **Retorno Implícito:** Si el cuerpo de la función tiene una sola línea, no necesita `{ }` ni la palabra `return`.
2. **Contexto Léxico de `this`:** No crean su propio contexto de `this`, sino que heredan el `this` del ámbito donde fueron creadas.

```javascript
// Función Tradicional (ES5)
function sumar(a, b) {
  return a + b;
}

// Función Flecha con Retorno Explícito
const sumarFlecha = (a, b) => {
  return a + b;
};

// Función Flecha con Retorno Implícito (Ideal para React)
const sumarCompacta = (a, b) => a + b;

// En React: Un Componente Funcional es exactamente esto:
const Saludo = ({ nombre }) => (
  <div className="tarjeta">
    <h2>Hola, {nombre}</h2>
  </div>
);
```

---

## 📌 3. Desestructuración (Destructuring)

Permite "desempacar" valores de arreglos o propiedades de objetos en distintas variables con una sola línea de código.

### A. Desestructuración de Objetos
```javascript
const aprendiz = {
  id: 1001,
  nombre: "Hector David",
  programa: "ADSO",
  ficha: "3314621",
  contacto: {
    email: "hdtoledo@sena.edu.co",
    ciudad: "Garzón"
  }
};

// Extracción básica
const { nombre, ficha } = aprendiz;
console.log(nombre); // "Hector David"

// Renombrar propiedades y valores por defecto
const { nombre: instructor, rol = "Instructor Técnico" } = aprendiz;
console.log(instructor, rol); // "Hector David", "Instructor Técnico"

// En React: Recepción de Props en Componentes
function TarjetaUsuario({ nombre, ficha, contacto: { email } }) {
  return <p>{nombre} ({ficha}) - {email}</p>;
}
```

### B. Desestructuración de Arreglos
La asignación se realiza según la posición numérica:
```javascript
const colores = ["#39A900", "#00324D", "#FFFFFF"];

// Extraer el primero y el segundo
const [verdeSena, azulSena] = colores;

// En React: Esta es la sintaxis exacta de los Hooks
// useState retorna un arreglo de 2 posiciones: [valorActual, funcionModificadora]
const [usuario, setUsuario] = useState(null);
```

---

## 📌 4. Operadores Spread (`...`) y Rest (`...`)

Aunque ambos usan la misma sintaxis de tres puntos (`...`), su función depende del contexto:

### A. Spread Operator (Propagador / Clonador)
"Esparce" los elementos de un iterable (arreglo u objeto) dentro de uno nuevo:
```javascript
// Clonar y fusionar arreglos sin mutar
const grupoA = ["Carlos", "Ana"];
const grupoB = ["David", "Sofia"];
const grupoTotal = [...grupoA, ...grupoB, "Nuevo Aprendiz"];

// Clonar y actualizar objetos (Base de setState en React)
const usuarioOriginal = { id: 1, nombre: "Pedro", activo: false };
const usuarioActualizado = { 
  ...usuarioOriginal, 
  activo: true, 
  rol: "Líder de Ficha" 
};
```

### B. Rest Parameters (Parámetros Restantes)
Agrupa los argumentos sobrantes pasados a una función dentro de un arreglo:
```javascript
const sumarTodo = (...numeros) => {
  return numeros.reduce((acumulador, n) => acumulador + n, 0);
};

console.log(sumarTodo(10, 20, 30, 40)); // 100
```

---

## 📌 5. Módulos de ES (ES Modules: `import` y `export`)

En el desarrollo con **React + Vite**, cada archivo representa un módulo aislado:
```javascript
// helpers/calculos.js
export const IVA = 0.19;

export const calcularPrecioFinal = (precio) => precio * (1 + IVA);

export default function formatearMoneda(valor) {
  return `$ ${valor.toLocaleString('es-CO')}`;
}

// App.js
import formatearMoneda, { IVA, calcularPrecioFinal } from './helpers/calculos.js';
```

---

## 💻 Práctica Recomendada
Ejecuta el archivo complementario en tu terminal:
```bash
node modulos/01-javascript-moderno-es6/ejercicios.js
```
O ábrelo en el **Laboratorio Live Code** de la plataforma web en `index.html`.
