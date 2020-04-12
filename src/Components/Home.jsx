import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';


class Home extends Component {

    state = {
        heroeName: "",
        marvelPublic:"8fc6c25d7b8c17ab22e20964381a9452",
        marvelPrivate:"d6fa3e44c676e9fcc6339f0d4d84a31bf70e71d0",
        marvelTs:1,
        coolHeroesComics:["Daredevil", "Moon Knight", "Thor", "Punisher", "Captain America", "Iron man", "Hulk","Wolverine","Thanos","Spider-Man","Blade"],
        comics:[]
    }
    

    addHeroeProperty = (e) => {

        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: value }) // Matches the name="something" with the e.target.name
    }

    componentDidMount= () => {
        let encryption = require("md5")
        const randomNumber = (min, max) => {  return Math.floor(Math.random() * (max - min) + min); }  
        const MarvelApiCall = `https://gateway.marvel.com:443/v1/public/characters?name=${this.state.coolHeroesComics[randomNumber(0,this.state.coolHeroesComics.length-1)]}&ts=${this.state.marvelTs}&apikey=${this.state.marvelPublic}&hash=${encryption(this.state.marvelTs + this.state.marvelPrivate + this.state.marvelPublic)}`
        axios.get(MarvelApiCall).then(result => {
            console.log("Full Marvel Result", result.data.data)
            const ComicApiCall = `https://gateway.marvel.com:443/v1/public/characters/${result.data.data.results[0].id}/comics?&ts=${this.state.marvelTs}&apikey=${this.state.marvelPublic}&hash=${encryption(this.state.marvelTs + this.state.marvelPrivate + this.state.marvelPublic)}`
            // Filter Data here to find what actually has a thumbnail and a Descriptioni/Title
            axios.get(ComicApiCall).then( result => {
                // Should get 3 random comics here 
                let filteredResults = result.data.data.results.filter(everyResult => {
                    return everyResult.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                })
                 
                if (filteredResults.length > 3){
                    const picked3 = [filteredResults[randomNumber(0,this.state.coolHeroesComics.length-1)],filteredResults[randomNumber(0,this.state.coolHeroesComics.length-1)],filteredResults[randomNumber(0,this.state.coolHeroesComics.length-1)]]
                    // Checking for duplicates
                    if (filteredResults[0]!==filteredResults[1] && filteredResults[0]!==filteredResults[2]){
                        this.setState({comics:picked3})
                        console.log("Comics API Request Result", result.data.data)
                        console.log(this.state)
                    } else {
                        const picked3 = [filteredResults[0],filteredResults[1],filteredResults[2]]
                        this.setState({comics:picked3})
                        console.log("Comics API Request Result", result.data.data)
                        console.log(this.state)
                    }
                } else {
                    const picked3 = filteredResults
                    console.log("Here's the 3 you picked",picked3)
                    this.setState({comics:picked3})
                    console.log("Comics API Request Result", result.data.data)
                    console.log(this.state)
                }
                console.log("Comics API Request Result", result.data.data)
                console.log(this.state)
            })
            .catch(() => console.log("Can’t access " + ComicApiCall))
        })
        .catch(() => console.log("Can’t access " + MarvelApiCall))
    }


    getAllTheComics = (comics) => { 
        return (
            comics.map(everyComic => {
                return (
                    <div className="card mb-3" style={{ width: "18rem", backgroundColor:"transparent" }}>
                        <div className="g-card">
                            <div className="card-container">
                                <div className="card-front">
                                    <img className="card-img-top" src={`${everyComic.thumbnail.path}.${everyComic.thumbnail.extension}`} alt="Card image cap" />
                                    <div className="card-body d-flex align-items-center justify-content-center">
                                        <p className="card-text">{everyComic.title}</p>
                                    </div>
                                </div>
                                <div className="card-back">
                                    <div className="backContent">
                                        {/* <div className="card-text">{ "More Details:"} <Link to={everyComic.urls ? `../${everyComic.urls[0].url}`: "www.marvel.com" } >Click Here</Link></div> */}
                                        <div className="card-text">{ "More Details:"} <a target="_blank" rel="nofollow" href={everyComic.urls ? `${everyComic.urls[0].url}`: "www.marvel.com" }>Click Here</a></div>
                                        <br></br>
                                        {/* <div className="card-text">{ "Want one?:"}    <Link to={everyComic.urls[1] ? `../${everyComic.urls[1].url}`: "www.marvel.com"} >Click Here</Link></div> */}
                                        <div className="card-text">{ "Want one?:"} <a target="_blank" rel="nofollow" href={everyComic.urls[1] ? `${everyComic.urls[1].url}`: "www.marvel.com" }>Click Here</a></div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }



    render() {
        // console.log("Home Component", this.state)
        if (this.state.comics.length > 0){
        return (
            <React.Fragment>

                <div className="container" style={{position:"relative", top:"10vh"}}>

                    <div className="row py-5">
                        <div className="col-lg-9 mx-auto text-white text-center HomeText">
                            <h1 className="display-1 hover-underline-animation" >Super Directory</h1>
                            <br></br>
                            <h3 className="hover-underline-animation">Collection of Superhero Data</h3>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h5 className="font-weight-light mb-4 font-italic text-white HomeText hover-underline-animation">Remember to type correctly !</h5>
                            <div className="bg-transparent p-5 rounded shadow">

                                <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                                    <div className="d-flex mb-4">
                                        <input onChange={this.addHeroeProperty} className="form-control-bs" name="heroeName" type="search" placeholder="Search for heroes !" aria-describedby="button-addon5" />
                                            <div className="input-group-append" onClick={() => this.props.history.push(`Heroes/${this.state.heroeName}`)}>
                                                <button  type="submit" className="btn btn-danger">+</button>
                                            </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

                {/* Comics Here */}


                <div className="">
                    <div className="input-group-append justify-content-center">
                        <button className="btn btn-danger" type="submit" onClick={() => window.location.reload()}>Random Comcis</button>
                    </div>
                    {this.state.coolHeroesComics && 
                                                
                            <div className="row d-flex m-4 justify-content-around">
                                {this.getAllTheComics(this.state.comics)}
                            </div>
                    }
                </div>

            </React.Fragment>
           
        );

        } else{
            return (
                <React.Fragment>
                    <p style={{color:"white"}}>Loading... </p>
                </React.Fragment>
        
            )
    
        }
    }
}

export default Home;




