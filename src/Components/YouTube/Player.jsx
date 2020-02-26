import React, { Component } from 'react';
import axios from "axios";

class Player extends Component {

    state={
        APIKey:"AIzaSyCI6eYlotjiiy9vGd3AJ7XokAMD6mb68uk"
    }

    
    // searchByKeyword() {
    //     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
    //     for(var i in results.items) {
    //           var item = results.items[i];
    //           Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    //         }
            
    // }

    filteredVideos(result) {
        console.log(result)

    }
        
    getVideos() {
        console.log("Spooderman")
        //https://www.googleapis.com/youtube/v3/search?q=Batman&part=snippet&type=video&key=AIzaSyCI6eYlotjiiy9vGd3AJ7XokAMD6mb68uk
        axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.props.match.params.Name}&part=snippet&maxResults=25&order=viewCount&type=video&key=${this.state.APIKey}`)
            .then(res => this.filteredVideos(res))
            .catch(error => console.log("Can't access YouTube Api",error))
    }

    render() {
        return (
            <React.Fragment>
                {this.getVideos()}
            </React.Fragment>
        );
    }
}

export default Player;