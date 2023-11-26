import axios from 'axios'
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Formvalidation = () => {

    const notify = () => toast("Mr sesha form is sucessfully submitted");
   const [msg1, setmsg1] = useState(null)
   const [msg2, setmsg2] = useState(false)
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
        if (username.length<5){
            setmsg2(true);
        }

        if(password===confirmpassword){
            setmsg1(null)
        }else{
            setmsg1("paswword not matching");
        }
        
        axios.post("https://seshanov23-default-rtdb.firebaseio.com/rigister.json",data).then(
        //    alert("submited")
        )
        console.log(data);
        notify();

    }
    
    
  return (
    <div>
        <ToastContainer/>
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
