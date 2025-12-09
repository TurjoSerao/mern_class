const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/students');
const studentSchema = new mongoose.Schema({
  name: String,
  city: String,
});

const Student = mongoose.model('Student', studentSchema);


app.get('/', (req, res) => {
  res.send('hello, World!');
});

app.post("/data", (req, res) => {
  const name = req.body.name;
  const city = req.body.city;
  // const personInfo = {name, city};
  res.send(`Hello ${name} from ${city}`);
})

app.post("/add-student", (req, res) => {
  const { name, city } = req.body;
  const newStudent = new Student({ name, city });
  newStudent.save();
  res.send(`Student Added successfully`)
});

app.get("/students", (req, res) => {
  Student.find().then(students => {
    res.json(students);
  })
});

app.put("/update-student/:id", (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const city = req.body.city;
  Student.findByIdAndUpdate(id, { name, city }).then(() => {
    res.send("Student updated sucessfully");
  })
})

app.delete("/delete-student/:id", (req, res) => {
  const id = req.params.id;
  Student.findByIdAndDelete(id).then(()=> {
    res.send('student deleted sucessfully')
  })
})

app.listen(4000, () => {
  console.log(`server is runing on port 4000`);
});