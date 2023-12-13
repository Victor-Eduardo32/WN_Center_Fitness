import '../styles/Servicos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

export function Servicos(){
    return(
        <div className="Servicos">
            <FontAwesomeIcon icon={faDumbbell} className='services-icon'/>   
            <h2>Nossos serviços</h2>
            <div className='todos-servicos'>
                <h4>Musculação</h4>
                <h4>Crossfit</h4>
                <h4>Dança</h4>
                <h4>Muay-Thai</h4>
                <h4>Kangoo Jump</h4>
                <h4>Jiu-Jitsu</h4>
                <h4>Funcional</h4>
            </div>
        </div>
    );
}