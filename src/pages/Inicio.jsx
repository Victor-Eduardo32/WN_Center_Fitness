import '../styles/Inicio.css';
import { useState, useEffect } from 'react';

export function Inicio(){
  const [imagemIndex, setImagemIndex] = useState(0);
  const imagens = ['./public/homem_malhando.png', './public/jiu-jitsu.png', './public/muay-thai.png'];

  useEffect(() =>{
    const interval = setInterval(() =>{
      setImagemIndex((prevIndex) => (prevIndex+1) % imagens.length)
    }, 5000)

    return () => clearInterval(interval);
  });

  return (
    <div className="Home">
          <div className='logoApp'>
              <img src='./weslley-logo.png'/> 
          </div>
        
        <div className='inicioHome'>
          <div className='apresentacaoHome'>
              <h4>FITNESS GYM</h4>
              <h2>Já se desafiou hoje?</h2>
              <p>Que tal tentar algum exercício novo para o seu corpo? A mudança pode começar hoje, só depende de quanta energia você coloca nela. Existe apenas um canto do universo que você pode ter certeza de aperfeiçoar, que é você mesmo.</p>
              <div className='contatoHome'>
                <a href="https://wa.me/77999448827" target='blank'><input type="button" value={'Entre em contato'}/></a>
                <a href="https://www.instagram.com/wncenterfitness/" target='blank'><input type="button" value={'Nosso Instagram'}/></a>
              </div>
              
          </div>{/* apresentacaoHome */}
          <div className='imagensHome'>
            {imagens.map((imagem, index) => (
            <img
              key={index}
              src={imagem}
              className={`transition ${index === imagemIndex ? '' : 'hide'}`}
              alt={`Imagem ${index + 1}`}
            />
            ))}
          </div>{/* imagensHome */}
        </div>{/*inicioHome*/}
    </div>
    
  );
}

