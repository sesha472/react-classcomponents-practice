import React, { Component } from 'react'

export default class Eventhandlings extends Component {

constructor(props){
    super(props)
    this.state={
        title:"submit",
        show1:true,
        show2:false,
        persons:[{name:"sesha"},{name:"sai"},{name:"kumar"}]
    };
    
   
//   this.submit=this.submit.bind(this); //in old react vesrsions we have to bind the function s

}
    // we can write functions like beloow all is worked
//    submit(){
//     alert("namsthey");
//    }

      submit=(e)=>{   //aroow function has by default this bind dont need to use bind method

        console.log(e);
    }
 

  render() {
    return (
      <div>
        {/* <button onClick={this.submit.bind(this)}>{this.state.title} </button> */}
        <button onClick={(e)=>this.submit(e)}>{this.state.title} </button>
        {/* <button onClick={this.submit}>{this.state.title} </button> */}

       {this.state.show1&&<button >conditinal rendering button1 </button>} 
       {this.state.show2&&<button >conditinal rendering button2 </button>} <br></br>
       {this.state.show1?<button >conditinal rendering button2 </button>:null} 
       <div>
        {this.state.persons.map((items,index)=>(
           <p key={index}>{items.name}</p>//key used for identify unique key better to use id's insted index to reduce rendering for example adding item in starting makes re reding total list
        ))}
       </div>



        
      </div>
    )
  }
}
