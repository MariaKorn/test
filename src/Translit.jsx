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

    <button onClick={()=> {
      const cyrillicToTranslit = new CyrillicToTranslit();
      const result = cyrillicToTranslit.transform(value, ' ');
      setTrans(result);
    }}>
      Translit
    </button>
    
    <p>
    {trans}
    </p>
    
  

    

  </div>
}