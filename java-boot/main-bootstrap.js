/*
function conteo (frase){
    let texto = frase.replace(/[,.]/gi,"");
    let palabra = texto.split(" ");
    let mapa = {};

    for(let arreglo of palabra){
        if(mapa [arreglo]){
            mapa [arreglo]++
        }else{
            mapa [arreglo] = 1;
        }
    }
    return mapa;
}
console.log(conteo("hola hola mundo"));
*/

/*---------------------------------*/
/*
function detectar(arr){
    let arreglo = []

    arr.forEach((num) =>{
        const numero = num.toString();
        for(let i = 0; i<=numero.length; i++){
        
            arreglo.push(+numero.charAt(i))
        }
    })
    const conteo = arreglo.includes(2);

    if(conteo){
        console.log("se encontro el número")
    }else{
        console.log("no se encontro")
    }
}
const array = [1,2,3,4];
detectar(array);
*/
/* -------------------------------------------------*/
/*
let texto = "hola como estas";
let mapa = {}

for(let i = 0; i<=texto.length; i++){
    let array = texto[i];
    if(mapa [array] == undefined){
        mapa [ array] =1;
    }else{
        mapa [array]++;
    }
}
console.log(mapa);
*/

/*-----------------------------*/
/*
let numero = 2;
let numeroPrimo = true;

for(let i = 2; i<=numero / 2; i++){
    if(numero % i === 0){
        numeroPrimo = false;
    }
}
if(numeroPrimo){
    console.log("Es número primo")
}else{
    console.log("No es número primo")
}
*/

/*------------------------------------------*/
/*
function minmax(array){
    let min = Math.min(...array);
    let max = Math.max(...array);

    let resul = min + max;

    console.log(min,max)
    console.log(resul)
    
}
minmax([1,2,3,4,5,6])
*/
/*-------------------------------------------*/
/*
for(let i = 1; i<= 30; i++){
    let mensaje = "";
    if(i % 5 === 0){
        mensaje += "tik";
    }
    if(i % 10 === 0){
        mensaje += "tok";
    }
    console.log(mensaje || i);
}
*/

/*-----------------------*/
/*

let texto = "hola como estas";
let arreglo = texto.split("");

console.log(arreglo.reverse().join(""));
*/

/*-----------------------*/
/*
function palindromo(texto){
    let invertido = texto.split("").reverse().join("")
    
    return invertido === texto;
}
console.log("Es un palindromo? " + palindromo("isra is"));
*/

