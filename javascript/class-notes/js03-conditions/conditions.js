// * ===============================================
// *                  KARAR YAPILARI
// * ===============================================

console.log("****** CONDITIONS *******");

const calismaSuresi = prompt("Calisma surenizi giriniz: ");
let maas = prompt("Maasinizi giriniz: ");

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log('Zamli maasiniz: ${maas}')
} else {45
  console.log("Uzgunuz maasiniz zam yapilmayacaktir.");
}
