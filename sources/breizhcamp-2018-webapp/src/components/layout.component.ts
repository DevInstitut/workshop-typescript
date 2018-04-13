import Component from "../component";

const template = `
    <header>Ici Bientôt un logo</header>
    <nav>Ici bientôt un menu</nav>
    <section id="main-view">
        Ici le contenu principal en attente de chargement
    </section>
    <footer>Ici bientôt un pied de page</footer>
`;

export default class LayoutComponent implements Component {

    render(): void {
        document.querySelector('body').innerHTML = template;
    }

}