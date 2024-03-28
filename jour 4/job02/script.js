function jsonValueKey(json, key) {   
  const keyValue = JSON.parse(json);
  if (key in keyValue){
  return keyValue[key];
  }
  else {
    return ("aucune valeur ne corespond a la cle");
  }
}

const formation = '{ "name": "La Plateforme_", "address": "8 rue d\'hozier", "city": "Marseille", "nb_staff":"11", "creation": "2019" }';
const resultat = jsonValueKey(formation, "city");

console.log(resultat);