import React, { useEffect ,useState} from 'react';
import axios from 'axios';

const Getdatafromurl = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{

        // fetch("https://jsonplaceholder.typicode.com/users").then
        // ( response=>response.json()).then
        //     (result=>setdata(result))
        // we can do same thing using axios by installing the libabry 
         axios.get("https://jsonplaceholder.typicode.com/users").then(
            response=>setdata(response.data) 
         )

    },[])
    
  return (
    <div>
         
        {data.map(
        (item)=><li key={item.id}>{item.name}</li>
       )}
      
    </div>
  )
}

export default Getdatafromurl;
