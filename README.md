Weather Front
===

Temps passé : 3h30

J'ai divisé mon application en deux écrans :
- SearchView (L'écran de recherche de la ville)
- WeatherView (L'écran affichant les données météorologiques)

J'ai ensuite créer plusieurs composants que j'ai jugé potentiellement réutilisable dans des conditions réelles.
- Le bouton de retour
- La barre de recherche
- Les cartes permettant l'affichage des résultats de la recherche
- La carte des données météorologiques actuelles
- Les cartes des données des 7 prochains jours.

Dans le cas du bouton retour et des cartes des résultats de recherches, 
j'ai décidé qu'il s'agissait là de composants aillant un objectif unique et j'ai donc défini leurs actions directement dans le composant.  
Contrairement à la barre de recherche qui selon moi peut être utilisé pour effectuer différentes recherches dans le cadre d'une évolution de l'application,
j'ai donc laissé le traitement de l'action à son parent (SearchView)

J'ai décidé d'utiliser fetch plutôt que axios, car je trouvais ça overkill sachant que je ne fais que de simples GET. (Et à moins de ne pas avoir compris la consigne, cela était autorisé)

Concernant l'image dynamique en background, je n'ai pas mis cette fonctionnalité essentiellement par manque de temps.  
Je me suis renseigné sur les différentes APIs qui auraient pu s'occuper de cette fonctionnalité, mais j'ai abandonné. J'en parle plus en détails dans le README de l'api.

J'ai énormément utilisé la flexbox pour rendre mon app responsive.

J'ai également décidé de ne pas typescript est essentiel pour un développement de qualité, mais étant donné le peu de temps à ma disposition, je n'ai pas eu le courage de risque une tonne d'erreur de typage.  
Mais je conseille fortement son utilisation pour tout développement JS.


