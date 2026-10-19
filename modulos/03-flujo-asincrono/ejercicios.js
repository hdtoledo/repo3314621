/**
 * EJERCICIOS PRÁCTICOS: MÓDULO 3 - FLUJO ASÍNCRONO, PROMESAS Y FETCH
 * Ficha: 3314621 - SENA CADPH Garzón
 * Competencia: Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo.
 * 
 * Para ejecutar en consola:
 *   node modulos/03-flujo-asincrono/ejercicios.js
 */

console.log("=================================================");
console.log("⏳ EJERCICIOS MÓDULO 03: FLUJO ASÍNCRONO & FETCH");
console.log("=================================================\n");

// -----------------------------------------------------------------
// 1. SIMULACIÓN DE PROMESA BÁSICA CON TIEMPO DE ESPERA
// -----------------------------------------------------------------
console.log("📌 1. Creación de una Promesa personalizada:");

const verificarAcreditacionSena = (calificacion) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (calificacion >= 3.5) {
        resolve({
          aprobado: true,
          mensaje: `Felicitaciones, tu nota (${calificacion}) cumple los criterios de competencia.`
        });
      } else {
        reject(new Error(`Calificación insuficiente (${calificacion}). Debes presentar plan de mejoramiento.`));
      }
    }, 500); // 500ms de retraso simulado
  });
};

// -----------------------------------------------------------------
// 2. CONSUMO DE PROMESAS CON ASYNC / AWAIT Y TRY...CATCH
// -----------------------------------------------------------------
async function ejecutarCasosEvaluacion() {
  console.log("   Evaluando Caso A (Calificación 4.5)...");
  try {
    const resA = await verificarAcreditacionSena(4.5);
    console.log("   ✅ Resultado A:", resA.mensaje);
  } catch (error) {
    console.error("   ❌ Error A:", error.message);
  }

  console.log("\n   Evaluando Caso B (Calificación 2.8)...");
  try {
    const resB = await verificarAcreditacionSena(2.8);
    console.log("   ✅ Resultado B:", resB.mensaje);
  } catch (error) {
    console.log("   ⚠️ Excepción capturada en Caso B:", error.message);
  }
}

// -----------------------------------------------------------------
// 3. CONSUMO REAL DE API REST CON FETCH
// -----------------------------------------------------------------
async function consultarUsuariosApi() {
  console.log("\n📌 2. Petición HTTP Real hacia JSONPlaceholder:");
  const ENDPOINT = "https://jsonplaceholder.typicode.com/users?_limit=3";

  try {
    console.log(`   Realizando GET a ${ENDPOINT}...`);
    const respuesta = await fetch(ENDPOINT);

    if (!respuesta.ok) {
      throw new Error(`Código de estado no exitoso: ${respuesta.status} ${respuesta.statusText}`);
    }

    const usuarios = await respuesta.json();
    console.log(`   Recibidos ${usuarios.length} usuarios del servidor remoto.`);

    // Transformación inmutable de la respuesta para vista
    const datosFiltrados = usuarios.map(({ id, name, email, company: { name: empresa } }) => ({
      id,
      nombre: name,
      correo: email,
      empresa
    }));

    console.table(datosFiltrados);

  } catch (error) {
    console.error("   Fallo en la comunicación con la API:", error.message);
  }
}

// -----------------------------------------------------------------
// 4. PARALELISMO CON PROMISE.ALL (OPTIMIZACIÓN DE CARGA)
// -----------------------------------------------------------------
async function cargarRecursosEnParalelo() {
  console.log("\n📌 3. Peticiones concurrentes con Promise.all():");
  const urlUsuarios = "https://jsonplaceholder.typicode.com/users/1";
  const urlPosts = "https://jsonplaceholder.typicode.com/posts/1";

  const tiempoInicio = Date.now();

  try {
    // Se disparan ambas peticiones simultáneamente en la red
    const [resUsuario, resPost] = await Promise.all([
      fetch(urlUsuarios).then(r => r.json()),
      fetch(urlPosts).then(r => r.json())
    ]);

    const tiempoTotal = Date.now() - tiempoInicio;
    console.log(`   Ambos recursos descargados en paralelo en ${tiempoTotal}ms.`);
    console.log(`   Autor: ${resUsuario.name} (${resUsuario.email})`);
    console.log(`   Título de su publicación: "${resPost.title}"`);

  } catch (error) {
    console.error("   Error en Promise.all:", error.message);
  } finally {
    console.log("\n=================================================");
    console.log("✅ FIN DE EJERCICIOS MÓDULO 03");
    console.log("=================================================");
  }
}

// Ejecución secuencial para no mezclar logs
async function iniciar() {
  await ejecutarCasosEvaluacion();
  await consultarUsuariosApi();
  await cargarRecursosEnParalelo();
}

iniciar();
