// ## import-export-super

// Créer 4 fichiers ".js". => 'humain.js', 'archer.js', 'guerrier.js', 'mage.js'

// Le fichier humain contiendra la class parent de base nommée "Humain". Elle prendre deux propriétées : nom et âge.
// Dans les autres fichiers, vous importez la class "humain" et vous les complétez avec de nouvelles propriétés liées à son personnage.(utiliser super) 

// Les propriétés  pour chaque personnage : 
// archer -> fleches
// gerrier -> force, vie
// mage -> magie

// Ex : Vous êtes dans le fichier "mage.js", vous avez importé la class humain et vous rajoutez comme propriété en + "magie". 

export default class Humain{
    constructor(nom,age){
        this.nom = nom;
        this.age= age;
     


    }
}

let philippe = new Humain("kanen",25);
let tyff = new Humain("lona",23);
let rony = new Humain("orosco",24);
console.log(philippe);
console.log(tyff);
console.log(rony);
