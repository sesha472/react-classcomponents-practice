import React, { Component } from 'react';

 class Mounting extends Component {
 
    constructor(props){
        super(props);
        console.log("this is constructor");
        this.state={

        }
      }

 static getDerivedStateFromProps( props,state){
 
    console.log("this is get drived state from props");
 return state;
 }

 componentDidMount(){
  console.log("didmount");
 }
 
    render() {
      console.log("render");
    return (
      <div>
        <h3>THIS IS CLASS COMPONENT LIFE CYCLE METHODS PRACTICE COMPONENT</h3>
        
      </div>
    )
  }
}
export default Mounting;
