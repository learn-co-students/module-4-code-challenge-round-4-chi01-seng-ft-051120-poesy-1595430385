import React, { Component } from 'react'

export default class Favorites extends Component {

  renderFavorites = () => {
    return this.props.likedPoems.map(poem => {
      return (
        <div>
        <li>{poem.title} - By: {poem.author}</li> <br/>
        </div>
      )
    })
  }

  render(){
    return(
      <div>
        <h3>Favorites:</h3>
        <ul>
          {this.renderFavorites()}
        </ul>
      </div>
    )
  }
}