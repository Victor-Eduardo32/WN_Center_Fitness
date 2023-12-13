import { Inicio } from "./Inicio";
import { Horarios } from "./Horarios";
import { Servicos } from "./Servicos";
import '../styles/App.css';


export function Principal(){
    return(
        <div className="Principal">
            <Inicio />
            <Horarios />
            <Servicos />
        </div> 
    );
}