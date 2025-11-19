const jsForm = document.querySelector("#jsForm");
const countries = document.querySelector("#countries");

const genders = ["Male", "Feamle", "Others"];


const err = document.querySelectorAll(".err");
err.forEach(e => {
    e.style.cssText = `
        color: red;
        font-size: 14px;
        font-style: italic;
        margin-bottom: 6px;
        margin-top: 2px
    `
});
const errName = document.querySelector(".errName");
const errEmail = document.querySelector(".errEmail");
const errPass = document.querySelector(".errPass");
const errCpass = document.querySelector(".errCpass");
const errGender = document.querySelector(".errGender");
const errSkills = document.querySelector(".errSkills");
const errCountry = document.querySelector(".errCountry");

const createOption = (val) => {
    const option = document.createElement("option");
    option.setAttribute("value", val);
    option.textContent = val;
    countries.appendChild(option);
}

const getCountry = async () => {
    const res = await fetch("./js/countries.json");
    data = await res.json();
    data.forEach(d => {
        createOption(d.name);
    });
}

getCountry();

jsForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(jsForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("pass");
    const cPass = formData.get("cPass");
    const gender = formData.get("gender");
    const skills = formData.getAll("skills[]");
    const country = formData.get("country");

    if (!name) {
        errName.textContent = "Please provide you name";
    }else if (!/^[A-Za-z. ]*$/.test(name)){
        errName.textContent = "Invalid name Format";
    }else {
        errName.textContent = "";
    }

    if (!email) {
        errEmail.textContent = "Please provide you email address";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        errEmail.textContent = "Invalid Email formate"
    } else {
        errEmail.textContent = "";
    }

    if (!pass) {
        errPass.textContent = "Please provide the password";
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(pass)) {
        errPass.textContent = "Please Provide a strong pass"
    } else {
        errPass.textContent = "";
    }

    if (!cPass) {
        errCpass.textContent = "Please confirm the password";
    } else if (cPass !== pass) {
        errCpass.textContent = "Passwords do not match"
    } else {
        errCpass.textContent = "";
    }

    if(!gender){
        errGender.textContent = "Please select your gender";
    } else if (genders.indexOf(gender) == -1){
        errGender.textContent = "Invalid Gender";
    } else {
        errGender.textContent = "";
    }

    if(skills.length == 0){
        errSkills.textContent = "Please select your skill";
    } else {
        errSkills.textContent = "";
    }

    if(!country){
        errCountry.textContent = "Please select your country";
    } else {
        errCountry.textContent = "";
    }

    
    
})

