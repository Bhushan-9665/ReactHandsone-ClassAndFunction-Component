import React from "react";

var Heading = 'This is created by Function base component'
var element1 = 'This is done by Internal CSS'
var element2 = 'This is done by inline CSS'


function FunctionCompo(){

    return(
        <>
        <div className="Fuc-Box">
            <h1>{Heading}</h1>
            <p className="Fun-CSS">{element1}</p>
            <p style={{color: "blue"}}>{element2}</p>
        </div>
        </>
    )
}



export default FunctionCompo;