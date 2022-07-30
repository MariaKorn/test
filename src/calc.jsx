import React, {useState} from 'react';
import { Button } from './button';
import './calc.css';
import {evaluate} from 'mathjs';

export const Calc = (props) => {
    const [expr, setExpr] = useState('');
    const clb = (symbol)=>{
        setExpr(expr+symbol);
    };

    return <div>
            <h1 onClick={()=>{setExpr('');}}>Calculator</h1>
            <div className='calc'>

                <div className='result'>
                    <input value={expr} onChange={event=>{
                        console.log(event);
                        setExpr(event.target.value);
                    }}/>
                </div>

                <div className='keyboard'>
                    {['1','2','3','4','5','6','7','8','9','0'].map((element)=>{
                        return <Button symbol={element} onClick={clb}/>;
                    })}
                </div>

                <div className="operations">
                    {['+','-','*','/'].map((element)=>{
                        return <Button symbol={element} onClick={clb}
                        isActive={true}/>;
                    })}
                    <button onClick={()=>{
                        const result = evaluate(expr)
                        alert(result);
                    }}>=</button>
                </div>

            </div>
            
    </div>;
};
