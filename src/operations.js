let pares = (x) => {
    let resp = ""
    if (x<2){
     resp="Los numeros son: 0"
     return resp
    }

   resp = "Los numeros son hola:"
   let i = 0;
   do {
   if ( i % 2 == 0){
    resp = resp + ` ${i}`
   }   
   i = i + 1;
   } while (i <= x);

    return resp;
 }

module.exports={
    pares,
}
