function displayPoem(response) {
  let initialPoemSection = document.querySelector("#les-fleurs-du-mal");
  console.log(response.data);
  initialPoemSection.innerHTML = response.data.answer;
}

function handleSubmit(event) {
  event.preventDefault();
  let inspirationInput = document.querySelector(".inspiration").value;
  let api_key = "81a35fctfab545b52d43e71743o42f03";
  let prompt = `"Using this ${inspirationInput} as inspiration, generate a short French poem with a maximum of four lines. Make sure to display each line separately, and add an emoji at the beginning."`;
  let context = "You are a poetry expert, a sensitive soul";
  let api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;

  let initialPoemSection = document.querySelector("#les-fleurs-du-mal");
  initialPoemSection.innerHTML =
    "🌸 Génération de votre poème en cours, veuillez patienter…";
  axios.get(api_url).then(displayPoem);
}

let poemFormElement = document.querySelector(".poem-form");
poemFormElement.addEventListener("submit", handleSubmit);
