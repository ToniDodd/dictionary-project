import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"


export default function Dictionary(){
    let [keyword, setKeyword] = useState("");

function handleResponse(response) {
    console.log(response.data);
}

function search(event){
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
}

function keywordChange(event){
    setKeyword(event.target.value);

}


    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={keywordChange} />
        </form>
    </div>
}