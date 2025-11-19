const headings = document.querySelector(".headings");
const details = document.querySelector(".details");
const headingChild = Array.from(headings.children);
const detailsChild = Array.from(details.children);

headingChild.forEach((head, ind) => {
  head.addEventListener("click", () => {
    headingChild.forEach((h, i) => {
      if (i === ind) {
        if (headingChild.length - 1 > 1) {
          h.className =
            "w-full text-center text-xl py-2 border-r bg-gray-300 cursor-pointer font-bold";
        } else {
          h.className =
            "w-full text-center text-xl py-2 border-r bg-gray-300 cursor-pointer font-bold";
        }
        detailsChild[i].className =
          "italic p-3 bg-gray-300 transition-all duration-300";
      } else {
        if (headingChild.length - 1 > i) {
          h.className =
            "w-full text-center text-xl py-2 border-b hover:bg-gray-200 cursor-pointer";
        } else {
          h.className =
            "w-full text-center text-xl py-2 border-b hover:bg-gray-200 cursor-pointer";
        }
        detailsChild[i].className =
          "hidden italic p-3 bg-gray-300 opacity-0 transition-all duration-300";
      }
    });
  });
});
