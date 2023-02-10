import React from "react";

export default function Example(props){
    if (props.example){
        return(
            <p><strong>Example: </strong> 
            {props.example}</p>
        )
    } else{
        return null;
    }
}