import React, { Component } from 'react';

class Home extends Component {

    state = {
        heroeName: "",
    }

    addHeroeProperty = (e) => {

        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: value }) // Matches the name="something" with the e.target.name
    }


    render() {
        // console.log("Home Component", this.state)

        return (
            <React.Fragment>

                <div className="container">

                    <div className="row py-5">
                        <div className="col-lg-9 mx-auto text-white text-center HomeText">
                            <h1 className="display-1" >Super Directory</h1>
                            <br></br>
                            <h3>Collection of Superhero Data</h3>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h5 className="font-weight-light mb-4 font-italic text-white HomeText">Remember to type correctly !</h5>
                            <div className="bg-transparent p-5 rounded shadow">

                                <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                                    <div className="input-group mb-4">
                                        <input onChange={this.addHeroeProperty} className="form-control-bs" name="heroeName" type="search" placeholder="Cape Crusaders, Web Crawlers..... we got them all!." aria-describedby="button-addon5" />
                                            <div className="input-group-append" onClick={() => this.props.history.push(`Heroes/${this.state.heroeName}`)}>
                                                <button id="button-addon5" type="submit" className="btn">+</button>
                                            </div>
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




