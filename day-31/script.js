const slider = document.querySelector("#slider");
const slides = Array.from(slider.children);
let ind = 0;
const totalSlides = slides.length;


const ctrlIndFunc = () => {
    if(ind == totalSlides) {
        ind = 0;
        return ind++;
    } else {
        return ind++;
    }
}


const ctrlSlideFunc = () => {
    slides.forEach((e,i) => {
        if(ind == i) {
            e.classList.add("active");
        }else{
            e.classList.remove("active")
        }
    })
}


setInterval(() => {
    ctrlIndFunc();
    ctrlSlideFunc();
}, 2000)