import Humain from "./humain.js"


export default class Guerrier extends Humain {
    constructor(nom,age,force,vie){
        super(nom,age)
        this.force = force;
        this.vie = vie;

    }
}


let phil = new Guerrier("philippe",25,59,100);
let tyff = new Guerrier("tyff",23,45,80);
console.log(phil);
console.log(tyff);