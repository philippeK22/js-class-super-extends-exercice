import Humain  from "./humain.js";

class Mage extends Humain{
    constructor(nom,age,magie){
        super(nom,age)
        this.magie = magie;
    }
    
}

let mag1 = new Mage("lona",20,15);
let mag2 = new Mage("kanen",25,45);
let mag3 = new Mage("orosco",24,50);

console.log(mag1);
console.log(mag2);