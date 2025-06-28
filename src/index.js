function displayPoem(response) {
  const poemSection = document.querySelector("#les-fleurs-du-mal");

  // 💡 Add the class that triggers the top margin
  poemSection.classList.add("generated");
  new Typewriter(poemSection, {
    strings: response.data.answer,
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}
function handleSubmit(event) {
  event.preventDefault();
  let inspirationInput = document.querySelector(".inspiration").value;
  let api_key = "81a35fctfab545b52d43e71743o42f03";
  //let prompt = `Using this ${inspirationInput} as inspiration, generate a short French poem with a maximum of ten lines. Make sure to display every sentence of the poem on a new line, and add only one emoji at the beginning.`;
  //let context = "You are a poetry expert, a sensitive soul";
  let context =
    "You are a romantic poem expert who loves writing short poems. Your mission is to generate a 6-line poem and separate each line with a <br />. Make sure to follow the user's instructions carefully. Do not include a title in the poem. Add one emoji based on the user's instruction.";
  let prompt = `User instructions: Generate a French poem about ${inspirationInput}`;
  let api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;
  let hints = document.querySelector(".hint");
  // hints.style.display="none"
  hints.innerHTML = "";
  let initialPoemSection = document.querySelector("#les-fleurs-du-mal");
  initialPoemSection.innerHTML =
    "🌸 Génération de votre poème en cours, veuillez patienter…";
  axios.get(api_url).then(displayPoem);
}

let poemFormElement = document.querySelector(".poem-form");
poemFormElement.addEventListener("submit", handleSubmit);
