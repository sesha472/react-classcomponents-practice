import React,{useState,useEffect} from 'react'

const Showscreensize = () => {
    const [screensize, setscreensize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });
      

    const updatesize=()=>{
        setscreensize({
            width:window.innerWidth,
            height:window.innerHeight
          })
    }
    useEffect(() => {
        window.addEventListener("resize",updatesize)
      
    
      return () => {
       window.removeEventListener("resize",updatesize)
    }}, [] )
    
  return (
    <div>

        <h1>the Height and Width of THe page is </h1>
        {`page width is : ${screensize.width}`}<br></br>
        {`page height is : ${screensize.height}`}
      
    </div>
  )
}

export default Showscreensize
