
document.addEventListener("DOMContentLoaded", () => {
  const allGrid = Array.from(document.getElementById('identicon').children);
  let userInput = document.querySelector('.field').firstElementChild;
  let form = document.getElementById("identicon-form");

  form.addEventListener("submit", handleSubmit)

  function handleSubmit(e) {
    e.preventDefault();
    allGrid.forEach(grid => grid.style.backgroundColor = "rgb(0, 0, 0)")
    let numberArray = md5.array(userInput.value)
    updateDOM(numberArray);
  }
})
