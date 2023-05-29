//import { Serie } from "./serie";
 export class Categoria
{
	nombre: string;
	//series: Array<Serie>;
	
	constructor(nombre:string,){
		this.nombre=nombre;
	}

}
	
let listacategoria:Categoria [];
listacategoria= new Categoria [["Drama"] ["Accion"]["Humor"]["Terror"]["Thriller"]["Ciencia Ficción"]["Suspenso"]["Romance"]]

let categoria: Categoria;
categoria=new Categoria("Musical");