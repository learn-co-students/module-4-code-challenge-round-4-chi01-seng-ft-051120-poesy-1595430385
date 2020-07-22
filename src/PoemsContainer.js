import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className="poems-container">
        {
          this.props.poems.map(poemObj =>
            <Poem 
            likePoem={this.props.likePoem}
            deletePoem={this.props.deletePoem}
            poem={poemObj} />)
        }
      </div>
    );
  }
}

export default PoemsContainer;
