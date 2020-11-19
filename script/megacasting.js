class Offer{
    constructor(identifiant,publication,typeContrat,offre,type,debutContrat,duree){
        this.identifiant = identifiant;
        this.publication = publication;
        this.typeContrat = typeContrat;
        this.offre = offre;
        this.type = type;
        this.debutContrat = debutContrat;
        this.duree = duree;
    }
}
let table = document.getElementById("offerTable");
let date = new Date();
let offre1 = new Offer("1","publication","typeContrat","offre","type",date.toLocaleDateString(),"duree");
let offre2 = new Offer('2',"publication2","typeContrat2","offre2","type2",date.toLocaleDateString(),"duree2");

let offres = [offre1, offre2];
function addRows(id) {
    let tr = document.createElement("tr")
    //Ajoute 9 colonne pour chaque ligne
    for (let i = 0; i < 8; i++) {
        let td = document.createElement("td");
        //ajoute un nouveau noeud pour chaque ligne 
        tr.appendChild(td);
    }
    let idSeleted = id+1;
    tr.setAttribute('onclick', 'selectedColor('+idSeleted+')');
    return tr;
}
function loadOffer() {
    //Ajoute le nombre de ligne en fonction de la longeur du tableau 
    for (let index = 0; index < offres.length; index++) {
        let tr = addRows(index);
        let button = document.createElement("button");
        let offre = offres[index]
        //Ajout pour chaque colonne un élément
        tr.children[0].innerHTML = offre.identifiant;
        tr.children[1].innerHTML = offre.publication;
        tr.children[2].innerHTML = offre.typeContrat;
        tr.children[3].innerHTML = offre.offre;
        tr.children[4].innerHTML = offre.type;
        tr.children[5].innerHTML = offre.debutContrat;
        tr.children[6].innerHTML = offre.duree;
        //Création du button pour la suppression
        tr.children[7].appendChild(button);
        //Donne l'attribut onclick avec la fonction delete avec comme parametre l'identifiant de l'offre
        button.setAttribute('onclick', 'deleted('+offre.identifiant+')')
        button.setAttribute('class', 'btn btn-danger')
        tr.children[7].children[0].innerHTML = 'Supprimer';
        tr.setAttribute('id',offre.identifiant);
        table.children[1].appendChild(tr);
    }
}

//Fonction pour supprimer une offre dans le tableau
function deleted(id) {
    let del = document.getElementById(id);
    table.children[1].removeChild(del);
}
//Fonction ajout d'offre
function add() {
    let id = offres.length+1;
    let date = new Date();
    let offreAdd = new Offer(""+id+"","publicationsd","typeContratsd","offresd","typesd",date.toLocaleDateString(),"dureesd");
    offres.push(offreAdd);
    let tr = addRows(id-1);
    let button = document.createElement("button");
    let offre = offres[id-1];
        //Ajout pour chaque colonne un élément
        tr.children[0].innerHTML = offre.identifiant;
        tr.children[1].innerHTML = offre.publication;
        tr.children[2].innerHTML = offre.typeContrat;
        tr.children[3].innerHTML = offre.offre;
        tr.children[4].innerHTML = offre.type;
        tr.children[5].innerHTML = offre.debutContrat;
        tr.children[6].innerHTML = offre.duree;
        //Création du button pour la suppression
        tr.children[7].appendChild(button);
        //Donne l'attribut onclick avec la fonction delete avec comme parametre l'identifiant de l'offre
        button.setAttribute('onclick', 'deleted('+offre.identifiant+')')
        button.setAttribute('class', 'btn btn-danger')
        tr.children[7].children[0].innerHTML = 'Supprimer';
        tr.setAttribute('id',offre.identifiant);
    table.children[1].appendChild(tr);
}

function selectedColor(id) {
    let selectedRow = document.getElementById(id);

    if (!selectedRow.classList.contains('table-active')) {
        selectedRow.classList.add('table-active');
    }else{
        selectedRow.classList.remove('table-active');
    }
    
}