// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

const calismaSuresi = prompt("Calisma süresi:");
let maas = prompt("Maasini giriniz:");

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log("Zamli maasiniz:", maas);
  console.log(`Zamli maasiniz: ${maas}`);
} else {
  console.log("Uzgunuz maasinaza zam yapamayirouz", maas);
}
