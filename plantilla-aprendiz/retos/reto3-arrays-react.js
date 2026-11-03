/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 3: Métodos Puros de Arreglos (.map, .filter) para Listas en React
 * ============================================================================
 */

export function generarTarjetasAprendices(aprendices) {
  // TODO 3.1: Usa .map() para transformar cada aprendiz en un objeto con:
  // - key: `apr-${a.id}`
  // - etiqueta: `${a.nombre} (${a.ficha})`
  // - estado: a.promedio >= 3.5 ? "APROBADO" : "EN REFUERZO"
  // - puntaje: a.promedio
}

export function filtrarCatalogo(inventario, filtros = {}) {
  // TODO 3.2: Usa .filter() para retornar los productos que cumplan los filtros activos:
  // - Si filtros.soloDisponibles es true: p.stock > 0
  // - Si filtros.categoria existe: p.categoria === filtros.categoria
  // - Si filtros.precioMaximo es número: p.precio <= filtros.precioMaximo
  // - Si filtros.busqueda existe: p.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase())
}

export function obtenerCategoriasUnicas(productos) {
  // TODO 3.3: Extrae las categorías con .map(p => p.categoria), elimina duplicados con Set
  // y retorna un nuevo arreglo ordenado alfabéticamente con .sort()
}

