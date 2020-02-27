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


    getVideos(result) {
        console.log("In filtered videos function", result)
        this.setState({ result })
    }

    getData() {
        //https://www.googleapis.com/youtube/v3/search?q=Batman&part=snippet&type=video&key=AIzaSyCI6eYlotjiiy9vGd3AJ7XokAMD6mb68uk
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.match.params.Name}+Fight+Scene+SuperHero&part=snippet&maxResults=25&order=viewCount&type=video&key=${this.state.APIKey}`)
        // If sorted by relevance it doesnt always show videos about superheros
            .then(res => this.getVideos(res.data))
            .catch(error => console.log("Can't access YouTube Api", error))
    }

    returnVideos() {
        console.log("Returning videos log", this.state.result)
        return (

            <React.Fragment>

                <MDBContainer>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        showControls={true}
                        showIndicators={false}
                        className="z-depth-1"
                        slide
                    >
                        <MDBCarouselInner>
                            <MDBCarouselItem itemId="1">
                                <MDBView>
                                    
                                    <iframe title={this.state.result.items[0].snippet.title} id="ytplayer" type="text" width="640" height="360" src={`https://www.youtube.com/embed/${this.state.result.items[0].id.videoId}?autoplay=1`} frameBorder="0"></iframe>

                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <MDBView>
                                   
                                    <iframe title={this.state.result.items[1].snippet.title} id="ytplayer" type="text" width="640" height="360" src={`https://www.youtube.com/embed/${this.state.result.items[1].id.videoId}?autoplay=1`} frameBorder="0"></iframe>

                                </MDBView>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="3">
                                <MDBView>
                                   
                                <iframe title={this.state.result.items[2].snippet.title} id="ytplayer" type="text" width="640" height="360" src={`https://www.youtube.com/embed/${this.state.result.items[2].id.videoId}?autoplay=1`} frameBorder="0"></iframe>

                                </MDBView>
                            </MDBCarouselItem>
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