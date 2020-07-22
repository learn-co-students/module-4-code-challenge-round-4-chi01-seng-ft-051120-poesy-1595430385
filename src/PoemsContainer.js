import React from "react";
import Poem from "./Poem";

class PoemsContainer extends React.Component {
  render() {
    return (
      <div className="poems-container">
        {

          <Poem />
          //for each poem in the poems property I have to create a <Poem> with the corresponding props
          //and then in poem.js I have to fill in the blanks said props.
          //I'm drawing a blank on how to do this.
          // I tried doing it with .map but that keeps bugging out.
          //  For loop doesn't work either.
          
        }
      </div>
    );
  }
}

export default PoemsContainer;
