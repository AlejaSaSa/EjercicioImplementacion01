import { Serie } from "./serie";
export class Episodio
{
	nombre: string;
	resumen: string;
	duración: number;
	serie: Serie;
	
    // Implemented attributes
	
	constructor(nombre:string,resumen:string, duración:number,serie:Serie){
		this.nombre=nombre;
	     this.resumen=resumen
		this.duración=duración
	}
	
}
let episodio: Episodio;
episodio=new Episodio("Mi pareja ideal","Las notas finales, las clasificaciones y algunas verdades difíciles despiertan emociones fuertes, y Kitty toma una decisión mientras su futuro en KISS pende de un hilo.", 30,Serie[5]);
