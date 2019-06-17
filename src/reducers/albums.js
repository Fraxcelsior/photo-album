import addAlbum from '../actions/addAlbum'
import setAlbums from '../actions/albums'

export default (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_ALBUM":
            return [...state, { ...action.payload }]
        case "SET_ALBUMS":
            return action.payload
        default:
            return state
    }
}