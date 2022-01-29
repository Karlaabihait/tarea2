
let levi = document.getElementById('levi')
let luna = document.getElementById('luna')
let pregunta2 = document.getElementById('pregunta-2')
let contenido = document.getElementById('contenido')

let luna2 =document.getElementById('luna2')
let luna3 = document.getElementById('luna3')




levi.addEventListener('click',()=>{
    alert("Respuesta correcta , pasas a la siguiente sección")
    pregunta2.classList.remove('d-none')
    if (pregunta2.classList.contains('d-none')) {
        alert('No se va a ejecutar')
 }else{
contenido.classList.add('d-none')}
})

luna.addEventListener('click',()=>{
    alert('Respuesta incorrecta, ¡No sigues en el proceso!')
    luna.style.opacity = 0.2
})

luna3.addEventListener('click',()=>{
    alert("Respuesta correcta , pasas a la siguiente sección")
    pregunta2.classList.remove('d-none')
    if (pregunta2.classList.contains('d-none')) {
        alert('No se va a ejecutar')
        
 }else{
contenido.classList.add('d-none')}
})
luna2.addEventListener('click',()=>{
    alert('Respuesta incorrecta, ¡No sigues en el proceso!')
    luna2.style.opacity = 0.2
})
let datos =document.getElementById("datos")
//funcion
const nombreUsuario = () =>{
//let local
let nombre = prompt("Ingresa tu Nombre");

//let nombreados = "valen"
}; 
// console.log(nombretres);
//numero="mary";
//console.log(numero);

//funcion vacia
//eventos (onclick desde javascript)
datos.onclick=function(){
    nombreUsuario();
};


