const h1 = document.querySelector(".hello:first-child h1");

function handleh1Click() {
  /*
  const clickedClass = "active";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  } */
  h1.classList.toggle(clickedClass);
}

h1.addEventListener("click", handleh1Click);
