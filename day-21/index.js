const cityList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

for (let i = 0; i < cityList.length; i++) {
    // console.log(cityList[i]);
}


cityList.forEach(function(city) {
    // console.log(city);
});



const students = [
    ['Zeba', 'Madaripur', 24, false],
    ['Orpita', 'Dhaka', 22, true],
    ['Turjo', 'MOnipuripara', 23, true],
]


for (let i = 0; i < students.length; i++){
    for(let j = 0; j < students[i].length; j++) {
        console.log(students[i][j]);
    }
}