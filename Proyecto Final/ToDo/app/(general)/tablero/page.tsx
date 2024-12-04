import React from 'react';
import style from '../../styles/styles.module.css';
import Tablero from '../../components/Tablero';

export default function Page() {
    
    return (
      <div>
        <div className={`${style.kanbanBoard}`} style={{marginTop: 65}}>
            <Tablero title="Pendientes" icon="" color='#9ad0f5' borderColor="#37a3eb" idEstado={1} />
            <Tablero title="En proceso" icon="" color="#ffcf9f" borderColor="#ffa54c" idEstado={2} />
            <Tablero title="Atrasados" icon="" color="#ffb1c1" borderColor="#ff8aa3" idEstado={3} />
            <Tablero title="Completados" icon="" color="#a5dfdf" borderColor="#53c3c3" idEstado={4} />
            <Tablero title="Borrados" icon="" color="#ccb2ff" borderColor="#ff6787" idEstado={5} />
            <Tablero title="Cancelados" icon="" color="#e4e5e7" borderColor="#cecece" idEstado={6} />
          </div>
      </div>
    );
  }
  