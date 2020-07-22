import React from 'react'

class FavoritesList extends React.Component {
    renderFavorites = () => {
        return this.props.myFavorites.map(poem => {
            return <li key={poem.id}>"{poem.title}" by {poem.author}</li>
        })
    }
    
    render() {
        return(
            <div>
                <h2>My Favorites!</h2>
                <ul>
                    {this.renderFavorites()}
                </ul>
            </div>
        )
    }
}

export default FavoritesList