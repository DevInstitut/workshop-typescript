# Service TalkService

* Créer une classe `TalkService` dans le fichier `src/services/talk.service.ts`.

* Ajouter une méthode `findAllSessions` retournant une **Promesse** de tableau de sessions.
 * Créer une class `Session` (`src/domains/session.ts`)

Ce service récupère les données depuis un appel HTTP sur le site du BreizhCamp.

Voici un exemple d'appel HTTP avec jquery :

```ts
import * as $ from "jquery";

const promise$ = $.get("https://jsonplaceholder.typicode.com/posts");

promise$.then(data =>
      console.log(data)
);
```

* Modifier le fichier `src/index.ts` pour qu'il affiche dans la console les titres des sessions.

 * Les données sont récupérées à partir du service `TalkService`.
