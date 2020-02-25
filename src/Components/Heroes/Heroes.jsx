import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import CurrentHero from "./CurrentHero"

const Heroes = (props) => {
    const [MarvelHeroes, SetMarvelHeroes] = useState([]);
    const [Heroes, SetHeroes] = useState([]);
    const [Comics,SetComics] = useState([]);
    // The initial argument above is the name of the state, and the second is the function that 
    // will be used to alter it
    // console.log("Current Props",props)

    let { supsKey, marvelPublic, marvelPrivate, marvelTs, heroeName } = props.appState
    // props.appState.heroeName = (props.match.params.Name) 
    // Whats above isn't working and it's part on App.js is also commented out

    let encryption = require("md5")

    useEffect(() => {

        // console.log(props, 'dsasddsa', props.appState.stateLifted)
        // if (props.appState){ // Commented out because it is currently not working
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
            console.log(Heroes)
        })
            .catch(() => console.log("Can’t access " + SupsApiCall))
        console.log(MarvelHeroes)
       

        // } 
    }, []);

    function getComicApiCall(MarvelHeroID){
        console.log(MarvelHeroID)
       
        const ComicApiCall = `https://gateway.marvel.com:443/v1/public/characters/${MarvelHeroID}/comics?&ts=${marvelTs}&apikey=${marvelPublic}&hash=${encryption(marvelTs + marvelPrivate + marvelPublic)}`

        axios.get(ComicApiCall).then(result => {
            SetComics([result.data.data])
            console.log("Comics API Request Result", result)
            
        })
            .catch(() => console.log("Can’t access " + ComicApiCall))

    }
    // console.log("Logging Heroes", Heroes[0] , MarvelHeroes[0] )
    

    return (
        <React.Fragment>

            {Heroes[0] && 
            <CurrentHero Heroes={Heroes} MarvelHeroes = {MarvelHeroes} Comics={Comics}/>
            }
        </React.Fragment>

    )



};

export default Heroes;