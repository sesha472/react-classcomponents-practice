import React, { useState } from 'react'

const Formvalidation = () => {
   const [msg1, setmsg1] = useState(null)
   const [msg2, setmsg2] = useState(null)
    const [data, setdata] = useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })

    const {username,email,password,confirmpassword} = data;
    
   const  changeIputhandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value});
    }
    
    const onSumbitHandler=(e)=>{
        e.preventDefault();
        if (username.length<=5){
            setmsg2("user name should be  min 5 ")
        }

        if(password===confirmpassword){
            setmsg1(null)
        }else{
            setmsg1("paswword not matching");
        }
        console.log(data);
    }
    
    
  return (
    <div>
        <form onSubmit={onSumbitHandler}>
        <input type='text' name="username" value={username} onChange={changeIputhandler}/><br/>
           {msg2 ?<><span>"user name should be  min 5 "</span><br></br></>:null}
        
        <input type='text' name="email" value={email} onChange={changeIputhandler}/><br/>
        <input type='text' name="password" value={password} onChange={changeIputhandler}/><br/>
        <input type='text' name="confirmpassword" value={confirmpassword} onChange={changeIputhandler}/><br/>
        {msg1}<br/>
        <input type='submit' name='submit' />
        </form>
    </div>
  )
}

export default Formvalidation;
