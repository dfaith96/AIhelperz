const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "Demo request captured for this AIHelperz website.";
  form.reset();
});
