# 📝 Taller Práctico: Refactorización a JavaScript Moderno (ES6+)

> **Ficha:** 3314621 · ADSO  
> **Evidencia:** GA7-220501096-AA1-EV01  
> **Modalidad:** Individual o en parejas en sala de sistemas

---

## 🎯 Caso de Negocio: Sistema de Control de Matrícula SENA

Un programador junior escribió un script en JavaScript antiguo (ES5) lleno de variables `var`, funciones tradicionales con concatenación rudimentaria de strings y mutación directa.

Tu reto es **refactorizarlo al 100%** aplicando los estándares modernos de ES6+.

---

## ❌ Código Legado (ES5 para Refactorizar)

```javascript
// CODIGO OBSOLETO
var instructor = "Hector Toledo";
var fichas = ["3314621", "2901234"];

function registrarAprendiz(id, nombre, edad, ficha) {
  var aprendiz = {
    id: id,
    nombre: nombre,
    edad: edad,
    ficha: ficha,
    activo: true
  };
  return aprendiz;
}

function imprimirReporte(aprendiz) {
  var texto = "Aprendiz: " + aprendiz.nombre + " - Ficha: " + aprendiz.ficha;
  return texto;
}

function agregarFicha(lista, nuevaFicha) {
  lista.push(nuevaFicha); // Mutación de arreglo
  return lista;
}
```

---

## ✅ Requerimientos de la Entrega

1. **Reemplazar todos los `var`** por `const` o `let` según corresponda.
2. **Convertir las funciones a Arrow Functions** con retorno implícito donde sea factible.
3. **Aplicar Desestructuración** en `imprimirReporte` para extraer directamente `{ nombre, ficha }`.
4. **Implementar Template Literals** (backticks `` ` ``) en lugar de concatenación con `+`.
5. **Usar el Operador Spread (`...`)** en `agregarFicha` para retornar un nuevo arreglo sin mutar el original.
6. **Crear una función `actualizarAprendiz`** que reciba un aprendiz y un objeto con los cambios a aplicar usando el Spread Operator sobre el objeto.

---

## 🏆 Criterios de Evaluación
- No existe ninguna aparición de la palabra clave `var`.
- Las funciones flecha están sintácticamente limpias.
- El código se ejecuta sin errores en Node.js o en el navegador.
- Sustentación en vivo ante el instructor respondiendo preguntas conceptuales de Scope y Destructuring.
