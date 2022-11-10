/*
function variable(){

}

function variablLet(){

}

function variableVar(){

}

function variableConst(){

}

function loop(){

}

function main(){

}

function javaScript(){

}

function html(){

}

function css(){

}

function reactJs(){

}

*/


// cara panggil function
/*
function main(){
    return"2*2"
}

console.log(main());
*/

// comsole di dalam function
/*
function friendName(param){
    return `hai ${param}`
}

const haiAldo = friendName("Aldo")


console.log(haiAldo)
*/

// function panggil 2 orang
/*
function panggilDuaOrang(name1, name2){
    return `hello ${name1}, hai ${name2}`;
}

const sapa1 = panggilDuaOrang("Aldo", "Wati")
const sapa2 = panggilDuaOrang("dina", "dimo")

console.log(sapa1)
console.log(sapa2)
*/

// menghitung diskon baju
/*
function countDiscount(disc){
    const clothPrice = 25000
    const calc =  clothPrice * disc/100
    const finalDisc = clothPrice - calc
    return finalDisc;
}

const jan = countDiscount(10)
const feb = countDiscount(40)
const mar = countDiscount(70)

console.log(jan)
console.log(feb)
console.log(mar)
*/

// menghitung data usia
/*
function calculateAge(birthdate){
    const date = new Date()
    const year = date.getFullYear()
    const age = year - birthdate
    return age
}

const bagus = calculateAge(1995)

console.log(bagus)
*/

// function declaratif langsung seperti function biasa

const hitungUsia = (x, y) => {
    const pangkat = Math.pow(x, y)
    return pangkat;
}

const duaTiga = hitungUsia(2, 3)
console.log(duaTiga)