// Definimos los parametros solicitados con un input (usamos prompt) al usuario antes de comenzar a trabajar.
const objetivo = parseInt(prompt("A que numero objetivo desea llegar?"));
let candidatos = prompt("Establezca sus candidatos en un numero corrido y sin duplicados: ");

//Declaramos funciones para resolver el problema

// Usamos una función con n como variable de los candidatos para verificar que los datos dados por el usuario son correctos es decir sin duplicados
const noDuplicados = (n) => {
    let set = new Set(n);
    return set.size === n.length;
};

// Llamamos a la funcion y verificamos si continua el programa o no se cumplio la condicion de no duplicados
if (noDuplicados(candidatos)) {
    console.log("Los datos son correctos.");
} else {
    console.error("Los datos no son correctos.");
    throw new error("Se detendra la ejecucion");
}
// Antes de usar la logica almacenamos el arreglo de los numeros candidatos usando una funcion 
function arregloCandidatos(candidatos){
return candidatos.split('').map(numero => parseInt(numero));
}

let arrCandidatos = arregloCandidatos(candidatos);

//Funcion con la logica para resolver.
function combinaciones (arrCandidatos, objetivo) {
    let sumatoria = []; // Variable arreglo que acumulara todas las combinaciones 

    function buscadorCombinaciones(inicio, cifras, suma) { //Funcion anidada para ciclar la busqueda de combinaciones.
        if (suma === objetivo) { // Suma es la variable control en cuanto llegue al valor exacto de objetivo se detiene la funcion 
            sumatoria.push([...cifras]); //Metodo push para enviar una copia del array actual por eso se usa el metodo de propagacion ... asi evitamos tocar la variable cifras.
            return;
        }

        for (let i = inicio; i < arrCandidatos.length; i++) {
            if (suma + arrCandidatos[i] > objetivo) continue; // Se usa la sentencia continue para omitir esa iteracion del ciclo solo si se cumple que suma (variable control) mas el elemento actual pasan el objetivo 
            cifras.push(arrCandidatos[i]); //En caso de no cumplir el valor del target se añade el elemento actual con el metodo push
            buscadorCombinaciones(i, cifras, suma + arrCandidatos[i]); //Esto es lo que permite resolver la problematica ya que se usa la recursividad de funciones para buscar todas las combinaciones 
            cifras.pop(); // Se elimina el ultimo valor del array para que el estado del arreglo permita buscar otra combinacion sin errar por el ultimo añadido
        }
    }

    buscadorCombinaciones(0, [], 0); //Restablece valores iniciales para buscar combinaciones nuevamente. 
    return sumatoria; //Arreglo con combinaciones buscadas.
}

// Llamamos a la funcion 
console.log(combinaciones(arrCandidatos,objetivo)); 
