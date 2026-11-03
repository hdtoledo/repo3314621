/**
 * ============================================================================
 * SENA CADPH Garzón - Centro Agroempresarial y Desarrollo Pecuario del Huila
 * Programa: ADSO Ficha 3314621
 * RETO 1: Desestructuración Limpia y Valores por Defecto (Fundamentos de Props)
 * ============================================================================
 */

export function procesarPerfilUsuario(usuario) {
  // TODO 1.1: Usa desestructuración limpia sobre 'usuario' (maneja usuario || {} por seguridad) para extraer:
  // - 'name' renombrado a 'nombreCompleto'
  // - 'role' renombrado a 'cargo' (si no viene, asignar por defecto "Aprendiz ADSO")
  // - 'email' extraído de 'contacto.email' renombrado a 'correo' (si no existe, "sin-correo@sena.edu.co")
  // - 'active' renombrado a 'activo' (por defecto true)
  // Retorna: { nombreCompleto, cargo, correo, activo }
}

export function formatearTarjetaProducto(props = {}) {
  // TODO 1.2: Desestructura { id, titulo, precio = 0, stock = 0, categoria = "General" }
  // Retorna un string con el formato exacto:
  // "[#ID] TITULO - $PRECIO (Stock: STOCK unid.) - Categoria: CATEGORIA"
}

export function desempaquetarTupla(tuplaEstado) {
  // TODO 1.3: Usa desestructuración de arreglos y el operador rest (...)
  // para obtener el primer elemento como 'principal', el segundo como 'secundario'
  // y todos los demás en un arreglo llamado 'resto'.
  // Retorna: { principal, secundario, resto }
}

export function normalizarPerfil(aprendiz = {}) {
  // TODO 1.4 (Opcional Lección 03): Desestructura { nombre, correo: email, ficha = 3314621, ...habilidades }
  // Retorna: { nombre, email, ficha, habilidades }
}

