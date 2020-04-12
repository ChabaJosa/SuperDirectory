import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import CurrentHero from "./CurrentHero"
import { Link } from 'react-router-dom';

const Heroes = (props) => {
    const [MarvelHeroes, SetMarvelHeroes] = useState([]);
    const [Heroes, SetHeroes] = useState([]);
    const [Comics,SetComics] = useState([]);

    let { supsKey, marvelPublic, marvelPrivate, marvelTs } = props.appState

    let encryption = require("md5")

    useEffect(() => {

        const MarvelApiCall = `https://gateway.marvel.com:443/v1/public/characters?name=${props.match.params.Name}&ts=${marvelTs}&apikey=${marvelPublic}&hash=${encryption(marvelTs + marvelPrivate + marvelPublic)}`
        const SupsApiCall   = `https://www.superheroapi.com/api.php/${supsKey}/search/${props.match.params.Name}`

        axios.get(MarvelApiCall).then(result => {
            console.log("Full Marvel Result", result.data.data)
            SetMarvelHeroes([...MarvelHeroes, result.data.data])
            getComicApiCall( result.data.data.results[0].id)
        })
            .catch(() => console.log("Can’t access " + MarvelApiCall))

        axios.get(SupsApiCall).then(result => {
            console.log("Full Sups Result", result)
            SetHeroes([...Heroes, result.data])
        })
            .catch(() => console.log("Can’t access " + SupsApiCall))
            SetHeroes([])
       
    }, []);

    function getComicApiCall(MarvelHeroID){
        // console.log(MarvelHeroID)
        const ComicApiCall = `https://gateway.marvel.com:443/v1/public/characters/${MarvelHeroID}/comics?&ts=${marvelTs}&apikey=${marvelPublic}&hash=${encryption(marvelTs + marvelPrivate + marvelPublic)}`
        // Filter Data here to find what actually has a thumbnail and a Descriptioni/Title
        axios.get(ComicApiCall).then(result => {
            SetComics([...Comics,result.data.data])
            console.log("Comics API Request Result", result)
            
        })
            .catch(() => console.log("Can’t access " + ComicApiCall))

    }
    
    if (Heroes[0] !== undefined && !Heroes[0].error && Heroes[0].results["length"] > 0){
        console.log("Passed Heroes[0].results[length]", Heroes[0].results["length"])
        return (
            <React.Fragment>
                <CurrentHero Heroes={Heroes} MarvelHeroes = {MarvelHeroes} Comics={Comics} {...props}/>
            </React.Fragment>
    
        )

    } else if(Heroes[0] !== undefined && Heroes[0].error){
        return (
        <React.Fragment>
            <div className="supsError">
                <h4 className="HomeText" style={{color:"white"}}><i>{Heroes[0].error}</i></h4>
                <h1 className="HomeText" style={{color:"white"}}>Check your super spelling... 😁 </h1>
                <p>We are using external databases including Marvel's, so if they have Spider-Man instead of Spiderman or IronMan 
                    instead of Iron-man, we must play by their rules. 
                </p>
                <br></br>
                <Link to="/"><button className="btn btn-danger" style={{color:"white"}}>Home</button></Link>
            </div>
        </React.Fragment>
        )
    } else{
        return (
            <React.Fragment>
                <p style={{color:"white"}}>Loading... </p>
            </React.Fragment>
    
        )

    }
    
};

export default Heroes;