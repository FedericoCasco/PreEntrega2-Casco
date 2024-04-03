
//const o let /// es igual en la linea de abajo

const gastosMensuales = [
    {
        categoria: "SUPERMERCADO",
        monto: 5000
    },
    {   categoria: "VERDULERIA",
        monto: 3000
    },
    {
        categoria: "ROPA",
        monton: 6000
    }

];


let cateriaGastoAgregado;
let montoGastoAgregado;

do{
    cateriaGastoAgregado = prompt("Ingresa la categoria del gasto que queres registrar.  Para terminar, escribi SALIR.").toUpperCase().trim();

    if( cateriaGastoAgregado !== "SALIR") {
        
        
        montoGastoAgregado = parseInt(prompt ("Ingresa el monto que queres registrar"));
        let gastoAgregado = {
            categoria:  cateriaGastoAgregado,
            monto: montoGastoAgregado
        };
        gastosMensuales.push(gastoAgregado);
        
    }

}while(cateriaGastoAgregado !== "SALIR");

console.log(gastosMensuales);



