import React from 'react';
import { useEffect, useState } from 'react';
// import config from '../Config';
import axios from "axios";

const Heroes = (props) => {
    const [MarvelHeroes, SetMarvelHeroes] = useState([]);
    const [Heroes, SetHeroes] = useState([]);
    // The initial argument above is the name of the state, and the second is the function that 
    // will be used to alter it
    // console.log("Current Props",props)

    let { supsKey, marvelPublic, marvelPrivate, marvelTs, heroeName } = props.appState
    // props.appState.heroeName = (props.match.params.Name) 
    // Whats above isn't working and it's part on App.js is also commented out

    let encryption = require("md5")

    useEffect(() => {
        
        console.log(props, 'dsasddsa', props.appState.stateLifted)
        // if (props.appState){ // Commented out because it is currently not working
        const MarvelApiCall = `https://gateway.marvel.com:443/v1/public/characters?name=${props.match.params.Name}&ts=${marvelTs}&apikey=${marvelPublic}&hash=${encryption(marvelTs + marvelPrivate + marvelPublic)}`
        const SupsApiCall = `https://www.superheroapi.com/api.php/${supsKey}/search/${props.match.params.Name}`

        axios.get(MarvelApiCall).then(result => {
            console.log("Full Marvel Result", result.data.data)
            SetMarvelHeroes([...MarvelHeroes, result.data.data])
        })
            .catch(() => console.log("Can’t access " + MarvelApiCall))

        axios.get(SupsApiCall).then(result => {
            console.log("Full Sups Result", result)
            SetHeroes([...Heroes, result.data])
            console.log(Heroes)
        })
            .catch(() => console.log("Can’t access " + SupsApiCall))

        // } 
    }, []);

    // console.log("Logging Heroes", Heroes[0] && Heroes[0].results[0].name)

    return (
        <React.Fragment>
            
            {MarvelHeroes[0] && Heroes[0] && <> <div>{MarvelHeroes[0].results[0].name}</div>
            {/* {Heroes[0] && Heroes[0].results? (Heroes[0].results[0].name) : ("Not ready...")} */}
                {console.log("Logging MarvelHeroes", MarvelHeroes)}


                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-default navbar-static-top">
                            {/* Topbar Navbar */}
                            <ul className="navbar-nav ml-1">
                                {/* Nav Item - User Information */}
                                <li className="nav-item dropdown no-arrow">
                                    <div className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="img-profile rounded-circle" src={`${MarvelHeroes[0].results[0].thumbnail.path}.${MarvelHeroes[0].results[0].thumbnail.extension}`} height="60" />
                                        <span className="ml-2 d-none d-lg-inline text-grey-600 small" style={{color:"white"}}>{MarvelHeroes[0].results[0].name}</span>
                                    </div>
                                </li>
                            </ul>
                            {/* Topbar Search */}
                            <form className="d-none d-sm-inline-block form-inline mr-right ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                            {/* Page Heading */}
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Download PDF</a>
                            </div>
                            {/* Content Row */}
                            <div className="row">
                                {/* Comics */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Comics</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{MarvelHeroes[0].results[0].comics.available}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Stories */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Stories</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{MarvelHeroes[0].results[0].stories.available}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Series*/}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Series</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{MarvelHeroes[0].results[0].series.available}</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Tasks */}
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks</div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm mr-2">
                                                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Content Row */}
                            <div className="row">
                                {/* Content Column */}
                                <div className="col-lg-6 mb-4">
                                    {/* Project Card Example */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">PowerStats</h6>
                                        </div>
                                        <div className="card-body">
                                            <h4 className="small font-weight-bold">Intelligence <span className="float-right">{Heroes[0].results[0].powerstats.intelligence}</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.intelligence}%` }} aria-valuenow={Heroes[0].results[0].powerstats.intelligence} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="small font-weight-bold">Strength <span className="float-right">{Heroes[0].results[0].powerstats.strength}</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.strength}%` }} aria-valuenow={Heroes[0].results[0].powerstats.strength} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="small font-weight-bold">Speed <span className="float-right">{Heroes[0].results[0].powerstats.speed}</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.speed}%` }} aria-valuenow={Heroes[0].results[0].powerstats.speed} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="small font-weight-bold">Durability <span className="float-right">{Heroes[0].results[0].powerstats.durability}</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.durability}%` }} aria-valuenow={Heroes[0].results[0].powerstats.durability} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="small font-weight-bold">Power <span className="float-right">{Heroes[0].results[0].powerstats.power}</span></h4>
                                            <div className="progress mb-4">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.power}%` }} aria-valuenow={Heroes[0].results[0].powerstats.power} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                            <h4 className="small font-weight-bold">Combat <span className="float-right">{Heroes[0].results[0].powerstats.combat}</span></h4>
                                            <div className="progress">
                                                <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${Heroes[0].results[0].powerstats.combat}%` }} aria-valuenow={Heroes[0].results[0].powerstats.combat} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Color System */}
                                    <div className="row">
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-primary text-white shadow">
                                                <div className="card-body">
                                                    Primary
                                                    <div className="text-white-50 small">#4e73df</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-success text-white shadow">
                                                <div className="card-body">
                                                    Success
                                                    <div className="text-white-50 small">#1cc88a</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-info text-white shadow">
                                                <div className="card-body">
                                                    Info
                                                    <div className="text-white-50 small">#36b9cc</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-warning text-white shadow">
                                                <div className="card-body">
                                                    Warning
                                                    <div className="text-white-50 small">#f6c23e</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-danger text-white shadow">
                                                <div className="card-body">
                                                    Danger
                                                    <div className="text-white-50 small">#e74a3b</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-secondary text-white shadow">
                                                <div className="card-body">
                                                    Secondary
                                                    <div className="text-white-50 small">#858796</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-light text-black shadow">
                                                <div className="card-body">
                                                    Light
                                                    <div className="text-black-50 small">#f8f9fc</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 mb-4">
                                            <div className="card bg-dark text-white shadow">
                                                <div className="card-body">
                                                    Dark
                                                    <div className="text-white-50 small">#5a5c69</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    {/* Description */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Description</h6>
                                        </div>
                                        <div className="card-body">
                                            <p className="mb-0">{MarvelHeroes[0].results[0].description}</p>
                                        </div>
                                    </div>
                                    {/* Illustrations */}
                                    <div className="card shadow mb-4">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="text-center">
                                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src="img/undraw_posting_photo.svg" alt="" />
                                            </div>
                                            <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                                            <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Content Row */}
                            <div className="row">
                                
                            </div>
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* End of Main Content */}
                </div></>}







        </React.Fragment>

    )



};

export default Heroes;