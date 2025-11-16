// Récupérer l'élément de l'écran et les boutons
const ecran = document.querySelector('.ecran');
const boutons = document.querySelectorAll('.bouton');

// Variable pour stocker l'expression en cours
let expression = '';

// Ajouter un écouteur d'événements à chaque bouton
boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        const value = bouton.textContent;

        // Si le bouton est 'C', réinitialiser l'écran
        if (value === 'C') {
            expression = '';
            ecran.textContent = '';
        }
        // Si le bouton est '=', évaluer l'expression
        else if (value === '=') {
            try {
                expression = eval(expression).toString();
                ecran.textContent = expression;
            } catch (error) {
                ecran.textContent = 'Erreur';
                expression = '';
            }
        }
        // Sinon, ajouter la valeur du bouton à l'expression
        else {
            expression += value;
            ecran.textContent = expression;
        }
    });
});
