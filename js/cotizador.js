///obtengo datos de cantidad de boletos comprados
var cantDia= document.getElementById('pase_dia');
var cantCompleto=document.getElementById('pase_completo');
var cantDosDias=document.getElementById('pase_dosdias');
var cantCamisa=document.getElementById('camisa_evento');
var cantEtiquetas=document.getElementById('etiquetas');
///obtengo datos de precio 
var precioun=document.getElementById('p_undia');
var precioComp=document.getElementById('p_completo');
var precioDosD=document.getElementById('p_dosdias');
var precioCa=document.getElementById('p_rem');
var precioEt=document.getElementById('p_etiq');


var probandoBoton = document.getElementById('calcular')
///llamada a boton calcular
probandoBoton.addEventListener('click', calcularTodo)


var valorDiv=document.getElementById('suma-total')
 //contador para contar la cantidad de veces que se llamo al evento probando boton mientra esta en la misma sesion 
var contador=0;
console.log(contador)


    function calcularTodo(){
        console.log("llamada a boton")
       //cuento click    
         contador++;

         //guardo la cantidad comprada
        var cantDiaC=Number(cantDia.value)
        console.log("Cantidad de Pases para Un dia: " + cantDiaC)
        var cantCompletoC=Number(cantCompleto.value)
        console.log("Cantidad de Pases para Dia Completo: " + cantCompletoC)
        var cantDosDiasC=Number(cantDosDias.value)
        console.log("Cantidad de Pases para Dos Dias: " + cantDosDiasC)
        var cantCamisaC=Number(cantCamisa.value)
        console.log("Cantidad de Camisas: " + cantCamisaC)
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
        const camisapreciodesc=((precioCa.value)*93)/100
        console.log("Precio de Camisas con 10% de descuento: $" + camisapreciodesc)
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
        var cantCamisaV=Number(cantCamisa.value)*parseFloat(camisapreciodesc)
        console.log("Precio Total de camisas: $" + cantCamisaV)
        var cantEtiquetasV=Number(cantEtiquetas.value)*precioEtiquetas
        console.log("Precio Total de etiquetas: $" + cantEtiquetasV)
    
       ///sumo toda la compra
        var totalPagar=cantDiaV+cantCompletoV+cantDosDiasV+cantCamisaV+cantEtiquetasV
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
    
    console.log("Regalo elegido: " + valchar);
    console.log("-------------------------------------------------------------------------------")
    ///array donde guardo strings para insertar en listas
    var prod=[6]
   
     
    
    prod[0]=String(('Boletos Pase Por Dia :  ') + cantDiaC + (' U * $') + precioDia +  (' ------------ $') + cantDiaV);
    prod[1]=String(('Boletos Pase Completo :  ') + cantCompletoC + (' U * $') + precioCompleto +  (' --------- $') + cantCompletoV)
    prod[2]=String(('Boletos Dos Dias :  ') + cantDosDiasC + (' U * $') + precioDosDias +  (' ------------ $') + cantDosDiasV);
    prod[3]=String(('Camisas : (7% de descuento) ' )+ cantCamisaC + (' U * $') + parseFloat(camisapreciodesc) +  (' --------- $') + cantCamisaV)
    prod[4]=String(('Etiquetas :  ') + cantEtiquetasC + (' U * $') + precioEtiquetas +  (' ------------ $') + cantEtiquetasV);
    prod[5]=String(('Regalo:  ') + valchar );
    
     //array donde guardo la cantidad de elementos comprados de casa producto
     var compra=[6];

    compra[0]=Number(cantDiaC) 
    compra[1]=Number(cantCompletoC) 
    compra[2]=Number(cantDosDiasC)
    compra[3]=Number(cantCamisaC) 
    compra[4]=Number(cantEtiquetasC)
    compra[5]=1

    ///si es el primer click, sucedera esto, se crea todo por primera vez
    if(contador==0){
       
     //Tomo en valorDiv a lista-productos
     var valorDiv=document.getElementById("lista-productos")
     //tomo el valor de ul "list" del documento
     var list = document.getElementById("list")
     //asigno list ul como hijo de lista-productos
     valorDiv.appendChild(list)
     //creo hijos de list ul = lista li
  
      
        ///con un for recorro el array de las compras
    for(var j=0;j<6;j++){
        //si la cantidad de la compra es mayor que 0
               if(compra[j]>0){
                   ///creo elemento lista
                var itemlist = document.createElement("li")
                   ///relleno el itemlist lista
                itemlist.textContent=prod[j]
                ///asigno itemlist como hijo de list li -hijo de ul
                list.appendChild(itemlist)
                ///muestro en consola uno de los productos comprados
                console.log(itemlist)
            }
    }
    
    //tomo al hijo y al padre
    
    console.log("-------------------------------------------------------------------------------")
    var valorDiv=document.getElementById("suma-total")
    valorDiv.textContent= "$" + totalPagar
    console.log(valorDiv)
   
    }
    ///si no es el primer click
    else{
        ///tomo al elemento padre "list" ul
        var list = document.getElementById("list");
        //mientras que el elemento padre tenga hijos, removerlos
        while (list.hasChildNodes()){ list.removeChild(list.lastChild); }
          //Tomo en valorDiv a lista-productos
     var valorDiv=document.getElementById("lista-productos")
     //tomo el valor de ul "list" del documento
     var list = document.getElementById("list")
     //asigno list ul como hijo de lista-productos
     valorDiv.appendChild(list)
     //creo hijos de list ul = lista li
  
      
        ///con un for recorro el array de las compras
    for(var j=0;j<6;j++){
        //si la cantidad de la compra es mayor que 0
               if(compra[j]>0){
                   ///creo elemento lista
                var itemlist = document.createElement("li")
                   ///relleno el itemlist lista
                itemlist.textContent=prod[j]
                ///asigno itemlist como hijo de list li -hijo de ul
                list.appendChild(itemlist)
                ///muestro en consola uno de los productos comprados
                console.log(itemlist)
            }
    }
    
    //tomo al hijo y al padre
    
    console.log("-------------------------------------------------------------------------------")
    var valorDiv=document.getElementById("suma-total")
    valorDiv.textContent= "$" + totalPagar
    console.log(valorDiv)
   
    }
}