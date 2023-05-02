//* Javascript Kodu */
// console.log("Localde bulunan script calisti")

// alert("Bu bir alert dir") /* Alert uygulmayı bloklar (Blocking Code)*/

// karar = confirm("Emin msiniz E/H")
// console.log(karar)

// console.warn("Bu bir uyarıdir")

// console.error("Eyvah hata olustu..")

//*  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

//? ===================  CONST  ======================

console.log("APP JS RUNNING")

const pi = 3.14
console.log(pi)
console.log(typeof pi)

const sayi1 = "3"
console.log(typeof sayi1)

//! caught SyntaxError: Missing initializer in const declaration (at app.js:27:7)
// const deneme; //? const ile tanimlanan degiskene baslangic degeri verilmelidir.
// console.log(deneme)

//! Uncaught TypeError: Assignment to constant variable.
// const number1 = 5
// number1 = 7 //? const ile tanimlanan degiskene sonradan atama yapilamaz
