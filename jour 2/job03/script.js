const button = document.getElementById("button");
const compteur = document.getElementById("compteur");


function addOne() {
  let currentCount = parseInt(compteur.innerText);
  currentCount++;
  compteur.innerText = currentCount;
}


button.addEventListener("click", addOne);