import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    return this.props.poems.map((poem, index) => {
      return <Poem poem={poem} key={index} handleLikeClick={this.props.handleLikeClick}/>
    })
  }
  
  render() {
    return (
      <div className="poems-container">
        { this.renderPoems() }
      </div>
    );
  }
}

export default PoemsContainer;
