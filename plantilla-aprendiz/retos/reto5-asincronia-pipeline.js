/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 5: Asincronía, Promesas, Async/Await y Pipelines de Datos
 * ============================================================================
 */

export function simularLlamadaApi(payload, { debeFallar = false, latencia = 50 } = {}) {
  // TODO 5.1: Retorna una nueva Promise((resolve, reject) => ...) con setTimeout de 'latencia' ms:
  // - Si debeFallar es true: reject(new Error("Error 500: Fallo de conexión con el servidor SENA"))
  // - Si debeFallar es false: resolve({ status: 200, data: payload, timestamp: Date.now() })
}

export async function ejecutarPipelineSeguro(fetcherAsync, valorPorDefecto = []) {
  // TODO 5.2: Ejecuta await fetcherAsync() dentro de un bloque try / catch:
  // - En try: retorna { exito: true, datos: respuesta.data, error: null }
  // - En catch(err): retorna { exito: false, datos: valorPorDefecto, error: err.message }
}

export async function sincronizarMultiplesFuentes(listaPromesas) {
  // TODO 5.3: Usa await Promise.allSettled(listaPromesas) y retorna:
  // { exitosos: [valores de las promesas 'fulfilled'], fallidos: [mensajes reason.message de las 'rejected'] }
}

