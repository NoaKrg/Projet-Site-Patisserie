// Sélection des éléments du menu
var boutonMenuBurger = document.getElementById('boutonMenuBurger');
var menuMobile = document.getElementById('menuMobile');
var navigation = document.querySelector('.navigation');

// Ouverture et fermeture du menu mobile
boutonMenuBurger.addEventListener('click', function() {
    if (boutonMenuBurger.classList.contains('actif')) {
        boutonMenuBurger.classList.remove('actif');
        menuMobile.classList.remove('actif');
    } else {
        boutonMenuBurger.classList.add('actif');
        menuMobile.classList.add('actif');
    }
});

// Fermer le menu quand on clique sur un lien
var liensMenu = menuMobile.querySelectorAll('a');
for (var i = 0; i < liensMenu.length; i++) {
    liensMenu[i].addEventListener('click', function() {
        boutonMenuBurger.classList.remove('actif');
        menuMobile.classList.remove('actif');
    });
}

// Fermer le menu si on clique ailleurs
document.addEventListener('click', function(e) {
    var clicDansBurger = boutonMenuBurger.contains(e.target);
    var clicDansMenu = menuMobile.contains(e.target);
    
    if (!clicDansBurger && !clicDansMenu) {
        boutonMenuBurger.classList.remove('actif');
        menuMobile.classList.remove('actif');
    }
});

// Gestion des onglets
var onglets = document.querySelectorAll('.onglet');
for (var i = 0; i < onglets.length; i++) {
    onglets[i].addEventListener('click', function() {
        // Retirer la classe actif de tous les onglets
        for (var j = 0; j < onglets.length; j++) {
            onglets[j].classList.remove('actif');
        }
        // Ajouter la classe actif à l'onglet cliqué
        this.classList.add('actif');
    });
}

// Cacher la navigation au scroll
var dernierScrollY = window.scrollY;

window.addEventListener('scroll', function() {
    var scrollActuel = window.scrollY;
    var largeurEcran = window.innerWidth;
    
    if (largeurEcran >= 768) {
        if (scrollActuel > 100) {
            if (scrollActuel > dernierScrollY) {
                // On descend
                navigation.classList.add('cache');
            } else {
                // On monte
                navigation.classList.remove('cache');
            }
        } else {
            navigation.classList.remove('cache');
        }
        dernierScrollY = scrollActuel;
    }
});

// Vérifier la largeur de l'écran au redimensionnement
window.addEventListener('resize', function() {
    var largeurEcran = window.innerWidth;
    if (largeurEcran < 768) {
        navigation.classList.remove('cache');
    }
});

// Animation tremblement téléphone - version améliorée
var telephoneIcon = document.querySelector('.icone-social.telephone');

if (telephoneIcon) {
    telephoneIcon.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'shake 0.5s ease-in-out';
        }, 10);
    });
    
    telephoneIcon.addEventListener('animationend', function() {
        this.style.animation = '';
    });
}