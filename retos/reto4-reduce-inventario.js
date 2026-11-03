/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 4: Acumuladores Complejos con .reduce() (Base de useReducer)
 * ============================================================================
 */

export function calcularBalancePedido(items, tasaIva = 0.19) {
  const base = items.reduce((acc, item) => {
    const bruto = item.precio * item.cantidad;
    const desc = bruto * (item.descuento ?? 0);
    return {
      subtotalBruto: acc.subtotalBruto + bruto,
      totalDescuentos: acc.totalDescuentos + desc,
      cantidadTotalUnidades: acc.cantidadTotalUnidades + item.cantidad
    };
  }, { subtotalBruto: 0, totalDescuentos: 0, cantidadTotalUnidades: 0 });

  const baseGravable = base.subtotalBruto - base.totalDescuentos;
  const ivaCalculado = Math.round(baseGravable * tasaIva);
  const totalNeto = baseGravable + ivaCalculado;

  return {
    ...base,
    baseGravable,
    ivaCalculado,
    totalNeto
  };
}

export function procesarMovimientosCaja(movimientos) {
  // Implementación 100% inmutable (estilo useReducer en React)
  return movimientos.reduce((acc, mov) => {
    const esIngreso = mov.tipo === "INGRESO";
    return {
      ingresos: esIngreso ? [...acc.ingresos, mov] : acc.ingresos,
      egresos: !esIngreso ? [...acc.egresos, mov] : acc.egresos,
      saldoTotal: esIngreso ? acc.saldoTotal + mov.monto : acc.saldoTotal - mov.monto
    };
  }, { ingresos: [], egresos: [], saldoTotal: 0 });
}

