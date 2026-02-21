// Sorting Function
const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((btns) => btns.classList.remove("active"));
    btn.classList.add("active");
  });
});
