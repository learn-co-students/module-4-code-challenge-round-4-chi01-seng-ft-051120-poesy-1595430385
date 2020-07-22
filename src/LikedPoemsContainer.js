import React from "react";
import Poem from "./Poem";

class LikedPoemsContainer extends React.Component {
  render() {
    console.log(this.props)
    const likedPoems = this.props.poems.filter(poemObj => poemObj.liked)
      return (
        <div className="poems-container">
          <h1>Your Favorite Poems</h1>
          {
            likedPoems.map(poemObj =>
              <Poem 
              deletePoem={this.props.deletePoem}
              poem={poemObj} />)
          }
        </div>
      );
  }
}

export default LikedPoemsContainer;
