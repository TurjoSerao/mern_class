const heads = document.querySelectorAll(".head");
const details = document.querySelectorAll(".details");

heads.forEach((head, i) => {
    head.addEventListener("click", () => {
        heads.forEach((h, ind) => {
            if (i === ind) {
                h.className = "head border-b p-3 font-bold bg-black text-white cursor-pointer relative before:content-['-'] before:absolute before:h-full before:ratio-1x1 before:text-white before:top-0 before:right-2 before:text-center before:grid before:place-items-center";
                details[ind].className = "details px-3 py-3 max-h-max overflow-hidden transition-all duration-500";
            } else {
                h.className = "head border-b p-3 font-bold hover:bg-gray-300 cursor-pointer relative before:content-['+'] before:absolute before:h-full before:ratio-1x1 before:text-black before:top-0 before:right-2 before:text-center before:grid before:place-items-center";
                details[ind].className = "details py-0 px-3 max-h-0 overflow-hidden transition-all duration-500";
            }
        });
    });
});
