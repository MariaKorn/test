import React, { useState } from "react";
import CyrillicToTranslit from 'cyrillic-to-translit-js';



export const Translit = () => {
  const [value, setValue] = useState('');
  const [trans, setTrans] = useState('');


  return <div>
    <textarea value={value} onChange={
      event=>{
        setValue(event.target.value);
      }
    }/>

  <p>
  <button onClick={()=> {
      const cyrillicToTranslit = new CyrillicToTranslit();
      const result = cyrillicToTranslit.transform(value, ' ');
      setTrans(result);
    }}>
      Translit
    </button>
  </p>
    

    <select>
      <option value="ru_en">ru - en</option>
      <option value="en_ru">en - ru</option>
    </select>

    <p>
    {trans}
    </p>
    

  </div>
}