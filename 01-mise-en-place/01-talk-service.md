# Service TalkService

* Créer une classe `TalkService` dans le fichier _src/services/talk.service.ts_.

* Ajouter une méthode _findAllSessions_ retournant une **Promesse** de tableau de sessions.

Ce service récupère les données depuis un appel HTTP sur le site du BreizhCamp.

Voici un exemple d'appel HTTP avec jquery :

```ts
import * as $ from "jquery";

$.get("https://jsonplaceholder.typicode.com/posts").then(data =>
      console.log(data)
);
```

* Modifier le fichier `src/index.ts` pour qu'il affiche dans la console les titres des sessions.

 * Les données sont récupérées à partir du service `TalkService`.
