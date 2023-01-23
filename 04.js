/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function numeroSimetrico(num) {
   
  var a =[];
  a = Array.from(String(num));
  var na=[];
  for (let i = a.length-1;i>=0;i--){
    na.push(a[i]);
  }

  if (Number(na.join(""))=== num){
    return true;
  }
  return false;

}


// No modifiques nada debajo de esta linea //

module.exports = numeroSimetrico