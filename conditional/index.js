// Task 1
/**
 * Ada 3 jenis access : Public, Protected, Private.
 * Jika access kosong, maka tampilkan "Input access"
 * 
 * Access public, jika level di bawah 5 maka tampilkan "Public di bawah 5"
 * Access public, jika level di atas 5 maka tampilkan "Public di atas 5"
 * Access public, jika level sama dengan 5 maka tampilkan "Public five"
 * 
 * Access private, jika level di bawah 5 maka tampilkan "Private di bawah 5"
 * Access private, jika level di atas 5 maka tampilkan "Private di atas 5"
 * Access private, jika level sama dengan 5 maka tampilkan "Private five"
 * 
 * Access protected, jika level di bawah 5 maka tampilkan "Protected di bawah 5"
 * Access protected, jika level di atas 5 maka tampilkan "Protected di atas 5"
 * Access protected, jika level sama dengan 5 maka tampilkan "Protected five"
 * 
 * Jika access salah, tampilkan "Access is not defined"
 * 
 * BUAT CODING menggunakan Nested Conditional : Switch case dan if else
 */

// var access = " ";
// var level = 4;
// var jenisAccess;

// switch (access.toLowerCase()){
//     case "public":
//         if (level < 5) {
//             jenisAccess = "Public di bawah 5"
//         } else if (level > 5){
//             jenisAccess = "Public di atas 5"
//         } else { 
//             jenisAccess = "Public 5"
//         }
//         console.log(jenisAccess)
//         break;
//     case "private":
//         if (level < 5) {
//             jenisAccess = "Private di bawah 5"
//         } else if (level > 5){
//             jenisAccess = "Private di atas 5"
//         } else { 
//             jenisAccess = "Private 5"
//         }
//         console.log(jenisAccess)
//         break;
//     case "protected":
//         if (level < 5) {
//             jenisAccess = "Protected di bawah 5"
//         } else if (level > 5){
//             jenisAccess = "Protected di atas 5"
//         } else { 
//             jenisAccess = "Protected 5"
//         }
//         console.log(jenisAccess)
//         break;
//     case " ":
//         console.log("Input Access");
//         break;
//     default:
//         console.log("Access is not defined");
//         break;
//     
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

var n = 5;

for(var i = 1; i <= n; i++)
console.log(i);