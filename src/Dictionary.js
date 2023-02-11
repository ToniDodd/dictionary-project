import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css"


export default function Dictionary(){
    let [keyword, setKeyword] = useState("coding");
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

function handleResponse(response) {
    setResults(response.data[0]);
}

function getPhotos(response){
    setPhotos(response.data.photos);
}

function search(){
 //documentation: https://dictionaryapi.dev/
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);

 let pexelsApiKey = "1spsDNaFsK52l1ZtgfjT6HXqpbXW2jC5V2UhOtiRt0JmOBRGkgW5K9Xu"
 let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`
 axios.get(pexelsApiUrl,{ headers: {"Authorization" : `Bearer${pexelsApiKey}`}}).then(getPhotos);
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
             <Photos photos={photos} />        
        </form>
         </section>
    </div>);
} else{
    load();
    return"Loading"
}
   
}