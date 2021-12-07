// LOOPING

// for (var i = 1; i < 11; i++) {
//     if(i % 2 === 0) {
//         console.log(i + " adalah genap")
//     } else {
//         console.log(i + " adalah ganjil")
//     }
// }

// var str = "bening lauditta";
// for (var i = 0; i < str.length; i++) {
//     if(i % 2 === 0) {
//         console.log(str[i].toUpperCase())
//     } else{
//         console.log(str[i])
//     }
    
/** STUDY CASE 3
 * 
 * Buatlah sebuah codingan untuk 
 * 
 * Contoh:
 * n = 5;
 * Result:
 * 12345
 */

// var n = 5;
// var temp = '';

// for(var i = 1; i <= n; i++){
//     temp = temp + i;
// }
// console.log(temp);

// var n = 5;

// for(var i = 1; i <= n; i++)
// console.log(i);


/**
 * STUDY CASE 4
 * 
 * Buatlah codingan untuk hasil berikut
 * 
 * Contoh:
 * input = 5
 * 
 * Result :
 * #@#@#
 * 
 * Jika input n= 2, maka Print "Angka harus ganjil"
 */

var n = 5;
var temp = ''

if(n % 2 === 1){
for (var i = 0; i < n; i++) {
    if (i % 2 === 0) {
        temp = temp + "#"
    } else {
        temp = temp + "@"
    }
}
console.log(temp);
} else {
    console.log("Angka harus ganjil")
}