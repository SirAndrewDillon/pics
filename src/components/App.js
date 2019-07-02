import React, { Component} from 'react';
import axios from 'axios'
import SearchBar from './SearchBar'



class App extends Component {
  state = {images: [] }
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term},
      headers: {
        Authorization: 
        'Client-ID 28af207bd2108480b312ec410796e5315acd5530e530ae9f81e93bd1f46cf1ad'
      }
    }) 
    this.setState({images: response.data.results})
  }
  render() {
  return (
    <div className="ui container" style={{marginTop: '20px'}} >
     <SearchBar onSubmit={this.onSearchSubmit} />
     Found: { this.state.images.length } images
    </div>
    )
  }
}

export default App;
    
