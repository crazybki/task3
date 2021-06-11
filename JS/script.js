const apiUrl = 'https://akabab.github.io/starwars-api/api/all.json';

const container = document.querySelector('.container');

const sortBtn = document.querySelector('.sort__btn');

let ascendingList = false;

let swCharacters;

let arr = [];


async function fetchApi() {
    const response = await fetch(apiUrl);

    swCharacters = await response.json();
    renderCharacters(swCharacters)
}

fetchApi();




function renderCharacters(characterList) {
    container.innerHTML = '';
    characterList.forEach(character => {

        container.innerHTML += `<div class="list__container">            
                                        <h2 class="list__heading">${character.name}</h2>
                                        <div>
                                            <img class="list__image" src="${character.image}" alt="images of different characthers from Star Wars universe">
                                        </div>
                                        <p class="list__txt">From: ${character.homeworld}</p>
                                        <p class="list__txt">Specie: ${character.species}</p>
                                        <div class="list__link_container">
                                            <a class="list__link" href="details.html?id=${character.id}">Details</a>
                                        </div>
                                    </div>`
    });
}

sortBtn.addEventListener('click', sortCharacters);

function sortByName(characterA, characterB) {
    return characterA.name < characterB.name ? -1 : characterA.name === characterB.name ? 0 : 1

}

function sortCharacters() {
    if (!ascendingList) {
        ascendingList = true
        sortBtn.innerHTML = `Sort A-Z`;
        renderCharacters(swCharacters.sort(sortByName))

    } else {
        ascendingList = false
        //let descendingList = list.reverse();
        sortBtn.innerHTML = `Sort Z-A`;
        renderCharacters(swCharacters.sort(sortByName).reverse())

    }
}

