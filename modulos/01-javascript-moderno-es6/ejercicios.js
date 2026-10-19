/**
 * EJERCICIOS PRÁCTICOS: MÓDULO 1 - JAVASCRIPT MODERNO (ES6+)
 * Ficha: 3314621 - SENA CADPH Garzón
 * Competencia: Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.
 * 
 * Para ejecutar en consola:
 *   node modulos/01-javascript-moderno-es6/ejercicios.js
 */

console.log("=================================================");
console.log("🚀 EJERCICIOS MÓDULO 01: JAVASCRIPT ES6+");
console.log("=================================================\n");

// -----------------------------------------------------------------
// 1. EJERCICIO DE SCOPE Y CONSTANTES
// -----------------------------------------------------------------
console.log("📌 1. Scope y Constantes:");
const CENTRO_SENA = "CADPH Garzón";
const FICHA = "3314621";

function demoScope() {
  let contadorSesiones = 1;
  if (true) {
    let contadorSesiones = 5; // Variable diferente en bloque interno
    console.log(`   Scope Interno: Sesión ${contadorSesiones}`);
  }
  console.log(`   Scope Externo: Sesión ${contadorSesiones}`);
  console.log(`   Centro: ${CENTRO_SENA} - Ficha: ${FICHA}`);
}
demoScope();

// -----------------------------------------------------------------
// 2. ARROW FUNCTIONS Y RETORNO IMPLÍCITO
// -----------------------------------------------------------------
console.log("\n📌 2. Arrow Functions con Retorno Implícito:");

// Función tradicional para calcular nota final
const calcularNotaFinal = (parcial, taller, proyecto) => 
  (parcial * 0.3) + (taller * 0.3) + (proyecto * 0.4);

const notaAprendiz = calcularNotaFinal(4.5, 4.0, 5.0);
console.log(`   Nota ponderada final: ${notaAprendiz.toFixed(2)}`);

// Retorno implícito de un objeto (requiere paréntesis circundantes)
const crearAprendiz = (id, nombre, ficha) => ({
  id,
  nombre,
  ficha,
  activo: true,
  creadoEn: new Date().toLocaleDateString('es-CO')
});

const nuevoAprendiz = crearAprendiz(101, "Sofia Ramirez", FICHA);
console.log("   Objeto retornado implícitamente:", nuevoAprendiz);

// -----------------------------------------------------------------
// 3. DESTRUCTURING DE OBJETOS Y ARREGLOS
// -----------------------------------------------------------------
console.log("\n📌 3. Desestructuración de Datos:");

const configuracionServidor = {
  puerto: 8080,
  baseDatos: {
    nombre: "sena_adso_db",
    host: "localhost",
    motor: "PostgreSQL"
  },
  seguridad: {
    jwtClave: "sena-super-secret-2026",
    tiempoExpiracion: "8h"
  }
};

// Desestructuración anidada y renombrado
const { 
  puerto, 
  baseDatos: { nombre: dbNombre, motor }, 
  seguridad: { tiempoExpiracion } 
} = configuracionServidor;

console.log(`   Servidor levantado en puerto ${puerto}`);
console.log(`   Conectado a ${dbNombre} (${motor})`);
console.log(`   Sesión válida por: ${tiempoExpiracion}`);

// Desestructuración de arrays con valores por defecto
const coordenadas = [2.1965, -75.6276];
const [latitud, longitud, altitud = "830 msnm"] = coordenadas;
console.log(`   Garzón Huila -> Lat: ${latitud}, Long: ${longitud}, Alt: ${altitud}`);

// -----------------------------------------------------------------
// 4. SPREAD OPERATOR Y REST PARAMETERS
// -----------------------------------------------------------------
console.log("\n📌 4. Spread y Rest Operators:");

// Spread en Arreglos
const competenciasBasicas = ["Razonamiento Cuantitativo", "Comunicación"];
const competenciasTecnicas = ["Diseño de Software", "Bases de Datos", "React + Vite"];

const pensumCompleto = [...competenciasBasicas, ...competenciasTecnicas, "Inglés Técnico"];
console.log("   Pensum estructurado:", pensumCompleto);

// Spread en Objetos (Actualización de Estado simulada)
const estadoInicial = {
  usuario: "Hector David",
  autenticado: true,
  rol: "Instructor",
  notificaciones: 3
};

// Simulamos que el usuario leyó las notificaciones (¡Inmutable!)
const estadoActualizado = {
  ...estadoInicial,
  notificaciones: 0,
  ultimaActividad: "10:30 AM"
};

console.log("   Estado Original:", estadoInicial);
console.log("   Estado Actualizado:", estadoActualizado);
console.log("   ¿Misma referencia?:", estadoInicial === estadoActualizado ? "Sí (MUTADO)" : "No (INMUTABLE Y SEGURO PARA REACT)");

// Rest Parameters en funciones
const calcularPromedioGrupal = (nombreGrupo, ...calificaciones) => {
  const suma = calificaciones.reduce((acc, curr) => acc + curr, 0);
  const promedio = suma / calificaciones.length;
  return `   Grupo: ${nombreGrupo} | Promedio: ${promedio.toFixed(2)}`;
};

console.log(calcularPromedioGrupal("Equipo Frontend Alpha", 4.5, 4.8, 3.9, 5.0, 4.2));

console.log("\n=================================================");
console.log("✅ FIN DE EJERCICIOS MÓDULO 01");
console.log("=================================================");
