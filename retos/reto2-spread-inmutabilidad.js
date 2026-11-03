/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 2: Inmutabilidad con Spread Operator (...)
 * ============================================================================
 */

export function agregarAlCarritoInmutable(carritoOriginal, nuevoProducto) {
  // Retorna un NUEVO arreglo con nuevoProducto agregado al final sin usar .push()
  return [...carritoOriginal, nuevoProducto];
}

export function actualizarPerfilInmutable(estadoActual, cambios) {
  // Retorna un nuevo objeto combinando estadoActual y cambios sin mutar
  return {
    ...estadoActual,
    ...cambios,
    configuracion: {
      ...(estadoActual?.configuracion || {}),
      ...(cambios?.configuracion || {})
    }
  };
}

export function eliminarItemInmutable(items, idEliminar) {
  // Retorna un nuevo arreglo sin el item con ese id
  return items.filter(item => item.id !== idEliminar);
}

export function actualizarCantidadItem(items, id, nuevaCantidad) {
  // Retorna un nuevo arreglo actualizando únicamente la cantidad del item con ese id
  return items.map(item => item.id === id ? { ...item, cantidad: nuevaCantidad } : item);
}

