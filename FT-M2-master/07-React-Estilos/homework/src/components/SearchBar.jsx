import React from 'react';
import style from './Estilos.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
     <input className={style.inputborder} type="text" placeholder='Ciudad...'/>
     <button className={style.searchbarbutton} onClick={() => props.onSearch('Alerta1')}>Agregar</button>
  </div>
};