const detailContainer = document.querySelector('.detail-container');

const queryString = document.location.search;

const parameters = new URLSearchParams(queryString);

const detailId = parameters.get('id');

const apiUrl = 'https://akabab.github.io/starwars-api/api/id/' + detailId + '.json';

console.log(detailId)

async function fetchDetails() {
    const response = await fetch(apiUrl)
    const apiDetails = await response.json();

    console.log(apiDetails)

    displayCharacter(apiDetails)
}

fetchDetails();

function displayCharacter(characterDetails) {
    detailContainer.innerHTML = `<div class="character">
                                    <h1 class="character__heading">Star wars character</h1>
                                    <div class="character__container">
                                        <img class="character__img" src=${characterDetails.image}
                                    </div>
                                    <p class="character__txt">Name: ${characterDetails.name}</p>
                                    <p class="character__txt">Species: ${characterDetails.gender}</p>
                                    <p class="character__txt">Homeworld: ${characterDetails.homeworld}</p>
                                    <p class="character__txt">Born: ${characterDetails.born}</p>
                                </div>`
}
