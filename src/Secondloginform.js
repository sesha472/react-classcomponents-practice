import React, { useState } from 'react';

const Secondloginform = () => {
    const [data, setdata] = useState({
        username:"",
        password:""
    })

    const {username,password}=data;

    const onChangeInputHandler=(e)=>{
        setdata({ ...data,[e.target.name]:[e.target.value]})

    }


    const onSubmitHandler=(e)=>{
        e.preventDefault();
        console.log(username,password);
        
    }


  return (
    <div>
        <hr></hr>
        <h1>Login form using funtional component</h1>
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="username" value={username} onChange={onChangeInputHandler}  /><br/>
             <input type='password' name="password" value={password} onChange={onChangeInputHandler}  />

            <input type='submit' name="submit" />
        </form>
        <h3>{data.username}</h3>
        
      <hr></hr>
    </div>
  )
}

export default Secondloginform;
