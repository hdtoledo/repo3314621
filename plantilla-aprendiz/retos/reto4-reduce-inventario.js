/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 4: Acumuladores Complejos con .reduce() (Base de useReducer)
 * ============================================================================
 */

export function calcularBalancePedido(items, tasaIva = 0.19) {
  // TODO 4.1: Usa .reduce() sobre 'items' (cada item tiene { precio, cantidad, descuento })
  // para calcular y retornar un objeto con:
  // - subtotalBruto: suma de (precio * cantidad)
  // - totalDescuentos: suma de (precio * cantidad) * (descuento ?? 0)
  // - baseGravable: subtotalBruto - totalDescuentos
  // - ivaCalculado: Math.round(baseGravable * tasaIva)
  // - totalNeto: baseGravable + ivaCalculado
  // - cantidadTotalUnidades: suma de todas las cantidades
}

export function procesarMovimientosCaja(movimientos) {
  // TODO 4.2: Usa .reduce() para clasificar cada movimiento según mov.tipo ('INGRESO' o 'EGRESO')
  // Retorna: { ingresos: [...], egresos: [...], saldoTotal: numero }
}

