//* .forEach() para cada uno de los elementos
// imprimir los nombres de una lista

var personas = [dasdas,dasda,asdasd];
personas.forEach((persona) =>{
	console.log(persona)
});

var saludos = {
    mensaje: "hola ",
    saludar: function(persona) {
        console.log(`$this messaje`)
    } };
1
persona.forEach(function(persona){
    this.saludar(persona);
},saludos);

//*.every() suma todo
var nums = [12,23,32,32];
var mayorAdiez = nums.every((numero)=> numero > 10);
console.log(mayorAdiez);

//*.map()
var numeros = [2,3,4];
var dobles= numeros.map((numero)=> numero * 2 );
console.log(dobles);

//*.reduce() sumar numeros
//todo: ejemplo: en carritos 
var n = [1,2,3,4];
var suma = numeros.redice((acumulador,numero)=> acumulador + numero, 0);  //inicializa en 0
console.log(suma);

//*.reduceRight()
//*concatena un alrreglo de der a izq
var palabras = ["uno","dos","tres","cuatro"];
var resultado = palabras.reduceRight((acumulador, palabra)=>acumulador + "" + palabra);
console.log(resultado);