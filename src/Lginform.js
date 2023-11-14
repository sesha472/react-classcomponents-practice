import React, { Component } from 'react'

export default class Lginform extends Component {
    constructor(props){
        super(props); {
            this.state={
                username:"",
                password:"",
                
            }
        }
    }

    onChangeusername=(usernamefromuser)=>{
    this.setState({username:usernamefromuser})
    }
    onChangepasword=(passwordfromuser)=>{
        this.setState({password:passwordfromuser})
        }
     
   

  login=(e)=>{
    e.preventDefault();
   if(this.state.username==="sesha"&& this.state.password==="sai"){
    alert("login sucessful")
   }else{
    alert("login fail")

   }
    

}
  render() {

    return (
      <div style={{backgroundColor:"brown",padding:"10px",width:"50%",marginLeft:"25%",boxShadow:"1px 2px 7px black"}}>
        <form onSubmit={this.login}>
            <input type='text' value={this.state.username} onChange={(event)=>this.onChangeusername(event.target.value)} placeholder='username'/><br/>
            <input type="password" value={this.state.password}   onChange={(event)=>this.onChangepasword(event.target.value)} placeholder='password'/><br></br>
            <input type='submit' value="login" />
        </form>

        
      </div>
    )
  }
}
