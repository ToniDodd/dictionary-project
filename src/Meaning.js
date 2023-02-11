import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";


export default function Meaning(props){
    console.log(props)
    return(
        <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p><strong>Definition: </strong> {props.meaning.definitions[0].definition}</p>
        
        <Example example={props.meaning.definitions[0].example} />
        <Synonyms synonyms={props.meaning.synonyms}/>
        </div>
                    
        );
}
