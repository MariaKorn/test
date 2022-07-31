import React, { useState } from "react";
import CyrillicToTranslit from 'cyrillic-to-translit-js';



export const Translit = () => {
  const [value, setValue] = useState('');
  const cyrillicToTranslit = new CyrillicToTranslit();
  cyrillicToTranslit.transform('Какая-то строка', '_').toLowerCase();
  
  return <div>
    <textarea value={value} onChange={
      event=>{
        setValue(event.target.value);
      }
    }/>
  </div>
}