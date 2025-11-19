
// Turjo 

const electricUnit = 40;


if (electricUnit <= 50) {
    const bill = electricUnit * 3.50;
    console.log("elctric bill will be: ", bill);
}
else if (electricUnit <= 100 ) {
    const remaining = 3.50 * electricUnit + electricUnit - 50;
    const bill = remaining * 4.00;
    console.log("elctric bill will be: ", bill);
}
else if (electricUnit <= 250) {
    const bill = electricUnit * 6.50;
    console.log("elctric bill will be: ", bill);
}
else {
    console.log("invalid input");
}