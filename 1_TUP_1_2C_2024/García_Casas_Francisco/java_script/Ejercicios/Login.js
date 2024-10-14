/* Solicitar al usuario ingresar una contraseña.
El programa verificara si la clave ingresada coincide con una
clave predefinida, 
Si la clave es incorrecta, se le permitira al usuario intentarlo nuevamente
pero se le informara despues de tres intentos fallidos.
*/
var password = "123.asd";
var contador = 0; 

do{
    var passwordin = prompt("login ");
    if (passwordin == password){
        alert("login sucess");          //alert similar to console.log
        break; 
    }else{
        alert("password incorrect");
    }
    contador++
}while(contador < 3);

console.log("thats not ur account")