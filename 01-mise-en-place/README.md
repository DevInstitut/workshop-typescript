# Mise en place du projet

## Code source initial
Nous allons utiliser le kit de démarrage [typescript-webpack-starter](https://emyann.github.io/typescript-webpack-starter/).

* Installer l'utilitaire

```
npm install -g create-ts-lib
```

* Générer les sources initiales du projet

```
create-ts-lib breizhcamp-2018-webapp
```

* Démarrer le serveur web :

```
npm start
```
## Point d'entrée de l'application

* Le point de départ de l'application sera `src/index.ts_`.

* Compléter ce fichier avec le contenu suivant :

```ts
alert('Conférence App démarré !');
```

* Vérifier que vos changements sont pris en compte.

## Intégration Bootstrap

* Installer les dépendances Bootstrap

```
npm i -S boostrap jquery popper.js @types/jquery
```

* Compléter le fichier `src/vendor.ts` avec les dépendances suivantes :

```
// ...

import "bootstrap";
import "popper.js";
import "jquery";
import "bootstrap/dist/css/bootstrap.css";
```

* Redémarrer et vérifier la prise en compte de Bootstrap dans la page.

