const time = document.querySelector("#time");

const getTime = () => {
    const d = new Date();

    let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');


    const amPm = h >= 12 ? "PM" : "AM";

    h = h % 12 || 12;
    h = String(h).padStart(2, '0');

    time.textContent = `${h}:${m}:${s} ${amPm}`;

    const mo = d.toLocaleString("em-US", { month: "short" })
    const da = String(d.getDate()).padStart(2, 0);
    const y = d.getFullYear();
    const bar = d.getDay();
    for (let i = 0; i < 7; i++) {
        if (i == bar) {
            week.children[bar].classList.add(
                "bg-red-600", "font-bold", "text-white",
            )
        }
        else {
            week.children[i].classList.remove(
                "bg-red-600", "font-bold", "text-white",
            )
        }
    }

    Week.children[bar].classList.add("bg-red-100");

    tarikh.textContent = `${mo}-${da}-${y}`;

};

getTime();
setInterval(getTime, 1000);
