# Structure de la page

## Notion de composant graphique

Nous allons mettre en place une notion de composant graphique.

* Créer l'interface base de tous les composants `src/components/component.ts`.

```ts
export default interface Component {
    render(selector?:string):void;
}
```

La méthode `render` permet au composant de s'insérer dans le DOM à l'endroit préciser par le sélecteur (`selector`).

Si le sélecteur n'est pas précisé avec le composant s'insère dans l'intégralité du corps de la page.

## Structure

Le composant `LayoutComponent` permet d'afficher la structure globale de l'application :

* une entête composé d'un logo et d'un menu;
* une zone qui va être modifié par d'autres composants
* un pied de page.

* Créer une classe _LayoutComponent_ dans le fichier _src/components/layout.component.ts_.

* Créer un variable `template` avec le contenu suivant :

```ts

const template = `
<header>Ici Bientôt un logo</header>
<nav>Ici bientôt un menu</nav>
<section id="main-view">
    Ici le contenu principal en attente de chargement
</section>
<footer>Ici bientôt un pied de page</footer>
`
```

* Cette classe doit implémenter l'interface `Component`.

* Compléter la méthode `render()` : le corps de l'élément HTML `body` avec le contenu de la variable `template`.

* Modifier le fichier `src/index.ts` pour invoquer la méthode `render()` du composant `LayoutComponent`.

* Tester. Vérifier l'affichage dans un navigateur.