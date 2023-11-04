import React, { Component } from "react";

class ClassCompo extends Component{
    constructor(){
        super();
        this.state = {
            Head1: "This is created by class base component",
            head2: 'This is done by Internal CSS',
            head3: 'This is done by inline CSS',
        }
        this.a ={
            Name: 'Bhushan',
            Batch: 'EA25',
        }
    }
    render(){
        return(
            <div className="Class-Base">
                <h1 className="heading">{this.state.Head1}</h1>
                <p className="exeternal-css">{this.state.head2}</p>
                <p style={{color:'red', fontSize:'20px'}}>{this.state.head3}</p>
                <p>My name is {this.a.Name} and my batch is {this.a.Batch}</p>

            </div>
        )
    }
}

export default ClassCompo;