import { Plan } from "./plan";
import { Serie } from "./serie";

export class Plataforma
{
	nombre: string;
	sitioWeb: String;
	planes: Array<Plan>;
	series: Array<Serie>;
	
	constructor (nombre:string, sitioWeb:string,series: Array<Serie>=[]){
        this.nombre=nombre;
        this.sitioWeb=sitioWeb;
		this.planes=[];
		this.series= series;
    }
      agregarPlan(plan:Plan):void{
		this.planes.push(plan)
	  }
	}
	let listaPlataformas= [
		["Netflix","Netflix.com"],
		["HBO Max","HBO.com"],
		["Disney","Disneyplus.com"],
		["Paramount","Paramount.com"],
		["Amazon Prime","AmazonPrime.com"]]
	let plataforma: Plataforma;
	plataforma=new Plataforma("Cineplus","Cineplus.com");