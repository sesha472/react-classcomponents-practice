import React, { useState } from 'react';


const Calculator = () => {
  const [data, setdata] = useState("")
  const [result, setresult] = useState("")
  const handler=(e)=>{
    
    setdata(e.target.value);
  }
    
  return (
    <div >
        <h1>Calculator</h1>

        <input type='text' onChange={handler} /><br/>
        <button onClick={()=>setresult(eval(data))}>result</button><br/>
        <button onClick={()=>{ setresult("")}}>reset</button><br/>
        {result}
        
        
        
    </div>
  )
}

export default Calculator
