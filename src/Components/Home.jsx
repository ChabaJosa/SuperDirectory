import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        heroeName: "",
        stateLifted: false
    }

    addHeroeProperty = (e) => {

        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: value }) // Matches the name="something" with the e.target.name
    }


    render() {
        console.log("Home Component", this.state)

        return (
            <React.Fragment>

                <div className="container">

                    <div className="row py-5">
                        <div className="col-lg-9 mx-auto text-white text-center HomeText">
                            <h1 className="display-4" >Search for Heroes</h1>
                            <p className="lead mb-0">Collection of superhero Data</p>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h5 className="font-weight-light mb-4 font-italic text-white HomeText">Remember to type correctly!</h5>
                            <div className="bg-white p-5 rounded shadow">

                                <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                                    <div className="input-group mb-4">
                                        <input onChange={this.addHeroeProperty} name="heroeName" type="search" placeholder="Cape Crusaders, Web Crawlers, Iron Dudes, we got them all..." aria-describedby="button-addon5" className="form-control" />
                                        <Link to= {`Heroes/${this.state.heroeName}`}>
                                            <div className="input-group-append">
                                                <button id="button-addon5" type="submit" className="btn btn-primary"><i className="fa fa-search" />Search</button>
                                            </div>
                                        </Link>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>


                </div>


            </React.Fragment>
        );
    }
}

export default Home;

/* <div className="overlay" />
<div className="masthead">
    <div className="masthead-bg" />
    <div className="container h-100">
        <div className="row h-100">
            <div className="col-12 my-auto">
                <div className="masthead-content text-white HomeText py-5 py-md-0">
                    <h1 className="mb-3">Coming Soon!</h1>
                    <p className="mb-5">We're working hard to finish the development of this site. Our target launch date is
                    <strong>January 2019</strong>! Sign up for updates using the form below!</p>
                    <div className="input-group input-group-newsletter">
                        <input type="email" className="form-control" placeholder="Enter email..." aria-label="Enter email..." aria-describedby="basic-addon" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">Notify Me!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="social-icons">
    <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
            <a href="#">
                <i className="fab fa-twitter" />
            </a>
        </li>
        <li className="list-unstyled-item">
            <a href="#">
                <i className="fab fa-facebook-f" />
            </a>
        </li>
        <li className="list-unstyled-item">
            <a href="#">
                <i className="fab fa-instagram" />
            </a>
        </li>
    </ul>
</div> */




