/*
function showAlert() { alert('¡Hola, esta es un alerta desde JavaScript!');}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
});
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
    }
    function validateForm() {
    const emailInput = document.getElementById('email');
    const inputvalue = input.value;
    if (!validateEmail(inputvalue)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
}
  */  
function showAlert() {
    alert("hola, este es mi primer alerta desde javascrip")
 }
 
 
 const form = document.getElementById("myForm");
 form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    validateForm();
  })
 
  function validateEmail(email) { 
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
     return regex.test(email) 
    } 
     
     
    function validateForm() { 
    const input = document.getElementById('email');
    const inputvalue = input.value; 
    
          if (!validateEmail(inputvalue)) { 
              alert('POR favor ingrese un correo electrónico válido.'); 
             }
              else { 
                  alert('Correo electrónico enviado correctamente.');
                  } }