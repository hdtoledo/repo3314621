/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 5: Asincronía, Promesas, Async/Await y Pipelines de Datos
 * ============================================================================
 */

export function simularLlamadaApi(payload, { debeFallar = false, latencia = 50 } = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (debeFallar) {
        reject(new Error("Error 500: Fallo de conexión con el servidor SENA"));
      } else {
        resolve({ status: 200, data: payload, timestamp: Date.now() });
      }
    }, latencia);
  });
}

export async function ejecutarPipelineSeguro(fetcherAsync, valorPorDefecto = []) {
  try {
    const res = await fetcherAsync();
    return { exito: true, datos: res.data, error: null };
  } catch (err) {
    return { exito: false, datos: valorPorDefecto, error: err.message };
  }
}

export async function sincronizarMultiplesFuentes(listaPromesas) {
  const resultados = await Promise.allSettled(listaPromesas);
  return resultados.reduce((acc, item) => {
    if (item.status === "fulfilled") {
      return { ...acc, exitosos: [...acc.exitosos, item.value] };
    } else {
      return { ...acc, fallidos: [...acc.fallidos, item.reason.message] };
    }
  }, { exitosos: [], fallidos: [] });
}

