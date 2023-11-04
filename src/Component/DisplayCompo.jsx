import React, { Component } from "react";
import './Style.css'
import ClassCompo from "./ClassCompo";
import FunctionCompo from "./FunctionCompo";

class DisplayCompo extends Component{
    constructor(){
        super()
        this.state ={
            countC: false,
            countF: false
        }
    }
    render(){
        return(
            <>
            
            <h1>Styling Using Function and Class Component</h1>
            <div className="Button-click">
                <button onClick={()=> this.setState({countF : !this.state.countF})}>To see styling in Function Component</button>
                <button onClick={() => this.setState({countC : !this.state.countC})}>To see styling in Class Component</button>
            </div>

            <div className="Display-Container">
                <div className="Display-Box1">
                    {this.state.countF && <FunctionCompo/>}
                </div>
                <div className="Display-Box2">
                    {this.state.countC && <ClassCompo/>}
                </div>
            </div>
            </>
        )
    }
}

export default DisplayCompo;

