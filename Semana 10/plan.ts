 import { Plataforma } from "./plataforma";
 export class Plan
{
	 duracion: number;
	precio: number;
	plataformas: Array<Plataforma>;
	
	constructor (duracion:number, precio:number){
        this.duracion=duracion;
        this.precio=precio;
    // Operations
	
	}   
	
    }
    let plan: Plan;
    plan=new Plan(1,20.000);

