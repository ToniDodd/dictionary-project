import React from "react";


 export default function Synonyms(props) {
    if(props.synonyms.length){
        return (
          <div className="Synonyms">
            <strong>Synonym:</strong>
              <ul>
               {props.synonyms.map(function(synonyms, index) {
               return(
                <li key={index}>{synonyms}
                </li>
               ) 
            })}
              </ul>
          </div>
        );
    } else{
        return null;
    }
 }  
