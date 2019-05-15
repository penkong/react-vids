import React, { Component } from 'react';
import youtube from '../apis/youtube';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = { videos : [] , selectedVideo : null};

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params : {
        q : term
      }
    });
    this.setState({videos : response.data.items});
  };

  onVideoSelect = video => {
    console.log(video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <VideoList onVideoSelect={this.onVideoSelect} 
          videos={this.state.videos}
        />
        <VideoDetail/>
      </div>
    );
  };
}

export default App;