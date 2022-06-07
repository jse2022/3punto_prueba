import "./styles.css";
/**
 * 3. Detecte cuales son los errores en la siguiente función y reescriba la misma con los errores corregidos. 
 *  Esta función multiplica aquellos valores ingresados por el usuario, que están entre un numero mínimo y un numero máximo.
 *  La cantidad de valores que va a ingresar el usuario están determinados por el parámetro cantNum. Si un valor ingresado por 
    el usuario esta fuera del rango, no se agrega a la multiplicación pero es considerado como un intento. Si la función no multiplica nada,
    el resultado a devolver es 1.
 */

function multiplicarEntreNumeros(min: number, max: number, cantNum: number) {
  let resultado: number = 1;
  let numeroIngresado: number;
  let i: number = 0;

  while (i < cantNum) {
    numeroIngresado = Number(prompt(`ingrese un numero entre ${min} y ${max}`));
    if (numeroIngresado >= min && numeroIngresado <= max) {
      resultado = numeroIngresado * resultado;
    }
    i++;
  }
  console.log(`Resultado de multiplicacion: ${resultado}`);
}

multiplicarEntreNumeros(1, 5, 3);
