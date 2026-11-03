import test from 'node:test';
import assert from 'node:assert/strict';

import {
  procesarPerfilUsuario,
  formatearTarjetaProducto,
  desempaquetarTupla
} from '../retos/reto1-destructuring.js';

import {
  agregarAlCarritoInmutable,
  actualizarPerfilInmutable,
  eliminarItemInmutable,
  actualizarCantidadItem
} from '../retos/reto2-spread-inmutabilidad.js';

import {
  generarTarjetasAprendices,
  filtrarCatalogo,
  obtenerCategoriasUnicas
} from '../retos/reto3-arrays-react.js';

import {
  calcularBalancePedido,
  procesarMovimientosCaja
} from '../retos/reto4-reduce-inventario.js';

import {
  simularLlamadaApi,
  ejecutarPipelineSeguro,
  sincronizarMultiplesFuentes
} from '../retos/reto5-asincronia-pipeline.js';

// ============================================================================
// SUITE 1: DESESTRUCTURACIÓN Y PROPS
// ============================================================================
test('🟢 RETO 1: Desestructuración y Valores por Defecto (Props)', async (t) => {
  await t.test('1.1 Procesa perfil de usuario renombrando y aplicando valores por defecto', () => {
    const res1 = procesarPerfilUsuario({
      name: "Valentina Plazas",
      contacto: { email: "valen@sena.edu.co" }
    });
    assert.deepEqual(res1, {
      nombreCompleto: "Valentina Plazas",
      cargo: "Aprendiz ADSO",
      correo: "valen@sena.edu.co",
      activo: true
    });

    const res2 = procesarPerfilUsuario({
      name: "Héctor Toledo",
      role: "Instructor",
      active: false
    });
    assert.deepEqual(res2, {
      nombreCompleto: "Héctor Toledo",
      cargo: "Instructor",
      correo: "sin-correo@sena.edu.co",
      activo: false
    });
  });

  await t.test('1.2 Formatea tarjeta de producto con desestructuración en parámetros', () => {
    const texto = formatearTarjetaProducto({ id: 10, titulo: "Café Especial Huila", precio: 28000, stock: 15, categoria: "Agroindustria" });
    assert.equal(texto, "[#10] Café Especial Huila - $28000 (Stock: 15 unid.) - Categoria: Agroindustria");

    const textoDefecto = formatearTarjetaProducto({ id: 99, titulo: "Kit Semillas" });
    assert.equal(textoDefecto, "[#99] Kit Semillas - $0 (Stock: 0 unid.) - Categoria: General");
  });

  await t.test('1.3 Desempaqueta tupla de estado usando operador rest (...)', () => {
    const resultado = desempaquetarTupla(["valorEstado", "funcionSetter", "meta1", "meta2"]);
    assert.deepEqual(resultado, {
      principal: "valorEstado",
      secundario: "funcionSetter",
      resto: ["meta1", "meta2"]
    });
  });
});

// ============================================================================
// SUITE 2: INMUTABILIDAD Y SPREAD OPERATOR
// ============================================================================
test('🟢 RETO 2: Inmutabilidad y Spread Operator (El corazón de useState)', async (t) => {
  await t.test('2.1 Agrega producto al carrito retornando una NUEVA referencia en memoria', () => {
    const original = [{ id: 1, nombre: "Teclado", precio: 80000 }];
    const copiaCongelada = structuredClone(original);
    const nuevo = { id: 2, nombre: "Mouse", precio: 45000 };

    const resultado = agregarAlCarritoInmutable(original, nuevo);

    assert.notEqual(resultado, original, "ERROR: Retornaste la misma referencia de memoria (¿usaste .push?)");
    assert.deepEqual(original, copiaCongelada, "ERROR: Mutaste el arreglo original");
    assert.equal(resultado.length, 2);
    assert.deepEqual(resultado[1], nuevo);
  });

  await t.test('2.2 Actualiza perfil inmutablemente preservando propiedades no tocadas', () => {
    const estadoInicial = {
      id: 50,
      nombre: "Carlos",
      ficha: "3314621",
      configuracion: { tema: "claro", notificaciones: true }
    };
    const resultado = actualizarPerfilInmutable(estadoInicial, {
      nombre: "Carlos Andrés",
      configuracion: { tema: "oscuro" }
    });

    assert.notEqual(resultado, estadoInicial);
    assert.equal(estadoInicial.nombre, "Carlos", "El estado original fue mutado");
    assert.equal(resultado.nombre, "Carlos Andrés");
    assert.equal(resultado.configuracion.tema, "oscuro");
    assert.equal(resultado.configuracion.notificaciones, true);
  });

  await t.test('2.3 Elimina item por ID sin mutar la lista original', () => {
    const lista = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const resultado = eliminarItemInmutable(lista, 2);

    assert.notEqual(resultado, lista);
    assert.equal(lista.length, 3, "La lista original cambió de tamaño");
    assert.deepEqual(resultado, [{ id: 1 }, { id: 3 }]);
  });

  await t.test('2.4 Actualiza cantidad de un item específico de manera inmutable', () => {
    const items = [
      { id: 10, nombre: "Monitor", cantidad: 1 },
      { id: 20, nombre: "Cable HDMI", cantidad: 2 }
    ];
    const resultado = actualizarCantidadItem(items, 20, 5);

    assert.notEqual(resultado, items);
    assert.equal(items[1].cantidad, 2, "El objeto interno original fue mutado");
    assert.equal(resultado[1].cantidad, 5);
    assert.equal(resultado[0], items[0], "El item que no cambió debería conservar su referencia");
  });
});

// ============================================================================
// SUITE 3: MÉTODOS PUROS DE ARREGLOS (.map y .filter)
// ============================================================================
test('🟢 RETO 3: Transformación con .map() y .filter() (Renderizado de Listas)', async (t) => {
  await t.test('3.1 Genera tarjetas de aprendices con su key y estado académico', () => {
    const aprendices = [
      { id: 1, nombre: "Ana", ficha: "3314621", promedio: 4.5 },
      { id: 2, nombre: "Luis", ficha: "3314621", promedio: 3.1 }
    ];
    const tarjetas = generarTarjetasAprendices(aprendices);

    assert.deepEqual(tarjetas, [
      { key: "apr-1", etiqueta: "Ana (3314621)", estado: "APROBADO", puntaje: 4.5 },
      { key: "apr-2", etiqueta: "Luis (3314621)", estado: "EN REFUERZO", puntaje: 3.1 }
    ]);
  });

  await t.test('3.2 Filtra catálogo combinando criterios de stock, categoría, precio y búsqueda', () => {
    const catalogo = [
      { id: 1, nombre: "Café Orgánico Garzón", categoria: "Café", precio: 32000, stock: 10 },
      { id: 2, nombre: "Café Premium Reserva", categoria: "Café", precio: 55000, stock: 0 },
      { id: 3, nombre: "Fertilizante Eco", categoria: "Insumos", precio: 40000, stock: 8 },
      { id: 4, nombre: "Café Molido Tradicional", categoria: "Café", precio: 18000, stock: 25 }
    ];

    const filtrados = filtrarCatalogo(catalogo, {
      soloDisponibles: true,
      categoria: "Café",
      precioMaximo: 35000,
      busqueda: "garzón"
    });

    assert.equal(filtrados.length, 1);
    assert.equal(filtrados[0].id, 1);
  });

  await t.test('3.3 Obtiene arreglo de categorías únicas ordenadas alfabéticamente', () => {
    const productos = [
      { categoria: "Tecnología" },
      { categoria: "Agro" },
      { categoria: "Tecnología" },
      { categoria: "Café" }
    ];
    assert.deepEqual(obtenerCategoriasUnicas(productos), ["Agro", "Café", "Tecnología"]);
  });
});

// ============================================================================
// SUITE 4: REDUCE E INVENTARIOS
// ============================================================================
test('🟢 RETO 4: Acumuladores Complejos con .reduce()', async (t) => {
  await t.test('4.1 Calcula balance financiero completo con descuentos e IVA', () => {
    const pedido = [
      { nombre: "Portátil", precio: 2000000, cantidad: 1, descuento: 0.10 }, // Bruto 2.000.000, Desc 200.000
      { nombre: "Mouse", precio: 100000, cantidad: 2, descuento: 0 }        // Bruto 200.000, Desc 0
    ];
    const balance = calcularBalancePedido(pedido, 0.19);

    assert.deepEqual(balance, {
      subtotalBruto: 2200000,
      totalDescuentos: 200000,
      baseGravable: 2000000,
      ivaCalculado: 380000,
      totalNeto: 2380000,
      cantidadTotalUnidades: 3
    });
  });

  await t.test('4.2 Clasifica movimientos de caja y calcula saldo total', () => {
    const movs = [
      { id: 1, tipo: "INGRESO", monto: 500000 },
      { id: 2, tipo: "EGRESO", monto: 120000 },
      { id: 3, tipo: "INGRESO", monto: 300000 }
    ];
    const arqueo = procesarMovimientosCaja(movs);

    assert.equal(arqueo.ingresos.length, 2);
    assert.equal(arqueo.egresos.length, 1);
    assert.equal(arqueo.saldoTotal, 680000);
  });
});

// ============================================================================
// SUITE 5: ASINCRONÍA, PROMESAS Y PIPELINES
// ============================================================================
test('🟢 RETO 5: Asincronía, Async/Await y Pipelines Resilientes', async (t) => {
  await t.test('5.1 Simula llamada a API exitosa y fallida', async () => {
    const ok = await simularLlamadaApi({ ficha: 3314621 }, { debeFallar: false, latencia: 10 });
    assert.equal(ok.status, 200);
    assert.deepEqual(ok.data, { ficha: 3314621 });

    await assert.rejects(
      async () => await simularLlamadaApi(null, { debeFallar: true, latencia: 10 }),
      { message: "Error 500: Fallo de conexión con el servidor SENA" }
    );
  });

  await t.test('5.2 Ejecuta pipeline seguro capturando errores y entregando fallback', async () => {
    const exito = await ejecutarPipelineSeguro(() => simularLlamadaApi(["A", "B"], { latencia: 10 }), []);
    assert.deepEqual(exito, { exito: true, datos: ["A", "B"], error: null });

    const fallo = await ejecutarPipelineSeguro(
      () => simularLlamadaApi(null, { debeFallar: true, latencia: 10 }),
      ["Dato Por Defecto"]
    );
    assert.deepEqual(fallo, {
      exito: false,
      datos: ["Dato Por Defecto"],
      error: "Error 500: Fallo de conexión con el servidor SENA"
    });
  });

  await t.test('5.3 Sincroniza múltiples promesas separando exitosas y fallidas (Promise.allSettled)', async () => {
    const promesas = [
      Promise.resolve("Usuarios Cargados"),
      Promise.reject(new Error("Fallo Servicio Pagos")),
      Promise.resolve("Inventario Listo")
    ];
    const reporte = await sincronizarMultiplesFuentes(promesas);

    assert.deepEqual(reporte, {
      exitosos: ["Usuarios Cargados", "Inventario Listo"],
      fallidos: ["Fallo Servicio Pagos"]
    });
  });
});

