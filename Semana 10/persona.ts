import { Serie } from "./serie";

export class Persona
{
	nombre: string;
	foto: string;
	descripcion: string;
	serie: Array<Serie>;
	
    constructor (nombre:string, foto:string,descripcion:string,serie){
        this.nombre=nombre;
        this.foto=foto;
        this.descripcion=descripcion
    }
    
}
let listapersonas= [

    [ "Álvaro Morte", "Foto","Es un actor español, conocido principalmente por sus papeles en series de televisión como la casa de papel",Serie[0]],
    [ "Ana Lucía Domínguez Tobón", "Foto"," Es una actriz y modelo colombiana, conocida por palpito",Serie[1]],
    [ "Ellen Pompeo", "Foto","Ellen Kathleen Pompeo es una actriz estadounidense conocida por su papel de Meredith Grey en la serie de televisión de ABC, Grey's Anatomy.",Serie[2]],
    [ "Phoebe Dynevor", "Foto","Phoebe Harriet Dynevor es una actriz británica, conocida por su papel de Daphne, la cuarta hija de Bridgerton, en el drama de época de Netflix Bridgerton."],Serie[3],
    [ "Penn Badgley", "Foto","Penn Dayton Badgley​ es un actor y músico estadounidense. Es conocido por su rol como Dan Humphrey en la serie de The CW Gossip Girl y la serie de Netflix You.",Serie[4]],
    ["Shonda Rhimes","Foto","Shonda Lynn Rhimes es una guionista, directora y productora estadounidense. Es conocida principalmente por ser la creadora de la serie de televisión Grey's Anatomy",Serie[2]],
    ["Camilo Vega","Foto","Director,conocido y felicitado por su proyecto más famoso palpito ",Serie[1]]
    ]
let persona: Persona;
persona=new Persona("Anna Cathcart","Foto","es una actriz canadiense, conocida principalmente por interpretar a kitty en Besos,Kitty",Serie[5]);