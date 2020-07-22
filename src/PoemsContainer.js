import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  renderPoems = () => {
    const poems = this.props.poems;
    return poems.map((poem) => {
      return (
        <Poem
          poem={poem}
          key={poem.id}
          handleFavorite={this.props.handleFavorite}
          handleDelete={this.props.handleDelete}
        />
      );
    });
  };

  render() {
    return <div className="poems-container">{this.renderPoems()}</div>;
  }
}

export default PoemsContainer;
