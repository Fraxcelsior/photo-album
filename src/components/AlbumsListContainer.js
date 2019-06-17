import * as React from 'react'
import * as request from 'superagent'
import AlbumsList from './AlbumsList'
import { connect } from 'react-redux'
import { getAlbums } from '../actions/albums'

class AlbumsListContainer extends React.Component {


    componentDidMount() {
        this.props.getAlbums()
        /*request('https://jsonplaceholder.typicode.com/albums')
            .then(response => this.props.setAlbums(response.body))
            .catch(error => console.log(error))*/
    }


    render() {

        if (!this.props.albums)
            return 'Loading...'
        return <AlbumsList albums={this.props.albums} />

    }
}
const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}
export default connect(mapStateToProps, { getAlbums: getAlbums })(AlbumsListContainer)

