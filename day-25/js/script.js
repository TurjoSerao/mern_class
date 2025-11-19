const countries = document.querySelector("#countries");

const createOption = (val) => {
    const option = document.createElement("option");
    option.value = val;
    option.textContent = val;
    countries.appendChild(option);
};

const getCountry = async () => {
    try {
        const res = await fetch("./js/countries.json");
        const data = await res.json();
        data.forEach(d => {
            createOption(d.name);
        });
    } catch (error) {
        console.error("Error loading countries:", error);
    }
};

getCountry();

jsForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(jsForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const cpass = formData.get("cPass") ;
    const country = formData.get("country");

    if (!name) {
        errName.textContent = "please Provide your name";
    } else if (!/^[A-Za-z.]*$/.test(name)) {
        errName.textContent = "Invalid Name format"
    } else {
        errName.textContent = null;
    }
} )