import React, { Component } from "react";
 
export default class Home extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
     content: ""
   };
 }
 
 componentDidMount() {
   this.setState({content:"Welcome to Garage Management system"})
 }
 
 render() {
   return (
     <div className="container">
       <header className="jumbotron">
         <h3>{this.state.content}</h3>
       </header>
     </div>
   );
 }
}
