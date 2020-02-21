import React from 'react';
import { useEffect, useState } from 'react';
import config from './Config';
import axios from "axios";

const Heroes = () => {
    const [Heroes, SetHeroes] = useState([]);
    // The initial argument above is the name of the state, and the second is the function that 
    // will be used to alter it

    let encryption= require("md5")
    useEffect(() => {
        const { supsKey, marvelPublic, marvelPrivate, marvelTs } = config
        console.log("Hello")
        
        const apiCall = `https://gateway.marvel.com:443/v1/public/characters?name=Spider-Man&ts=${marvelTs}&apikey=${marvelPublic}&hash=${encryption(marvelTs+marvelPrivate+marvelPublic)}`
        axios.get(apiCall)
            // .then(result => result.json())
            .then(result => {
                console.log(result)
                SetHeroes([...Heroes,result.data.data.results[0].name])})
            .catch(() => console.log("Can’t access " + apiCall + " response.?"))
    },[]);

return (<div>{Heroes}</div>)
};

export default Heroes;