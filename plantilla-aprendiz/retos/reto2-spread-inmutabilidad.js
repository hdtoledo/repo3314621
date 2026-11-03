/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 2: Inmutabilidad con Spread Operator (...)
 * ============================================================================
 */

export function agregarAlCarritoInmutable(carritoOriginal, nuevoProducto) {
  // TODO 2.1: Retorna un NUEVO arreglo con 'nuevoProducto' agregado al final SIN usar .push()
}

export function actualizarPerfilInmutable(estadoActual, cambios) {
  // TODO 2.2: Retorna un NUEVO objeto combinando estadoActual y cambios sin mutar el original.
  // Importante: Asegúrate también de clonar profundamente el sub-objeto 'configuracion':
  // configuracion: { ...(estadoActual?.configuracion || {}), ...(cambios?.configuracion || {}) }
}

export function eliminarItemInmutable(items, idEliminar) {
  // TODO 2.3: Retorna un nuevo arreglo sin el elemento cuyo 'id' sea igual a 'idEliminar' (usa .filter)
}

export function actualizarCantidadItem(items, id, nuevaCantidad) {
  // TODO 2.4: Retorna un nuevo arreglo actualizando únicamente la propiedad 'cantidad'
  // del item cuyo 'id' coincida (usa .map y spread { ...item, cantidad: nuevaCantidad })
}

