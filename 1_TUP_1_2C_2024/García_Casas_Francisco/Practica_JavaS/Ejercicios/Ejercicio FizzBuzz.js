for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {   //  "%"= este operador comprueba si es multiplo de 3 o 5.
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }  


  // "%"; devuelve el resto de la división de un número entre otro.
  //      "i = 15 ---> i % 3 --resto--> 0 ; 15/3 = 5 con resto 0; 15 es múltiplo de 3."