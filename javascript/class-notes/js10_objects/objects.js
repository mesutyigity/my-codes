//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bolgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

const car = {
  brand: "Mercedes",
  model: 2020,
  speed: 5,
  engine: 2000,
  color: ["red", "black", "white", "blue"],
};
console.log(car);

console.log(car.brand);
console.log(car.color[0]);
car.color.forEach((c) => console.log(c));
console.log(car.Engine);

car.speed = 7;
car.color = "purple";
console.log(car);

console.log("ENGINE:", car["engine"]);

const myKey = prompt(
  "Araba ile ilgili neyi ogrenmek istersiniz?: speed, color, engine..."
);

alert(car[myKey]);

