/**
 * EJERCICIOS PRÁCTICOS: MÓDULO 2 - INMUTABILIDAD EN ARREGLOS Y OBJETOS
 * Ficha: 3314621 - SENA CADPH Garzón
 * Competencia: Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.
 * 
 * Para ejecutar en consola:
 *   node modulos/02-inmutabilidad/ejercicios.js
 */

console.log("=================================================");
console.log("🛡️ EJERCICIOS MÓDULO 02: INMUTABILIDAD PARA REACT");
console.log("=================================================\n");

// Base de datos simulada en memoria
const listaInventario = [
  { id: 101, item: "Laptop Dell Vostro", stock: 15, precio: 3200000, categoria: "Equipos" },
  { id: 102, item: "Mouse Inalámbrico Logitech", stock: 45, precio: 75000, categoria: "Periféricos" },
  { id: 103, item: "Monitor LG 27'' IPS", stock: 8, precio: 890000, categoria: "Monitores" },
  { id: 104, item: "Cable HDMI 2.1 2m", stock: 120, precio: 35000, categoria: "Cables" },
  { id: 105, item: "Teclado Redragon Mecánico", stock: 22, precio: 195000, categoria: "Periféricos" }
];

// -----------------------------------------------------------------
// 1. AGREGAR ELEMENTO SIN MUTAR (SPREAD OPERATOR)
// -----------------------------------------------------------------
console.log("📌 1. Agregar nuevo producto de forma inmutable:");

const nuevoProducto = {
  id: 106,
  item: "Hub USB-C 7 en 1",
  stock: 30,
  precio: 140000,
  categoria: "Accesorios"
};

// En lugar de listaInventario.push(nuevoProducto):
const inventarioConNuevo = [...listaInventario, nuevoProducto];

console.log(`   Longitud Original: ${listaInventario.length} items`);
console.log(`   Longitud Nuevo Array: ${inventarioConNuevo.length} items`);
console.log(`   ¿Arreglo original intacto?: ${listaInventario.length === 5 ? "✅ SÍ (Inmutable)" : "❌ NO (Fue mutado)"}`);

// -----------------------------------------------------------------
// 2. ELIMINAR ELEMENTO SIN MUTAR (.filter)
// -----------------------------------------------------------------
console.log("\n📌 2. Eliminar producto por ID sin usar .splice():");

const idAEliminar = 103; // Supongamos que se agotó el monitor
const inventarioSinMonitor = inventarioConNuevo.filter(prod => prod.id !== idAEliminar);

console.log(`   Items antes de eliminar: ${inventarioConNuevo.length}`);
console.log(`   Items después de eliminar: ${inventarioSinMonitor.length}`);
console.log(`   ¿Existe el ID ${idAEliminar} en el nuevo arreglo?: ${inventarioSinMonitor.some(p => p.id === idAEliminar) ? "Sí" : "No (Eliminado exitosamente)"}`);

// -----------------------------------------------------------------
// 3. ACTUALIZAR UN ELEMENTO SIN MUTAR (.map + spread)
// -----------------------------------------------------------------
console.log("\n📌 3. Actualizar precio de producto (Mouse ID 102) sin mutar:");

const idAActualizar = 102;
const nuevoPrecioMouse = 69900;

const inventarioConDescuento = inventarioSinMonitor.map(prod => {
  if (prod.id === idAActualizar) {
    return {
      ...prod,
      precio: nuevoPrecioMouse,
      enOferta: true
    };
  }
  return prod; // Retorna el mismo objeto sin alterar
});

const mouseOriginal = inventarioSinMonitor.find(p => p.id === idAActualizar);
const mouseActualizado = inventarioConDescuento.find(p => p.id === idAActualizar);

console.log(`   Precio Mouse en array anterior: $${mouseOriginal.precio}`);
console.log(`   Precio Mouse en nuevo array: $${mouseActualizado.precio}`);
console.log(`   ¿El objeto anterior fue modificado?: ${mouseOriginal.precio === 75000 ? "✅ NO (Inmutabilidad perfecta)" : "❌ SÍ (Error de mutación)"}`);

// -----------------------------------------------------------------
// 4. TRANSFORMACIÓN DE DATOS PARA RENDERIZADO (.map)
// -----------------------------------------------------------------
console.log("\n📌 4. Transformar datos a formato vista con .map():");

const tarjetasResumen = inventarioConDescuento.map(p => ({
  etiqueta: `[${p.categoria.toUpperCase()}] ${p.item}`,
  valorComercial: `$ ${p.precio.toLocaleString('es-CO')}`,
  disponibilidad: p.stock > 10 ? "DISPONIBLE" : "ÚLTIMAS UNIDADES"
}));

console.log("   Mapeo de catálogo:", tarjetasResumen.slice(0, 3));

// -----------------------------------------------------------------
// 5. CÁLCULO DE TOTALES Y VALORACIÓN DE INVENTARIO (.reduce)
// -----------------------------------------------------------------
console.log("\n📌 5. Calcular valor total del inventario con .reduce():");

const valorTotalInventario = inventarioConDescuento.reduce((acumulado, prod) => {
  return acumulado + (prod.precio * prod.stock);
}, 0);

console.log(`   Valoración total de activos: $ ${valorTotalInventario.toLocaleString('es-CO')} COP`);

// Agrupar items por categoría usando .reduce()
const itemsPorCategoria = inventarioConDescuento.reduce((acumulador, prod) => {
  const cat = prod.categoria;
  if (!acumulador[cat]) {
    acumulador[cat] = [];
  }
  acumulador[cat].push(prod.item);
  return acumulador;
}, {});

console.log("   Agrupación por categoría:", itemsPorCategoria);

console.log("\n=================================================");
console.log("✅ FIN DE EJERCICIOS MÓDULO 02");
console.log("=================================================");
