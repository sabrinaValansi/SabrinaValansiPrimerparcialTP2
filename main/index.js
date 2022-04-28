import {aRecibos} from '../src/recibos.js'
import fs from 'fs';

//console.log();
console.log("----****** Sabrina Valansi Primer Parcial TP2 grupo F ******----\n\n");

console.log("----RECORRER CON FOREACH----");
aRecibos.forEach(recibo=> console.log(`Cliente:${recibo.cliente} - Importe:${recibo.importe} `));

console.log("\n----MOSTRAR RECIBOS ORDENADOS POR IMPORTE----");
aRecibos.sort((a,b)=>a.importe-b.importe);
console.log(aRecibos);

console.log("\n----NUEVO ARRAY DE CLIENTES QUE EMPIEZAN CON LETRA R----");
const nuevoRecibo = aRecibos.filter(recibo =>recibo.cliente.substring(0,1)=="R");
console.log(nuevoRecibo);

console.log("\n----NUEVO ARRAY DE CON 30% EN IMPORTE----");
const reciboAumentado = aRecibos.map((recibo)=>{return{id:recibo.id, numero:recibo.numero, NuevoImporte:recibo.importe*1.3, cliente:recibo.cliente}});
console.log(reciboAumentado);


console.log("\n----NUEVO ARCHIVO DE TEXTO----");
fs.writeFileSync( './textos/texto.txt' , 'Estoy creando un nuevo archivo de texto\n' );
const agrega = "nuevo texto";
fs.appendFileSync('./textos/texto.txt',agrega);
const datos = fs.readFileSync('./textos/texto.txt','utf-8');
console.log(datos);

console.log("\n----NUEVO MENSAJE CON TIMER 7 SEGUNDOS----");
setTimeout(()=>console.log("Este es un mensaje a los 7 segundos"),7000);