/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 3: Métodos Puros de Arreglos (.map, .filter) para Listas en React
 * ============================================================================
 */

export function generarTarjetasAprendices(aprendices) {
  return aprendices.map(a => ({
    key: `apr-${a.id}`,
    etiqueta: `${a.nombre} (${a.ficha})`,
    estado: a.promedio >= 3.5 ? "APROBADO" : "EN REFUERZO",
    puntaje: a.promedio
  }));
}

export function filtrarCatalogo(inventario, filtros = {}) {
  return inventario.filter(p => {
    if (filtros.soloDisponibles && p.stock <= 0) return false;
    if (filtros.categoria && p.categoria !== filtros.categoria) return false;
    if (typeof filtros.precioMaximo === "number" && p.precio > filtros.precioMaximo) return false;
    if (filtros.busqueda && !p.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase())) return false;
    return true;
  });
}

export function obtenerCategoriasUnicas(productos) {
  return [...new Set(productos.map(p => p.categoria))].sort();
}

