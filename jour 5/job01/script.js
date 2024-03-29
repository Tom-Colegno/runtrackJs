// Sélectionnez les éléments du formulaire
const form = document.querySelector('form');
const prenomInput = document.getElementById('prenom');
const nomInput = document.getElementById('nom');
const emailInput = document.getElementById('email');
const mdpInput = document.getElementById('mot-de-passe');
const adresseInput = document.getElementById('adresse');
const villeInput = document.getElementById('ville');
const codePostalInput = document.getElementById('code-postal');

// Fonction de validation du prénom
function validatePrenom() {
    const prenom = prenomInput.value.trim();

    // Vérifiez si le prénom a au moins 3 caractères
    if (prenom.length < 3) {
        document.getElementById('erreur-prenom').textContent = 'Le prénom doit contenir au moins 3 caractères.';
    } else {
        document.getElementById('erreur-prenom').textContent = '';
    }
}
// Écoutez l'événement de saisie pour le champ de prénom
prenomInput.addEventListener('input', validatePrenom);

// Fonction de validation du nom
function validateNom() {
    const nom = nomInput.value.trim();

    // Vérifiez si le nom a au moins 5 caractères
    if (nom.length < 5) {
        document.getElementById('erreur-nom').textContent = 'Le nom doit contenir au moins 5 caractères.';
    } else {
        document.getElementById('erreur-nom').textContent = '';
    }
}
// Écoutez l'événement de saisie pour le champ de nom
nomInput.addEventListener('input', validateNom);

// Fonction de validation de l'adresse e-mail
function validateEmail() {
    const email = emailInput.value.trim();

    // Vérifiez si l'adresse e-mail contient un "@" et une extension valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('erreur-email').textContent = 'Veuillez entrer une adresse e-mail valide (ex: exemple@domaine.com).';
    } else {
        document.getElementById('erreur-email').textContent = '';
    }
}

// Écoutez l'événement de saisie pour le champ d'adresse e-mail
emailInput.addEventListener('input', validateEmail);

// Fonction de validation du mot de passe
function validateMdp() {
    const mdp = mdpInput.value;

    // Vérifiez si le mot de passe contient au moins 8 caractères
    if (mdp.length < 8) {
        document.getElementById('erreur-mdp').textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        return;
    }

    // Vérifiez s'il contient au moins une lettre majuscule et un caractère spécial
    const majusculeRegex = /[A-Z]/;
    const caractereSpecialRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (!majusculeRegex.test(mdp) || !caractereSpecialRegex.test(mdp)) {
        document.getElementById('erreur-mdp').textContent = 'Le mot de passe doit contenir au moins une lettre majuscule et un caractère spécial.';
        return;
    }

    // Si toutes les conditions sont remplies, effacez le message d'erreur
    document.getElementById('erreur-mdp').textContent = '';
}

// Écoutez l'événement de saisie pour le champ de mot de passe
mdpInput.addEventListener('input', validateMdp);

// Fonction de validation de l'adresse
function validateAdresse() {
    const adresse = adresseInput.value.trim();

    // Vérifiez si l'adresse contient au moins 8 caractères
    if (adresse.length < 8) {
        document.getElementById('erreur-adresse').textContent = 'L\'adresse doit contenir au moins 8 caractères.';
    } else {
        document.getElementById('erreur-adresse').textContent = '';
    }
}

// Écoutez l'événement de saisie pour le champ d'adresse
adresseInput.addEventListener('input', validateAdresse);

// Fonction de validation de la ville
function validateVille() {
    const ville = villeInput.value.trim();

    // Vérifiez si la ville contient au moins 8 caractères
    if (ville.length < 8) {
        document.getElementById('erreur-ville').textContent = 'La ville doit contenir au moins 8 caractères.';
    } else {
        document.getElementById('erreur-ville').textContent = '';
    }
}

// Écoutez l'événement de saisie pour le champ de la ville
villeInput.addEventListener('input', validateVille);

// Fonction de validation du code postal
function validateCodePostal() {
    const codePostal = codePostalInput.value.trim();

    // Vérifiez si le code postal contient uniquement des chiffres et a au moins 5 caractères
    const codePostalRegex = /^\d{5,}$/;
    if (!codePostalRegex.test(codePostal)) {
        document.getElementById('erreur-code-postal').textContent = 'Le code postal doit contenir uniquement des chiffres et avoir au moins 5 caractères.';
    } else {
        document.getElementById('erreur-code-postal').textContent = '';
    }
}

// Écoutez l'événement de saisie pour le champ du code postal
codePostalInput.addEventListener('input', validateCodePostal);

// Fonction pour filtrer les caractères non numériques
function filterNumericInput(event) {
    // Empêcher la saisie de caractères non numériques
    event.target.value = event.target.value.replace(/\D/g, '');
}

// Écoutez l'événement de saisie pour le champ du code postal
codePostalInput.addEventListener('input', filterNumericInput);


// Fonction pour vérifier si le formulaire est complet
function verifierFormulaireComplet() {
    // Récupérer tous les champs requis
    const champsRequis = document.querySelectorAll('input[required]');

    // Parcourir tous les champs requis et vérifier s'ils sont remplis
    let formulaireComplet = true;
    champsRequis.forEach(champ => {
        if (champ.value.trim() === '') {
            formulaireComplet = false;
        }
    });

    return formulaireComplet;
}

// Gestionnaire d'événement pour la soumission du formulaire
document.querySelector('form').addEventListener('submit', function(event) {
    // Valider le formulaire
    validateForm(event);

    // Vérifier si le formulaire est complet
    if (!verifierFormulaireComplet()) {
        // Le formulaire n'est pas complet, empêcher la soumission
        event.preventDefault();
        alert('Veuillez remplir tous les champs du formulaire.');
    } else {
        // Masquer le formulaire
        document.querySelector('.container').style.display = 'none';
        
        // Afficher le message d'inscription réussie
        document.getElementById('message-inscription-reussie').style.display = 'block';

        // Patienter pendant 3 secondes avant de rediriger vers la page de connexion
        setTimeout(function() {
            window.location.href = ('connexion.html');
        }, 2000);

        // Empêcher le formulaire de se soumettre normalement
        event.preventDefault();
    }
});


// Définir la fonction de validation globale
function validateForm(event) {
    // Appeler toutes les fonctions de validation
    validatePrenom();
    validateNom();
    validateEmail();
    validateMdp();
    validateAdresse();
    validateVille();
    validateCodePostal();

    // Empêcher la soumission du formulaire si des erreurs sont présentes
    if (document.querySelectorAll('.erreur').length > 0) {
        event.preventDefault();
    }
}

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', validateForm);