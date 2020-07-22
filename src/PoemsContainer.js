import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {

  renderPoems = () => {
    this.props.poems.map(poemObj => {
      return <Poem poem={poemObj} />
    })
  }


  render() {


    return (
      <div className="poems-container" poems={this.props.poems} >
       {this.renderPoems()} 
      </div>
    );
  }
}

export default PoemsContainer;
