import * as React from 'react'

export default function PhotoPage(props) {
    const {photos} = props
    console.log("WHAT IS PHOTOS??", photos)

    return (
        <div>
            <h1>Photos in this album</h1>
            {photos && photos.map(url => <img src={url} alt="Album" />)}
            {!photos && 'Loading...'}
        </div>
    )
}