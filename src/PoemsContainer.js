import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="poems-container">
        {this.props.poems.map(poemObj => {
          return <Poem poem={poemObj} handleMarkedRead={this.props.handleMarkedRead} />
        } 
      )}
      </div>
    );
  }
}

export default PoemsContainer;
