console.log("Js dosyası bağlandı.");
//?         🔥🔥🔥       Operators           🔥🔥🔥

//! Atama Operatörü, Aritmetiksel Operatörler,Artırma ve Azaltma Operatörü, Karşılaştırma Operatörleri ve Logical(Mantıksal) Operatörler

var deneme = 5;
varDeneme = 6;

let myVar = 5;

const myVar1 = 6;

//+ Aritmetiksel Operatörler

// +,-,*,/,%
//! + operatörü
const num1 = 10;
const num2 = 69;

const toplam = num1 + num2; // num1 ve num2 operand , + operator olark adlandırılıyor.

console.log(toplam);

const msg1 = "Hello";
const msg2 = "World!";

const mesaj = msg1 + msg2;
console.log(mesaj);

const firstName = "Mesut Yigit";
const lastName = "Yildirim";
console.log(firstName, " ", lastName);
const fullName = firstName + " " + lastName; //? + operatörü String Concatenation işlemini de yapar.
console.log(fullName);

//! Template Literals (Es6 ile gelen bir özellik)
// `merhaba``${değişken} ${değişken2}`;
// `merhaba` hem string tanımlaması yapabiliriz hem de string içinde değişkenlerimizi `${değişken}` şeklinde yazabiliriz. + yerine daha dinamik bir şekilde stringlerimizi concatenate edebiliriz.

const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

