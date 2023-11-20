import React, { useState } from 'react';
import './Calstyle.css';


const Calculator = () => {
  const [data, setdata] = useState("")
  const [result, setresult] = useState("")
  const handler=(e)=>{
    setdata(e.target.value);
  }
    
  return (
    <div >
        <h1>Calculator</h1>

        <input type='text'name='data' value={data} onChange={handler}   /><br/>
        <button onClick={()=>setresult(eval(data))}>result</button><br/>
        <button onClick={()=>{  setresult(null)}}>reset</button><br/>
        <div className='result'> <span>result is </span>{result}</div>

       
       <div className="calkeypad">
         <button onClick={()=>setdata(data+"0")}>0</button>
        <button onClick={()=>setdata(data+"1")}>1</button>
        <button onClick={()=>setdata(data+"2")}>2</button>
        <button onClick={()=>setdata(data+"3")}>3</button>
        <button onClick={()=>setdata(data+"4")}>4</button>
        <button onClick={()=>setdata(data+"5")}>5</button>
        <button onClick={()=>setdata(data+"6")}>6</button>
        <button onClick={()=>setdata(data+"7")}>7</button>
        <button onClick={()=>setdata(data+"8")}>8</button>
        <button onClick={()=>setdata(data+"9")}>9</button>
        <button onClick={()=>setdata(data+"+")}>+</button>
        <button onClick={()=>{setdata(data+"-")}}>-</button>
        <button onClick={()=>{setdata(data+"*")}}>*</button>
        <button onClick={()=>{setdata(data+"/")}}>/</button>
        <button onClick={()=>{setdata(data+".")}}>.</button>
        </div>

        
        
        
    </div>
  )
}

export default Calculator
