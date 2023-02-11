import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css"


export default function Dictionary(){
    let [keyword, setKeyword] = useState("coding");
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
    setResults(response.data[0]);
}
function search(){
 //documentation: https://dictionaryapi.dev/
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event){
    event.preventDefault();
    search();
}

function keywordChange(event){
    setKeyword(event.target.value);
}
function load(){
    setLoaded(true);
    search();
}

if(loaded){
return( 
   <div className="Dictionary">
     <section>
        <p>What word do you want to look up?</p>
        <form onSubmit={handleSubmit}> 
            <input type="search" placeholder="Coding" onChange={keywordChange} />           
            <Results results={results}/>          
        </form>
         </section>
    </div>);
} else{
    load();
    return"Loading"
}
   
}