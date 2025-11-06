import React from "react";

function Search({searchTerm,setSearchTerm}){
    return(
    <input
    type="text"
    placeholder="Enter product name"
    value={searchTerm}
    onChange={(e)=>setSearchTerm(e.target.value)}
    style={{padding:"3px",width:"250px", borderRadius:"5px",}}
    />);
}

export default Search;