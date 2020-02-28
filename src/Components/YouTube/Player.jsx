import React, { Component } from 'react';
import axios from "axios";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBView } from "mdbreact";


class Player extends Component {

    state = {
        APIKey: "AIzaSyCI6eYlotjiiy9vGd3AJ7XokAMD6mb68uk",
        result: {}
    }

    componentDidMount() {
        this.getData()
    }
    
    getData() {
        //https://www.googleapis.com/youtube/v3/search?q=Batman&part=snippet&type=video&key=AIzaSyCI6eYlotjiiy9vGd3AJ7XokAMD6mb68uk
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.match.params.Name}+Fight+Scene+SuperHero&part=snippet&maxResults=10&order=relevance&type=video&key=${this.state.APIKey}`)
        // If sorted by relevance it doesnt always show videos about superheros
        .then(res => this.getVideos(res.data))
        .catch(error => console.log("Can't access YouTube Api", error))
    }
    
    getVideos(result) {
        console.log("In filtered videos function", result)
        this.setState({ result })
    }

    getAllVideos(result){
        return result.map((eachItem, i) => {
            console.log(eachItem)
            return (
                <MDBCarouselItem itemId={i+1}>
                    <MDBView>
                        <iframe title={eachItem.snippet.title} id="ytplayer" type="text" width="640" height="360" src={`https://www.youtube.com/embed/${eachItem.id.videoId}`} frameBorder="0"></iframe>
                    </MDBView>
                </MDBCarouselItem>
            )
        })
    }
    

    returnVideos() {
        console.log("Returning videos log", this.state.result)
        return (

            <React.Fragment>

                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={this.state.result.items.length}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                    >
                        <MDBCarouselInner>
                                {this.getAllVideos(this.state.result.items)}
                        </MDBCarouselInner>
                    </MDBCarousel>
                </MDBContainer>


        </React.Fragment >
        )              
                        
    }
                        
    render() {
        console.log(this.state)
        if (this.state.result !== undefined && this.state.result.items !== undefined) {

            return (
                <React.Fragment>
                    {this.returnVideos()}
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <p style={{ color: "white" }}>Loading Fight Videos... </p>
                </React.Fragment>
                )
            }
        }
    }
                    
export default Player;