import React from 'react';
import style from '../../styles/styles.module.css';
import Tablero from '../../components/Tablero';

export default function Page() {
    
    return (
      <div>
        <div className={`${style.kanbanBoard}`} style={{marginTop: 68}}>
            <Tablero title="Pendientes" icon="" color='#70d7ff' idEstado={1} />
            <Tablero title="En proceso" icon="" color="#fbba3c" idEstado={2} />
            <Tablero title="Atrasados" icon="" color="#e0465e" idEstado={3} />
            <Tablero title="Completados" icon="" color="#1fc777" idEstado={4} />
            <Tablero title="Cancelados" icon="" color="#d6d0d0" idEstado={5} />
            <Tablero title="Borrados" icon="" color="#a247e0" idEstado={6} />
          </div>
      </div>
    );
  }
  