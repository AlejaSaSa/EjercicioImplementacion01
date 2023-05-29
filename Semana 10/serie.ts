import { Episodio } from "./Episodio";
import { Plataforma } from "./plataforma";
import { Persona } from "./persona";
import { Categoria } from "./categoria";
export class Serie
{

	nombre: string;
	imagen: string;
	episodios: Array<Episodio>;
	plataforma: Array<Plataforma>;
	persona: Array<Persona>;
	categorias: Array<Categoria>;
	

	
    constructor (nombre:string, imagen:string,Categoria: Array<Categoria>){
        this.nombre=nombre;
        this.imagen=imagen;
    }

        
    }
  
   let listaseries= [

        [ "la casa de papel", "Foto",Categoria[6]],
        ["Palpito", "Foto",Categoria[1],Categoria[5]],
        ["Greys Anatomy", "Foto",Categoria[0]],
        ["Bridgerton", "Foto",Categoria[7]],
        ["you", "Foto",Categoria[4]]
   ]
   let serie: Serie;
   serie=new Serie("Besos,Kitty","Foto",Categoria[0]);
	
