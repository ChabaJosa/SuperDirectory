import React, { Component } from 'react';

class currentHero extends Component {
    render() {
        return (
            <div>
                {this.props.Heroes[0] &&
                    <React.Fragment>
                        {/* <div>{this.props.MarvelHeroes[0].results[0].name}</div> */}
                        {console.log("Logging this.props.MarvelHeroes", this.props.MarvelHeroes)}
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
                                                <img className="img-profile rounded-circle" src={`${this.props.Heroes[0].results[0].image.url}`} height="560" />
                                                <span className="ml-5 display-1" style={{ color: "white" }}>{this.props.Heroes[0].results[0].name}</span>
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




                                    {this.props.MarvelHeroes[0] && this.props.MarvelHeroes[0].results[0] &&

                                        <React.Fragment>
                                            {/* <div className="row">

                                                <div className="card col-md-4">
                                                    <img className="card-img-top" src="https://i.annihil.us/u/prod/marvel/images/OpenGraph-TW-1200x630.jpg" />
                                                    
                                                </div>


                                            </div> */}






                                            {/* Content Row */}
                                            <div className="row mx-auto ">
                                                <div className="card shadow mb-4">
                                                    <div className="card-header py-3">
                                                        <h6 className="m-0 font-weight-bold text-primary">DESCRIPTION</h6>
                                                    </div>
                                                    <div className="card-body">
                                                        <p className="mb-0">{this.props.MarvelHeroes[0].results[0].description}</p>
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

                                    {/* Content Row */}
                                    <div className="row">
                                        {/* Content Column */}
                                        <div className="col-lg-6 mb-4">
                                            {/* Project Card Example */}
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">POWERSTATS</h6>
                                                </div>
                                                <div className="card-body">
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
                                        <div className="col-lg-6 mb-4">
                                            {/* Bio */}
                                            <div className="card shadow mb-4">
                                                <div className="card-header py-3">
                                                    <h6 className="m-0 font-weight-bold text-primary">Bio</h6>
                                                </div>
                                                <div className="card-body">
                                                    <table className="table">

                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">From</th>
                                                                <td>{this.props.Heroes[0].results[0].biography.publisher}</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Appearance</th>
                                                                <td>{this.props.Heroes[0].results[0].appearance.gender}</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Work</th>
                                                                <td>{this.props.Heroes[0].results[0].work.occupation}</td>

                                                            </tr>
                                                            <tr>
                                                                <th scope="row">Connections</th>
                                                                <td>{this.props.Heroes[0].results[0].connections.relatives}</td>

                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                    <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse more Heroes →</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                {/* /.container-fluid */}
                            </div>
                            {/* End of Main Content */}
                        </div></React.Fragment>}
            </div>
        );
    }
}

export default currentHero;