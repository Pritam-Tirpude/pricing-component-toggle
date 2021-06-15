const toggleInput = document.querySelector(".toggle");
const annually = document.querySelector(".annually");
const monthly = document.querySelector(".monthly");
const basicDollar = document.querySelector("#basic-dollar");
const proDollar = document.querySelector("#pro-dollar");
const masterDollar = document.querySelector("#master-dollar");

toggleInput.checked = true;

toggleInput.addEventListener("change", (e) => {
  if (e.target.checked) {
    annually.classList.remove("active");
    monthly.classList.toggle("highlighted");
  } else {
    annually.classList.add("active");
    monthly.classList.remove("highlighted");
  }

  if (toggleInput.checked === false) {
    basicDollar.innerHTML = `<span>$</span>199.99`;
    proDollar.innerHTML = `<span>$</span>249.99`;
    masterDollar.innerHTML = `<span>$</span>399.99`;
  } else {
    basicDollar.innerHTML = `<span>$</span>19.99`;
    proDollar.innerHTML = `<span>$</span>24.99`;
    masterDollar.innerHTML = `<span>$</span>39.99`;
  }
});
