import React, { useState } from "react";
import CyrillicToTranslit from 'cyrillic-to-translit-js';



export const Translit = () => {
  const [value, setValue] = useState('');
  const [trans, setTrans] = useState('');
  const [way, setWay] = useState('ru_en');


  return <div>
    <textarea value={value} onChange={
      event=>{
        setValue(event.target.value);
      }
    }/>

  <p>
  <button onClick={()=> {
    const cyrillicToTranslit = new CyrillicToTranslit();
    let result;
    if (way==='ru_en') {
      
      result = cyrillicToTranslit.transform(value);
      
    }
    else {
      result = cyrillicToTranslit.reverse(value);
    }
    setTrans(result);
    }}>
      Translit
    </button>
  </p>
    

    <select onChange={
      event=>{
        setWay(event.target.value);
      }
    }>
      <option value="ru_en" selected={way==='ru_en'}>ru - en</option>
      <option value="en_ru" selected={way==='en_ru'}>en - ru</option>
    </select>

    <p>
    {trans}
    </p>
    

  </div>
}