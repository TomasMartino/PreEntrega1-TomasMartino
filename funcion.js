

const tiposDeCambio = {
      USD: { EUR: 0.88, GBP: 0.76, JPY: 109.23 },//dolares
      EUR: { USD: 1.13, GBP: 0.86, JPY: 123.45 },//euros
      GBP: { USD: 1.31, EUR: 1.16, JPY: 142.91 },//libras
      JPY: { USD: 0.0091, EUR: 0.0081, GBP: 0.0070 },//yenes

    };
function obtenerMonedas() {
  const monedasPermitidas = ["USD", "EUR", "GBP", "JPY"];
  let monedaOrigen;
  let monedaDestino;
  while (true) {
    monedaOrigen = prompt("Ingrese la moneda de origen (USD, EUR, GBP, JPY): ").toUpperCase();
    if (monedasPermitidas.includes(monedaOrigen)) {
      break;
    }
    console.log("Moneda no válida. Por favor, ingrese uno de los siguientes valores: USD, EUR, GBP, JPY");
  }
  while (true) {
    monedaDestino = prompt("Ingrese la moneda de destino (USD, EUR, GBP, JPY): ").toUpperCase();
    if (monedasPermitidas.includes(monedaDestino)) {
      break;
    }
    console.log("Moneda no válida. Por favor, ingrese uno de los siguientes valores: USD, EUR, GBP, JPY");
  }
  return { monedaOrigen, monedaDestino };
}

function convertirMoneda(monto, monedaOrigen, monedaDestino) {
    if (!tiposDeCambio[monedaOrigen] || !tiposDeCambio[monedaOrigen][monedaDestino]) {
      return resultado = "Moneda no válida";
    }
    const tipoDeCambio = tiposDeCambio[monedaOrigen][monedaDestino];
    const montoConvertido = monto * tipoDeCambio;
    return montoConvertido;
}

function obtenerMonto() {
  const monto = parseFloat(prompt("Ingrese el monto a convertir: "));
  return monto;
}

function mostrarMenu() {
  console.log("Conversor de monedas");
  
  console.log("--------------------");
  console.log("1. Convertir moneda");
  console.log("2. Salir");
}

interruptor = true;
while (interruptor === true) {
  mostrarMenu();
  const opcion = prompt("Ingrese su opción(Opciones por consola): ");
  switch (opcion) {
    case "1":
      const { monedaOrigen, monedaDestino } = obtenerMonedas();
      const monto = obtenerMonto();
      const resultado = convertirMoneda(monto, monedaOrigen, monedaDestino);
      if (resultado === "Moneda no válida") {
        console.log("Moneda no válida");
      }else{
        console.log(`${monto} ${monedaOrigen} es igual a ${resultado} ${monedaDestino}`);

      }
      break;
    case "2":
      console.log("Hasta luego!");
      interruptor = false;
      console.log("Programa finalizado");
      break;
    default:
      console.log("Opción no válida");
      interruptor = false;
      console.log("Programa finalizado");
        
  }
}