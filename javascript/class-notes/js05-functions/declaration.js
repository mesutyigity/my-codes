// ? =====================================
// ?           FUNCTIONS
// ? ======================================

console.log("** FUNC DECLARATION **");

//* ORNEK1:
//*****************************************/

//! Declaration (Fonksiyonun tanimlanmasi)
function yazdirMerhaba() {
  // alert("Merhaba FS14")
  console.log("Merhaba FS14");
}

yazdirMerhaba(); //! invoke, call
yazdirMerhaba(); //! invoke, call
yazdirMerhaba(); //! invoke, call

//* ORNEK2:
//*****************************************/
function yazdirParametre(message, name) {
  console.log(message, name);
}
yazdirParametre("Hi", "FS15");
yazdirParametre("Hello", "FS16");
yazdirParametre("Salut", "FS17");
