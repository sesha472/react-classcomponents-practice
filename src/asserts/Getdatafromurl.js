import React, { useEffect ,useState} from 'react'

const Getdatafromurl = () => {
    const [data, setdata] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then
        ( response=>response.json()).then
            (result=>setdata(result))

    },[data])
    
  return (
    <div>
         
        {data.map(
        (item)=><li key={item.id}>{item.name}</li>
       )}
      
    </div>
  )
}

export default Getdatafromurl;
