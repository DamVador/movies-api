const request_URL = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=arcueil&rows=100&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.name=Gare+de+Laplace';

const showVelibStation = (selector, name, numberClassicalVelibs, numberElectricVelibs) => {
    selector.innerHTML = "";
    selector.innerHTML += `
        <div>
            <h2>Station : ${name}</h2>
            <p>${numberClassicalVelibs} classical Velibs</p>
            <p>${numberElectricVelibs} electric Velibs</p>
        </div>
    `
}
