import React from "react";

const API = "http://localhost:6001/poems/"

class Poem extends React.Component {

  deletePoem = id => {
    const URL = API + id 
    
    const reqObj = {
      method: "DELETE",
    }
    
    fetch(URL, reqObj)
    .then(resp => resp.json())
    .then(json => {
      this.props.fetchPoems()
    })
  }
  
  render() {
    const {title, content, author, id} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <div>
        {!this.props.readPoems.includes(id) ? <button onClick={() => this.props.addToReadPoems(id)}>Mark as read</button> : <button onClick={() => this.props.subtractFromReadPoems(id)}>Mark as unread</button>}
        </div>
        <button onClick={()=>this.props.addToFavorites(id)}>Add to favorites</button>
        <br></br>
        <button onClick={()=>this.deletePoem(id)}>Delete this Poem</button> 
      </div>
    );
  }
}

export default Poem;
