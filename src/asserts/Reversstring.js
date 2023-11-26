import React,{useState} from 'react'


//reversting the input string 
const Reversstring = () => {
    const [data, setdata] = useState("");
    const [result, setresult] = useState("")

    // const reverseHandler=(e)=>{
    //     e.preventDefault();
    //     const output=data.split("").reverse().join("");
    //     // console.log(output);
    //     setresult(output)

    // }
//    using forloop 
    const reverseHandler=(e)=>{
            e.preventDefault();
            let reversstring="";
                    for(let i=data.length-1; i>=0; i-- ){
                        reversstring=reversstring+data[i];
                    }
                    console.log(reversstring);
            setresult(reversstring)
    
        }


    
  return (
    <div>
        {result}
        <form onSubmit={reverseHandler}> 
        <input type='text' onChange={(e)=>setdata(e.target.value)}  /><br/>
        <button >submit</button>

        </form>
    </div>
  )
}

export default Reversstring
