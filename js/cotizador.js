///obtengo datos de cantidad de boletos comprados
var cantDia= document.getElementById('pase_dia');
var cantCompleto=document.getElementById('pase_completo');
var cantDosDias=document.getElementById('pase_dosdias');
var cantCamiseta=document.getElementById('camisa_evento');
var cantEtiquetas=document.getElementById('etiquetas');
///obtengo datos de precio 
var precioun=document.getElementById('p_undia');
var precioComp=document.getElementById('p_completo');
var precioDosD=document.getElementById('p_dosdias');
var precioEt=document.getElementById('p_etiq');


var probandoBoton = document.getElementById('calcular')
///llamada a boton calcular
probandoBoton.addEventListener('click', calcularTodo)


var valorDiv=document.getElementById('suma-total')

///Creo items/ Listas de productos
var items = document.getElementsByClassName('list-group-item')


function calcularTodo(){
    console.log("llamada a boton")
   ///guardo la cantidad comprada
    var cantDiaC=Number(cantDia.value)
    console.log("Cantidad de Pases para Un dia: " + cantDiaC)
    var cantCompletoC=Number(cantCompleto.value)
    console.log("Cantidad de Pases para Dia Completo: " + cantCompletoC)
    var cantDosDiasC=Number(cantDosDias.value)
    console.log("Cantidad de Pases para Dos Dias: " + cantDosDiasC)
    var cantCamisetaC=Number(cantCamiseta.value)
    console.log("Cantidad de Camisetas: " + cantCamisetaC)
    var cantEtiquetasC=Number(cantEtiquetas.value)
    console.log("Cantidad de Etiquetas: " + cantEtiquetasC)

    //guardo precios unitarios
    console.log("PRECIOS UNITARIOS")
    var precioDia=Number(precioun.value)
    console.log("Precio de Pase por un dia: $" + precioDia)
    var precioCompleto=Number(precioComp.value)
    console.log("Precio de Pase Completo: $" + precioCompleto)
    var precioDosDias=Number(precioDosD.value)
    console.log("Precio de Dos Dias: $" + precioDosDias)
    const camisetapreciodesc=(10*93)/100
    console.log("Precio de Camisetas con 10% de descuento: $" + camisetapreciodesc)
    var precioEtiquetas=Number(precioEt.value)
    console.log("Precio de Camisetas: $" + precioEtiquetas)
///guardo precios totales de cada unidad segun cantidad comprada
    console.log("Precio Total: ")
    var cantDiaV=Number(cantDia.value)*precioDia
    console.log("Precio Total de pase por un dia: $" + cantDiaV)
    var cantCompletoV=Number(cantCompleto.value)*precioCompleto
    console.log("Precio Total de pase completo: $" + cantCompletoV)
    var cantDosDiasV=Number(cantDosDias.value)*precioDia
    console.log("Precio Total de pase por dos dias: $" + cantDosDiasV)
    var cantCamisetaV=Number(cantCamiseta.value)*parseFloat(camisetapreciodesc)
    console.log("Precio Total de camisetas: $" + cantCamisetaV)
    var cantEtiquetasV=Number(cantEtiquetas.value)*precioEtiquetas
    console.log("Precio Total de etiquetas: $" + cantEtiquetasV)

   ///sumo toda la compra
    var totalPagar=cantDiaV+cantCompletoV+cantDosDiasV+cantCamisetaV+cantEtiquetasV
    console.log("Precio total a pagar: $"+totalPagar)
    
    ///guardo la opcion seleccionada de regalo
    var val=document.getElementById('regalo')
    var valchar
    if(val.value==2){
    valchar='Etiquetas'
    }
    else{
        if(val.value==1){
        valchar='Pulseras'
        }
        else{
            if(val.value==3){
            valchar='Plumas'
            }
            else{
                ///si no eligio regalo, se dispara alert
                alert("No eligio regalo")
                valchar="No eligio regalo"
            }
    }
    }
console.log("Regalo elegido: " + valchar)
///Agrego contenido a items / lista de productos comprados y el regalo
    items[0].textContent = 'Boletos Pase Un Dia :  ' + cantDiaC + ' * $' + precioDia +  ' ------------ $' + cantDiaV
    items[1].textContent = 'Boletos Pase Completo :  ' + cantCompletoC + ' * $' + precioCompleto +  ' ------------ $' + cantCompletoV
    items[2].textContent = 'Boletos Dos Dias :  ' + cantDosDiasC + ' * $' + precioDosDias +  ' ------------ $' + cantDosDiasV
    items[3].textContent = 'Boletos para Un dia (Viernes) :  ' + cantCamisetaC + ' * $' + parseFloat(camisetapreciodesc) +  ' ------------ $' + cantCamisetaV
    items[4].textContent = 'Boletos para Un dia (Viernes) :  ' + cantEtiquetasC + ' * $' + precioEtiquetas +  ' ------------ $' + cantEtiquetasV
    items[5].textContent = 'Boletos para Un dia (Viernes) :  ' + valchar + ' ------------  $0 '
    
    ///muestro por consola el resumen
    console.log("RESUMEN: ")
    for(var i=0;i<items.length;i++){

    console.log(items[i])
    
    
    }

    ///agrego el resultado del total a pagar 
    valorDiv.textContent= "$" + totalPagar
    console.log(valorDiv)

}
