const formulario = document.getElementById("Form");
const inputs = document.querySelectorAll('#Form input');
const clave1 = /^[^><]{16}$/
const clave2 = /^[^><]{24}$/
const clave3 = /^[^><]{32}$/
const name = /^[^><1-9\W]+$/
const correo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
const pass = /^[^><]+$/
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
            if(name.test(e.target.value)||e.target.value==undefined){
                document.getElementById("ErrornameC").style.display="none";
                    if(e.target.value.length<3){
                        document.getElementById("Errorname-").style.display="block";
                        
                        }else{
                            if(e.target.value.length>30){
                                document.getElementById("Errorname+").style.display="block";
                            }else{
                                document.getElementById("Errorname+").style.display="none";
                            }
                        document.getElementById("Errorname-").style.display="none";
                        }
            }else{
                if(e.target.value.length==0){
                    document.getElementById("Errorname-").style.display="block";
                    document.getElementById("ErrornameC").style.display="none";
                }else{
                    document.getElementById("ErrornameC").style.display="block";
                    document.getElementById("Errorname-").style.display="none";            
                }
            }
            
        break;
        case "Correo":
            if(correo.test(e.target.value)||e.target.value==undefined){
                document.getElementById("Errorcorreo").style.display="none";
            
                }else{
                document.getElementById("Errorcorreo").style.display="block";
            
                }
        break;
        case "Pass":
            if(pass.test(e.target.value)){
                document.getElementById("ErrorpassC").style.display="none";
                if(e.target.value.length<7){
                    document.getElementById("Errorpass-").style.display="block";
                    
                    }else{
                        if(e.target.value.length>32){
                            document.getElementById("Errorpass+").style.display="block";
                        }else{
                            document.getElementById("Errorpass+").style.display="none";
                        }
                    document.getElementById("Errorpass-").style.display="none";
                    }
            }else{
                if(e.target.value.length==0){
                    document.getElementById("Errorpass-").style.display="block";
                    document.getElementById("ErrorpassC").style.display="none";
                }else{
                    document.getElementById("ErrorpassC").style.display="block";
                    document.getElementById("Errorpass-").style.display="none";            
                }
            }
        break;
        case "Pass2":
            if(e.target.value==document.getElementById("Pass").value||e.target.value==undefined){
                document.getElementById("Errorpass2").style.display="none";
            
                }else{
                document.getElementById("Errorpass2").style.display="block";
            
                }
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

