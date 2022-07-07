let nombre
let cantidad = 0
let salario = 0 
let SAextra = 0

let formulario =  document.getElementById('form');

formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    LeerDatos()
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    cantidad = Number(document.getElementById('Horas').value)
    ValidarDatos (nombre, cantidad)
    
}

function ValidarDatos (nombre, cantidad){
    if(isNaN(nombre)==true || isNaN(cantidad)==false || nombre.length || )
            
}