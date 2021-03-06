import React, { Component } from 'react';
import Player from "../YouTube/Player"

class currentHero extends Component {

    state = {} 

    addHeroeProperty = (e) => {

        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: value }) // Matches the name="something" with the e.target.name
        console.log(key, value)
    }   // This is already in the Home component, which means it can be passed down as a prop

    getAllTheComics = (comicProps) => { // The parameter should take --> this.props.Comics[0].results

        let comicsWithImages = comicProps.filter(everyResult => {
            return everyResult.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"

        })

        console.log(comicsWithImages) //All Good Unitl here
        return (
            comicsWithImages.map(everyComic => {

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

    getProperHero = () => {
        if(this.props.Heroes[0].results["length"]>1){
            let properHero = this.props.Heroes[0].results.filter(eachHero => {return eachHero.name.toLowerCase() === this.props.match.params.Name.toLowerCase()})
            if(properHero["length"]!==0){
                console.log("Proper Hero ", properHero)
                this.props.Heroes[0].results = properHero 
            }
        }
    }

    render() {
        return (
            <div className="">
                {this.props.Heroes[0] && this.props.Heroes[0].results[0] !== undefined &&
                    <React.Fragment>
                        {this.getProperHero()}
                        {console.log("Logging this.props.MarvelHeroes", this.props.MarvelHeroes)}
                        <div id="content-wrapper" className="d-flex flex-column">
                            {/* Main Content */}
                            <div id="content">
                                {/* Topbar */}
                                <div className="container">
                                    {/* Topbar Navbar */}
                                    {/* Nav Item - User Information */}
                                    <div>
                                        <br></br>
                                        {/* <img className="img-profile rounded-circle" src={`${this.props.Heroes[0].results[0].image.url}`} height="550vh" /> */}
                                        <img className="img-profile rounded-circle" src={`${this.props.Heroes[0].results[0].image.url}`} id="currentHeroImage" />
                                        <div className="mb-1 d-flex flex-column justify-content-center align-items-center">
                                            <div>
                                            <span className="m-5 hover-underline-animation" id="currentHeroTitle" >{this.props.Heroes[0].results[0].name}</span>
                                            <br></br>
                                            </div>
                                            {/* Topbar Search */}
                                            <div className="mt-1">
                                                <form id="CurrentHeroForm" onSubmit={(e) => e.preventDefault()}>
                                                    {/* <div className="input-group"> */}
                                                    <div className="">
                                                        <input onChange={this.addHeroeProperty} className="form-control-bs mt-5 w-75" name="heroeName" style={{ background: "transparent" }} type="search" placeholder="Next sup..." aria-label="Search" aria-describedby="basic-addon2" />
                                                        <div className="input-group-append">
                                                            <button onClick={() => { this.props.history.push(this.state.heroeName); window.location.reload() }} className="btn btn-light" type="submit" style={{ background: "transparent", color: "white", border:0 }} >+</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <br></br>
                                </div>
                                {/* End of Topbar */}

                                {this.props.Heroes[0] && this.props.Heroes[0].results[0] && 
                                // {/* Begin Page Content */}
                                // {/* Content Row */}

                                <>

                                <div className="row" style={{marginLeft:"0",marginRight:"0"}}>
                                        {/* Content Column */}
                                        <div className="col-lg-6">
                                            {/* Project Card Example */}
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">POWERSTATS</h6>
                                                </div>
                                                <div className="card-body" style={{textAlign:"left"}}>
                                                    <h4 className="small font-weight-bold">Intelligence <span className="float-right">{this.props.Heroes[0].results[0].powerstats.intelligence}</span></h4>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.intelligence}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.intelligence} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <h4 className="small font-weight-bold">Strength <span className="float-right">{this.props.Heroes[0].results[0].powerstats.strength}</span></h4>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.strength}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.strength} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <h4 className="small font-weight-bold">Speed <span className="float-right">{this.props.Heroes[0].results[0].powerstats.speed}</span></h4>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.speed}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.speed} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <h4 className="small font-weight-bold">Durability <span className="float-right">{this.props.Heroes[0].results[0].powerstats.durability}</span></h4>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.durability}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.durability} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <h4 className="small font-weight-bold">Power <span className="float-right">{this.props.Heroes[0].results[0].powerstats.power}</span></h4>
                                                    <div className="progress mb-4">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.power}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.power} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                    <h4 className="small font-weight-bold">Combat <span className="float-right">{this.props.Heroes[0].results[0].powerstats.combat}</span></h4>
                                                    <div className="progress">
                                                        <div className="progress-bar bg-danger" role="progressbar" style={{ width: `${this.props.Heroes[0].results[0].powerstats.combat}%` }} aria-valuenow={this.props.Heroes[0].results[0].powerstats.combat} aria-valuemin={0} aria-valuemax={100} />
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                        <div className="col-lg-6">
                                            {/* Bio */}
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">BIO</h6>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Full Name</th>
                                                                <td>{this.props.Heroes[0].results[0].biography['full-name']}</td>

                                                            </tr>
                                                            <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">From</th>
                                                                <td>{this.props.Heroes[0].results[0].biography["place-of-birth"]}</td>

                                                            </tr>                                <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">First Appearance</th>
                                                                <td >{this.props.Heroes[0].results[0].biography['first-appearance']}</td>

                                                            </tr>                                <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Publisher</th>
                                                                <td>{this.props.Heroes[0].results[0].biography.publisher}</td>

                                                            </tr>                                <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Appearance</th>
                                                                <td>{this.props.Heroes[0].results[0].appearance.race}, {this.props.Heroes[0].results[0].appearance.gender}</td>

                                                            </tr>
                                                            <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Size</th>
                                                                <td>{this.props.Heroes[0].results[0].appearance.height[0]}, {this.props.Heroes[0].results[0].appearance.weight[0]}</td>

                                                            </tr>
                                                            <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Work</th>
                                                                <td>{this.props.Heroes[0].results[0].work.occupation}</td>

                                                            </tr>
                                                            <tr>
                                                                <th style={{textAlign: 'left'}} scope="row">Connections</th>
                                                                <td>{this.props.Heroes[0].results[0].connections['group-affiliation'].toString()}</td>

                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <a target="_blank" rel="nofollow" href="https://www.marvel.com/">Browse more Heroes →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </>

                                }                    

                                {/* Starting all comics */}

                                <div className="container-fluid">
                                    {this.props.MarvelHeroes[0] && this.props.MarvelHeroes[0].results[0] && this.props.Comics[0] && this.props.Comics[0].results[0] &&

                                        <React.Fragment>
                                                {/* Content Row */}
                                                <div className="row mx-auto d-flex justify-content-center">
                                                <div className="card shadow mb-4">
                                                    <div className="card-header py-3">
                                                        <h6 className="m-0 font-weight-bold text-primary">DESCRIPTION</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0" style={{fontFamily:"monospace", fontSize:"Large"}}>{this.props.MarvelHeroes[0].results[0].description}</p>
                                                    </div>
                                                </div>
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
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.MarvelHeroes[0].results[0].comics.available}</div>
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
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.MarvelHeroes[0].results[0].stories.available}</div>
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
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.MarvelHeroes[0].results[0].series.available}</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Events*/}
                                                <div className="col-xl-3 col-md-6 mb-4">
                                                    <div className="card border-left-warning shadow h-100 py-2">
                                                        <div className="card-body">
                                                            <div className="row no-gutters align-items-center">
                                                                <div className="col mr-2">
                                                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">Sagas</div>
                                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">{this.props.MarvelHeroes[0].results[0].events.available}</div>
                                                                </div>
                                                                <div className="col-auto">
                                                                    <i className="fas fa-comments fa-2x text-gray-300" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </React.Fragment>

                                            }

                                            
                                            <br></br>            
                                            <Player {...this.props} />
                                            <br></br>

                                            {this.props.MarvelHeroes[0] && this.props.MarvelHeroes[0].results[0] && this.props.Comics[0] && this.props.Comics[0].results[0] &&
                                            
                                            // {/* Comic Images */}
                                            // {console.log("Logging this.props.Comics", this.props.Comics)}
                                            <div className="row d-flex m-4 justify-content-around">
                                                {this.getAllTheComics(this.props.Comics[0].results)}
                                            </div>
                                    }

                                </div>
                                {/* /.container-fluid */}
                            </div>
                            {/* End of Main Content */}
                        </div>
                    </React.Fragment>}
                    {/* <Player {...this.props} /> */}
            </div>
        );
    }
}

export default currentHero;