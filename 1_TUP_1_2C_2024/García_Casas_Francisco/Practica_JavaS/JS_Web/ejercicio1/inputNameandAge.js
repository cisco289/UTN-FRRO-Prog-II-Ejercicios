/* 1.Crear un fomulario que permita al usuario ingresar nombre y edad 2. Al hacer clic en un boton, 
    convierte los datos en cadena JSON y mostrarla por consola 3.
 Luego convertir esa cadena de nuevo en un objeto y mostrar el nombre del usuario en la pagina */


// Get the form and button elements
const form = document.getElementById('user-form');
const submitBtn = document.getElementById('submit-btn');
const userNamePara = document.getElementById('user-name');

// Add an event listener to the submit button
submitBtn.addEventListener('click', (e) => {
  // Prevent the default form submission behavior
e.preventDefault();

  // Get the input values
const name = document.getElementById('name').value;
const age = document.getElementById('age').value;

  // Create an object to store the user's data
const userData = {
    name,
    age
};

  // Convert the object to a JSON string
const jsonString = JSON.stringify(userData);

  // Log the JSON string to the console
console.log(jsonString);

  // Convert the JSON string back to an object
const userDataObj = JSON.parse(jsonString);

  // Display the user's name on the page
userNamePara.textContent = `Hello, ${userDataObj.name}!`;
});


//1.We create a form with input fields for name and age, and a submit button.
//2.We add an event listener to the submit button to prevent the default form submission behavior and get the input values.
//3.We create an object to store the user's data and convert it to a JSON string using JSON.stringify().
//4.We log the JSON string to the console.
//5.We convert the JSON string back to an object using JSON.parse().
//6.We display the user's name on the page by updating the paragraph element's text content.
