//* ============================================
//*                FOR LOOP
//* ============================================

console.log("**** LOOPS IN ARRAYS ***")

//?-------------- ÖRNEK -------------------
//? grades'in ortalamasini hesaplayiniz.
const grades = [55, 77, 23, 89, 100, 44, 33, 45]

let sum = 0
for (let i = 0; i < grades.length; i++) {
  sum += grades[i]
  //   console.log(sum)
}

console.log("AVG:", (sum / grades.length).toFixed(2))
