import React from "react";

class Poem extends React.Component {

  constructor() {
    super()
    this.state = {
      read: false
    }
  }

  handleClick = () => {
    this.setState({
        read: !this.state.read
    })
    
  }



  render() {

    const { title, author, content } = this.props.poem

    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleClick}>Mark as {this.state.read ? "unread" : "read" }</button>
        <button onClick={() => this.props.handleLikeClick(this.props.poem)} style={{float:'right'}}>⭐</button>
      </div>
    );
  }
}

export default Poem;
