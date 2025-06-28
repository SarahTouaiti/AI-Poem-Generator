function handleSubmit(event) {
  event.preventDefault();
  let initialPoemSection = document.querySelector(".les-fleurs-du-mal");
  initialPoemSection.innerHTML =
    "🌸 Génération de votre poème en cours, veuillez patienter…";
}

let poemFormElement = document.querySelector(".poem-form");
poemFormElement.addEventListener("submit", handleSubmit);
