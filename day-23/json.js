const studentList = {
    name: "zeba",
    age: 27,
    gender: 'female',
}

// console.log(studentList.name);

// console.log(`my name is ${studentList.name}. I am ${studentList.age} years old\, and i am a ${studentList.gender}`);


for (const list in studentList) {
    console.log(studentList[list]);
}



const object = {
    "personName" : "Asif Abir"
}

console.log(object.personName);