
let number = 2000;


// while (number <= 10) {
//     // console.log(number);
//     number++;
// }



let year = 2000;
let endYear = 2025;

while (year <= endYear) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
  }
  year++;
}
