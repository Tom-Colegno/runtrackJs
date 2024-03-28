const selectType = document.getElementById('type');
const resultatDiv = document.getElementById( 'resultat');

fetch('pokemon.json')
.then((response) => response.json())
.then((data) => {
    const typesSet = new Set();

    data.forEach(pokemon => {
        pokemon.type.forEach(type => {
            typesSet.add(type);
        });
    });

    typesSet.forEach(type => {
        const option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        selectType.appendChild(option);
    });
})
.catch((error) => console.log('Erreur lors de la recuperation des types', error));

// ajout d'un evenement click sur le bouton filtrer, puis 
// creation des variables de chaque input du formulaire
// tu refais un fetch de pokemon.json
// dans le then(data) il faut tes conditions de trie

// faire une fonction d'affichage de resultat pour afficher la liste des pokemon correspondants aux filtres appliques



// Ajout d'un événement click sur le bouton filtrer
document.getElementById('filtrer').addEventListener('click', () => {
  const id = document.getElementById('id').value;
  const nom = document.getElementById('nom').value;
  const type = document.getElementById('type').value;

  // Récupération des pokémons correspondant aux filtres
  fetch('pokemon.json')
  .then((response) => response.json())
  .then((data) => {
      // Filtre sur l'id
      let filteredData = data.filter((pokemon) => {
        return id ? pokemon.id === parseInt(id) : true;
      });
      
      // Filtre sur le nom
      filteredData = filteredData.filter((pokemon) => {
        return nom ? pokemon.nom.toLowerCase().includes(nom.toLowerCase()) : true;
      });

      // Filtre sur le type
      if (type !== 'all') {
        filteredData = filteredData.filter((pokemon) => {
          return pokemon.type.includes(type);
        });
      }

      // Affichage des résultats
      displayResults(filteredData);
  })
  .catch((error) => console.log('Erreur lors de la récupération des pokémons', error));
});

// Fonction d'affichage des résultats
function displayResults(result) {
    const tab = document.getElementById("table");
  
    // Réinitialisation de la table
    tab.innerHTML = "<tr><th>id</th><th>nom</th><th>type</th></tr>";
  
    // Création des lignes de la table avec les résultats
    result.forEach(pokemon => {
      let tr = document.createElement('tr');
      let tdId = document.createElement('td');
      let tdNom = document.createElement('td');
      let tdType = document.createElement('td');
  
      tdId.textContent = pokemon.id;
      tdNom.textContent = pokemon.name.french;
      tdType.textContent = pokemon.type.join(', ');
  
      tr.appendChild(tdId);
      tr.appendChild(tdNom);
      tr.appendChild(tdType);
  
      tab.appendChild(tr);
    });
  
    // Modification du contenu de chaque div résultat
    result.forEach(pokemon => {
      let divPokemon = document.querySelector('.result-pokemon[data-pokemon-id="' + pokemon.id + '"]');
      if (divPokemon) {
        divPokemon.innerHTML = `${pokemon.id} - ${pokemon.name.french} - ${pokemon.type.join(', ')}`;
      } else {
        // Création de la balise div si elle n'existe pas encore
        let divPokemon = document.createElement('div');
        divPokemon.className = 'result-pokemon';
        divPokemon.setAttribute('data-pokemon-id', pokemon.id);
  
        divPokemon.textContent = `${pokemon.id} - ${pokemon.name.french} - ${pokemon.type.join(', ')}`;
      }
    });
}