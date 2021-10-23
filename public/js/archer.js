import Guerrier from "./guerrier.js";

class Archer extends Guerrier{
    constructor(nom,age,force,vie,fleche){
        super(nom,age,force,vie);
        this.fleche = fleche;
    }
}
let archer = new Archer("philippe",25,13,100,35);
console.log(archer);