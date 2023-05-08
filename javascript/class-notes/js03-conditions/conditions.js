// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

const calismaSuresi = prompt("Calisma süresi:");
let maas = prompt("Maasini giriniz:");

//? 2 kosullu
// if (calismaSuresi >= 10) {
//   // maas = Math.trunc(maas * 1.1)
//   maas = Math.round(maas * 1.1)
//   console.log("Zamli maasiniz:", maas)
//   console.log(`Zamli maasiniz: ${maas}`)
// } else {
//   console.log("Uzgunuz maasinaza zam yapamayirouz", maas)
// }
// console.log("Güle güle")

//? Tek kosullu
if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log(`Zamli maasiniz: ${maas}`);
}
console.log("Güle güle");

//? Cok kosullu

const grade = prompt(`Please enter your grade: `);
let result = "";
if (grade < 40) {
  result = "FF";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 60) {
  result = "CC";
} else if (grade <= 70) {
  result = "BB";
} else {
  result = "AA";
}
console.log(`Your grade is ${result}`);
