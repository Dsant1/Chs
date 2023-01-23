/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function soloNumeros(array) {
   var arr=[];

  var revisar= function (elemento){
    return typeof(elemento);
  }
  var pushear = function (elemento){
    arr.push(elemento);
  }

  for (var i = 0 ; i <array.length;i++){
    if (revisar(array[i])=='number'){
      pushear(array[i]);
    }
  }

  return arr;

  // La funcion llamada 'soloNumeros' recibe como argumento un arreglo de enteros y strings llamado 'array'.
  // Debe devolver un arreglo con solo los enteros.
  // Ej: 
  // soloNumeros([1, 'Henry', 2]) debe retornar [1, 2]

  // Tu código aca:

}

// No modifiques nada debajo de esta linea //


module.exports = soloNumeros