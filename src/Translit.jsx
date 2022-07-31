import React, { useState } from "react";

export const Translit = () => {
  const [value, setValue] = useState('');

  return <div>
    <textarea value={value} onChange={
      event=>{
        setValue(event.target.value);
      }
    }/>
  </div>
}