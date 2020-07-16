
const recorre = require('../modulos/recorrido')
const imprime = require('../modulos/imprimir')

const hobis = [
    'Correr' ,
    'Nadar' ,
    'caminar'
];

let algoParaImprimir = 'Algo que imprimimos desde la App'

recorre.recorreH(hobis)
imprime.imprimirAlgo(algoParaImprimir)
