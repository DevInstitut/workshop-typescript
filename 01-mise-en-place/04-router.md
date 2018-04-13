# Routeur

Nous allons à cette étape établir une navigation par `ancre` :

* `http://localhost:8080#speakers-list` affiche la liste des présentateurs;
* `http://localhost:8080#sessions-list` affiche la liste des sessions;
* ...

Pour cela, nous allons écouter les événements `load` et `onhashchange`.

Mettre en place un routeur dans le fichier _src/index.js_ à l'aide de l'exemple ci-dessous :

[source,javascript]
.src/index.js
```
var router = () => {
    if (location.hash == '#speakers-list') {
        // TODO afficher vue liste des présentateurs
    } else if (location.hash == '#sessions-list') {
        // TODO afficher vue liste des sessions
    } else {
        // TODO afficher vue par défaut
    }
}

window.addEventListener('load', () => {

    window.onhashchange = () => {
        router();
    };

    router();
});
```

* Créer une vue _liste des sessions_ qui affiche les titres des sessions via la page _http://localhost:8080#sessions-list_.
