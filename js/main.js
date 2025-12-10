document.addEventListener('DOMContentLoaded', () => {

    const mostrarResultado = (ejercicioId, mensaje) => {
        const pResultado = document.querySelector(`#${ejercicioId} .resultado`);
        if (pResultado) {
            pResultado.textContent = mensaje;
            pResultado.style.backgroundColor = mensaje.includes('Error') ? '#800000' : '#003366';
            pResultado.style.color = mensaje.includes('Error') ? '#FFD4D4' : '#D4FFC4';
        }
    };

    const configurarEjercicio = (id, logicaFuncion) => {
        const boton = document.querySelector(`#${id} button`);
        if (boton) {
            boton.addEventListener('click', () => {
                logicaFuncion(id);
            });
        }
    };

    const ej1_calcularPresupuesto = (id) => {
        const personas = parseInt(document.getElementById('personas1').value);

        if (isNaN(personas) || personas <= 0) {
            mostrarResultado(id, "Error: Ingresa un número de personas válido.");
            return;
        }

        let costoTotal;
        let costoPorPersona;

        if (personas <= 20) {
            costoTotal = personas * 20.00;
        } else if (personas <= 50) {
            costoTotal = personas * 15.00;
        } else {
            costoTotal = personas * 10.00;
        }

        costoPorPersona = (costoTotal / personas).toFixed(2);

        mostrarResultado(id, `Personas: ${personas}. Costo Total: $${costoTotal.toFixed(2)}. Costo por persona: $${costoPorPersona}`);
    };

    const ej2_calcularDescuento = (id) => {
        const precio = parseFloat(document.getElementById('precio2').value);

        if (isNaN(precio) || precio <= 0) {
            mostrarResultado(id, "Error: Ingresa un precio válido.");
            return;
        }

        let descuento;
        let porcentajeDescuento;

        if (precio > 250000) {
            porcentajeDescuento = 0.15; 
        } else {
            porcentajeDescuento = 0.08; 
        }

        descuento = precio * porcentajeDescuento;
        const precioFinal = precio - descuento;

        mostrarResultado(id, `Precio Original: $${precio.toFixed(2)}. Descuento (${(porcentajeDescuento * 100)}%): $${descuento.toFixed(2)}. Precio Final: $${precioFinal.toFixed(2)}`);
    };

    const ej3_calcularHamburguesa = (id) => {
        const cantidad = parseInt(document.getElementById('cantidad3').value);
        const tipo = document.getElementById('tipo3').value;
        const pago = document.getElementById('pago3').value;

        if (isNaN(cantidad) || cantidad <= 0) {
            mostrarResultado(id, "Error: Ingresa una cantidad válida.");
            return;
        }

        let precioUnitario;
        switch (tipo) {
            case 'sencilla':
                precioUnitario = 20000;
                break;
            case 'doble':
                precioUnitario = 25000;
                break;
            case 'triple':
                precioUnitario = 28000;
                break;
            default:
                mostrarResultado(id, "Error: Tipo de hamburguesa no válido.");
                return;
        }

        let subtotal = cantidad * precioUnitario;
        let cargoTarjeta = 0;

        if (pago === 'tarjeta') {
            cargoTarjeta = subtotal * 0.05; 
            subtotal += cargoTarjeta;
        }

        mostrarResultado(id, `Tipo: ${tipo.toUpperCase()}. Total a pagar: $${subtotal.toFixed(2)}. Cargo por tarjeta: $${cargoTarjeta.toFixed(2)}.`);
    };

    const ej4_calcularEnvio = (id) => {
        const peso = parseFloat(document.getElementById('peso4').value);
        const zona = parseInt(document.getElementById('zona4').value);

        if (isNaN(peso) || peso <= 0 || isNaN(zona) || zona < 1 || zona > 5) {
            mostrarResultado(id, "Error: Ingresa peso (>0) y zona (1-5) válidos.");
            return;
        }

        let costoBase;
        switch (zona) {
            case 1: costoBase = 10000; break;
            case 2: costoBase = 15000; break;
            case 3: costoBase = 20000; break;
            case 4: costoBase = 25000; break;
            case 5: costoBase = 30000; break;
            default: return; 
        }

        const costoTotal = costoBase * peso;

        mostrarResultado(id, `Zona ${zona}. Peso: ${peso} kg. Costo Total: $${costoTotal.toFixed(2)}`);
    };

    const ej5_calcularGanancias = (id) => {
        const tipo = document.getElementById('tipo5').value;
        const tam = document.getElementById('tam5').value;
        const precioBase = parseFloat(document.getElementById('precio5').value);
        const kilos = parseFloat(document.getElementById('kilos5').value);

        if (isNaN(precioBase) || precioBase <= 0 || isNaN(kilos) || kilos <= 0) {
            mostrarResultado(id, "Error: Ingresa precios y kilos válidos (>0).");
            return;
        }

        let incremento = 0;

        if (tipo === 'P1') {
            incremento += 0.05; 
        } else if (tipo === 'P2') {
            incremento += 0.10; 
        }

        if (tam === '1') {
            incremento += 0.02; 
        } else if (tam === '2') {
            incremento += 0.04; 
        }

        const precioConIncremento = precioBase * (1 + incremento);
        const gananciaTotal = precioConIncremento * kilos;

        mostrarResultado(id, `Incremento Total: ${(incremento * 100).toFixed(0)}%. Precio final por kilo: $${precioConIncremento.toFixed(2)}. Ganancia Total: $${gananciaTotal.toFixed(2)}`);
    };


    const ej6_calcularAudifonos = (id) => {
        const cantidad = parseInt(document.getElementById('cantidad6').value);
        const precioUnitario = 50000;

        if (isNaN(cantidad) || cantidad <= 0) {
            mostrarResultado(id, "Error: Ingresa una cantidad válida.");
            return;
        }

        let descuento = 0;

        if (cantidad >= 10) {
            descuento = 0.40; 
        } else if (cantidad >= 5) {
            descuento = 0.20; 
        } else if (cantidad >= 2) {
            descuento = 0.10; 
        }

        const subtotal = cantidad * precioUnitario;
        const valorDescuento = subtotal * descuento;
        const totalPagar = subtotal - valorDescuento;

        mostrarResultado(id, `Cantidad: ${cantidad}. Descuento: ${(descuento * 100)}%. Total a pagar: $${totalPagar.toFixed(2)}.`);
    };

    const ej7_calcularSalario = (id) => {
        const horas = parseFloat(document.getElementById('horas7').value);
        const tarifa = parseFloat(document.getElementById('tarifa7').value);
        const horasNormales = 40;

        if (isNaN(horas) || horas <= 0 || isNaN(tarifa) || tarifa <= 0) {
            mostrarResultado(id, "Error: Ingresa horas y tarifa válidas (>0).");
            return;
        }

        let salarioBruto;
        let horasExtra = 0;
        let tarifaExtra = 0;

        if (horas > horasNormales) {
            horasExtra = horas - horasNormales;
            tarifaExtra = tarifa * 2; 
            salarioBruto = (horasNormales * tarifa) + (horasExtra * tarifaExtra);
        } else {
            salarioBruto = horas * tarifa;
        }

        mostrarResultado(id, `Horas Extra: ${horasExtra.toFixed(1)}. Tarifa Extra: $${tarifaExtra.toFixed(2)}. Salario Bruto Total: $${salarioBruto.toFixed(2)}.`);
    };

    const ej8_encontrarMayor = (id) => {
        const n1 = parseFloat(document.getElementById('n1_8').value);
        const n2 = parseFloat(document.getElementById('n2_8').value);
        const n3 = parseFloat(document.getElementById('n3_8').value);

        if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
            mostrarResultado(id, "Error: Ingresa tres números válidos.");
            return;
        }

        let mayor = n1;
        if (n2 > mayor) {
            mayor = n2;
        }
        if (n3 > mayor) {
            mayor = n3;
        }

        mostrarResultado(id, `Números ingresados: ${n1}, ${n2}, ${n3}. El número mayor es: ${mayor}`);
    };

    const ej9_clasificarLlanta = (id) => {
        const tipo = document.getElementById('tipo9').value.trim().toLowerCase();
        const grosor = parseFloat(document.getElementById('grosor9').value);
        const diam = parseFloat(document.getElementById('diam9').value);
        const marca = document.getElementById('marca9').value.trim().toLowerCase();

        if (grosor <= 0 || diam <= 0 || !tipo || !marca || isNaN(grosor) || isNaN(diam)) {
            mostrarResultado(id, "Error: Completa todos los campos con valores válidos (>0).");
            return;
        }

        let clasificacion = "Normal";

        if (diam > 1.4 && grosor < 0.4) {
            clasificacion = "Llanta de Alta Gama";
        } else if (diam > 1.4 && grosor >= 0.4) {
            clasificacion = "Llanta de Goma Reforzada";
        } else if (diam <= 1.4 && diam >= 1.2) {
            clasificacion = "Llanta de Mediana Gama";
        } else {
            clasificacion = "Llanta Básica";
        }

        if (marca === 'firestone' || marca === 'michelin') {
            clasificacion += ". Recomendación: ¡Excelente elección de marca!";
        }

        mostrarResultado(id, `Clasificación: ${clasificacion}`);
    };

    const ej10_parOImpar = (id) => {
        const num = parseInt(document.getElementById('num10').value);

        if (isNaN(num)) {
            mostrarResultado(id, "Error: Ingresa un número entero válido.");
            return;
        }

        const resultado = (num % 2 === 0) ? "PAR" : "IMPAR";

        mostrarResultado(id, `El número ${num} es: ${resultado}`);
    };

    const ej11_calcularIMC = (id) => {
        const peso = parseFloat(document.getElementById('peso11').value);
        const altura = parseFloat(document.getElementById('altura11').value);

        if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
            mostrarResultado(id, "Error: Ingresa peso y altura válidos (>0).");
            return;
        }

        const imc = peso / (altura * altura);
        let categoria = "";

        if (imc < 18.5) {
            categoria = "Bajo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            categoria = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            categoria = "Sobrepeso";
        } else {
            categoria = "Obesidad";
        }

        mostrarResultado(id, `IMC: ${imc.toFixed(2)}. Clasificación: ${categoria}`);
    };
    
    const ej12_clasificarTemperatura = (id) => {
        const temp = parseFloat(document.getElementById('temp12').value);

        if (isNaN(temp)) {
            mostrarResultado(id, "Error: Ingresa una temperatura válida.");
            return;
        }

        let clasificacion = "";

        if (temp <= 0) {
            clasificacion = "Congelación";
        } else if (temp > 0 && temp <= 15) {
            clasificacion = "Frío";
        } else if (temp > 15 && temp <= 25) {
            clasificacion = "Templado";
        } else if (temp > 25 && temp <= 35) {
            clasificacion = "Cálido";
        } else {
            clasificacion = "Extremadamente Caluroso";
        }

        mostrarResultado(id, `Temperatura: ${temp}°C. Condición: ${clasificacion}`);
    };
    
    const ej13_tipoTriangulo = (id) => {
        const l1 = parseFloat(document.getElementById('l1_13').value);
        const l2 = parseFloat(document.getElementById('l2_13').value);
        const l3 = parseFloat(document.getElementById('l3_13').value);

        if (isNaN(l1) || l1 <= 0 || isNaN(l2) || l2 <= 0 || isNaN(l3) || l3 <= 0) {
            mostrarResultado(id, "Error: Ingresa los tres lados con valores válidos (>0).");
            return;
        }

        if (l1 + l2 <= l3 || l1 + l3 <= l2 || l2 + l3 <= l1) {
            mostrarResultado(id, "¡Error! Los valores no forman un triángulo válido.");
            return;
        }

        let tipo = "";
        if (l1 === l2 && l2 === l3) {
            tipo = "Equilátero (Todos los lados iguales)";
        } else if (l1 === l2 || l1 === l3 || l2 === l3) {
            tipo = "Isósceles (Dos lados iguales)";
        } else {
            tipo = "Escaleno (Todos los lados diferentes)";
        }

        mostrarResultado(id, `Tipo de triángulo: ${tipo}`);
    };

    const ej14_nivelesRiesgo = (id) => {
        const nivel = parseInt(document.getElementById('riesgo14').value);

        if (isNaN(nivel) || nivel < 1 || nivel > 5) {
            mostrarResultado(id, "Error: Ingresa un nivel de riesgo entre 1 y 5.");
            return;
        }

        let descripcion = "";

        switch (nivel) {
            case 1:
                descripcion = "Riesgo Mínimo: No requiere medidas especiales.";
                break;
            case 2:
                descripcion = "Riesgo Bajo: Monitoreo periódico recomendado.";
                break;
            case 3:
                descripcion = "Riesgo Moderado: Intervención preventiva necesaria.";
                break;
            case 4:
                descripcion = "Riesgo Alto: Requiere intervención inmediata y continua.";
                break;
            case 5:
                descripcion = "Riesgo Crítico: Se debe suspender la actividad.";
                break;
            default:
                descripcion = "Nivel no reconocido.";
        }

        mostrarResultado(id, `Nivel ${nivel}: ${descripcion}`);
    };

    
    configurarEjercicio('ej1', ej1_calcularPresupuesto);
    configurarEjercicio('ej2', ej2_calcularDescuento);
    configurarEjercicio('ej3', ej3_calcularHamburguesa);
    configurarEjercicio('ej4', ej4_calcularEnvio);
    configurarEjercicio('ej5', ej5_calcularGanancias);
    configurarEjercicio('ej6', ej6_calcularAudifonos);
    configurarEjercicio('ej7', ej7_calcularSalario);
    configurarEjercicio('ej8', ej8_encontrarMayor);
    configurarEjercicio('ej9', ej9_clasificarLlanta);
    configurarEjercicio('ej10', ej10_parOImpar);
    configurarEjercicio('ej11', ej11_calcularIMC);
    configurarEjercicio('ej12', ej12_clasificarTemperatura);
    configurarEjercicio('ej13', ej13_tipoTriangulo);
    configurarEjercicio('ej14', ej14_nivelesRiesgo);

});