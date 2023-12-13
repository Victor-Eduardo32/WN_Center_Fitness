import '../styles/Horario.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export function Horarios(){
    return(
        <div className='Horario'>
            <FontAwesomeIcon icon={faClock} className='clock-icon' />
            <h2>Nossos horários</h2>
            <div className='container-horarios'>
                <div>
                    <h4>Segunda a Sexta</h4>
                    <p>05:30 ás 21:30</p>
                </div>
                <div>
                    <h4>Sábado</h4>
                    <p>09:00 ás 15:00</p>
                </div>
                <div>
                    <h4>Domingo</h4>
                    <p>Fechado</p>
                </div>
            </div>
        </div>
    );
}