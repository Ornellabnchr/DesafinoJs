
var cantDia= document.getElementById('pase_dia');
var cantCompleto=document.getElementById('pase_completo');

var cantDosDias=document.getElementById('pase_dosdias');

var cantCamiseta=document.getElementById('camisa_evento');

var cantEtiquetas=document.getElementById('etiquetas');

var camisetapreciodesc=(10*93)/100
var probandoBoton = document.getElementById('calcular')
probandoBoton.addEventListener('click', calcularTodo)

var valorDiv1 = document.getElementById('lista-productos');
var valorDiv=document.getElementById('suma-total')

var probandoBoton1 = document.getElementById('regalo')
probandoBoton1.addEventListener('click', probar)

function probar(){

    

}
function calcularTodo(){

   
    
    var cantDiaV=Number(cantDia.value)*30
    var cantCompletoV=Number(cantCompleto.value)*50
    var cantDosDiasV=Number(cantDosDias.value)*45
    var cantCamisetaV=Number(cantCamiseta.value)*parseFloat(camisetapreciodesc)
    var cantEtiquetasV=Number(cantEtiquetas.value)*2

   
    var totalPagar=cantDiaV+cantCompletoV+cantDosDiasV+cantCamisetaV+cantEtiquetasV
    let lis=['Cantidad de Boletos para Un dia (Viernes) :              ' + cantDia.value , '|Cantidad de Boletos para TODOS los dias :                ' + cantCompleto.value , ' |   Cantidad de Boletos para DOS dias :                ' + cantDosDias.value , ' | Cantidad de Camiseta :                 ' + cantCamiseta.value,  '|   Cantidad de Etiquetas : ' + cantEtiquetas.value]
    var val=document.getElementById('regalo')
    var valchar
    if(val.value==2){
valchar='Etiquetas'
    }
   else{ if(val.value==1){
    valchar='Pulseras'
    }
    else{
    if(val.value==3){
        valchar='Plumas'
    }
}}
    valorDiv1.style.display = "block";
    valorDiv1.textContent= lis + '|    Tambien lleva de regalo : ' + valchar
    console.log(valorDiv1)
    
    
    valorDiv.textContent= "$" + totalPagar
    console.log(valorDiv)

   

}
