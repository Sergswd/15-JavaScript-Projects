let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const currentClass = e.currentTarget.classList;

    if (currentClass.contains("decrease")) {
      count--;
    } else if (currentClass.contains("increase")) {
      count++;
    } else {
      count = 0;
    } 

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#102a42";
    }
    value.textContent = count;
  })
})
