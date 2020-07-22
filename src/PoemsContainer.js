import React from "react";
import Poem from "./Poem";
import FavoritesList from "./FavoritesList"

class PoemsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      readPoems: [],
      favoritePoems: []
    }
  }

  renderPoems = () => {
    return this.props.poems.map(poem => {
      return <Poem poem={poem} key={poem.id} fetchPoems={this.props.fetchPoems} addToReadPoems={this.addToReadPoems} readPoems={this.state.readPoems} subtractFromReadPoems={this.subtractFromReadPoems} addToFavorites={this.addToFavorites} />
    })
  }

  addToReadPoems = id => {
    const array = this.state.readPoems.slice()
    array.push(id)
    this.setState({
      readPoems: array
    })
  }

  subtractFromReadPoems = id => {
    const array = this.state.readPoems.filter(poem => poem !== id)
    this.setState({
      readPoems: array
    })
  }

  addToFavorites = (id) => {
    const array = this.state.favoritePoems.slice()
    array.push(id)
    this.setState({
      favoritePoems: array
    })
  }

  myFavorites = () => {
    return this.props.poems.filter(poem => this.state.favoritePoems.includes(poem.id))
  }

  render() {
    return (
      <div className="poems-container">
        {this.renderPoems()}
        <FavoritesList myFavorites={this.myFavorites()}/>
      </div>
    );
  }
}

export default PoemsContainer;
