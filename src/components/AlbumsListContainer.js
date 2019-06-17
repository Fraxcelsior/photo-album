import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'

export default class AlbumsListContainer extends React.Component {
    state = {}

    componentDidMount() {
        request('https://jsonplaceholder.typicode.com/albums')
            .then(response => { this.setState({ albums: response.body }) })
            .then(result => {console.log("WHAT IS RETURNED??", result)} )
            .catch(error => console.log(error))
    }

    render() {
        
        if (!this.state.albums)
            return 'Loading...'
        return <AlbumsList albums={this.state.albums} />

    }
}

