const formulario = document.getElementById("Form");
const inputs = document.querySelectorAll('#Form input');
const clave1 = /^[^><]{16}$/
const clave2 = /^[^><]{24}$/
const clave3 = /^[^><]{32}$/
const name = /^[^><1-9\W]{3,30}$/
const correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const pass = /^[^><]{3,32}$/
var estandar =/^[^><]{16}$/
const text = /^[^<>]*$/

function SelectionType(){
var tipo = document.querySelector('input[name="Tipo"]:checked').value;
    switch(tipo){
        case "128":
            
            document.getElementById('p16').style.display='block'
            document.getElementById('p32').style.display='none'
            document.getElementById('p24').style.display='none'
            estandar= clave1
        break;
        case "192":
            
            document.getElementById('p24').style.display='block'
            document.getElementById('p16').style.display='none'
            document.getElementById('p32').style.display='none'
            estandar= clave2
        break;
        case "256":
            document.getElementById('p32').style.display='block'
            document.getElementById('p16').style.display='none'
            document.getElementById('p24').style.display='none'
            estandar= clave3
        break;
    }
    return estandar
}



const validar = (e)=>{
    console.log(e.target.name);
    switch(e.target.name){
        case "Name":
            
        break;
        case "Correo":

        break;
        case "Pass":

        break;
        case "Pass2":

        break;
        default:
            if(estandar.test(e.target.value)||e.target.value==undefined){
                document.getElementById("Errortext").style.display="none";
            
                }else{
                document.getElementById("Errortext").style.display="block";
            
                }
    }        
}

inputs.forEach((input)=>{ 
        input.addEventListener('keyup',validar);
        input.addEventListener('blur', validar)
 })

