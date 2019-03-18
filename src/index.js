function handleSubmit(e) {
  e.preventDefault()
  updateDOM()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
