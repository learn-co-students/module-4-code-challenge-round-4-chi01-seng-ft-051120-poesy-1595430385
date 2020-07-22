import React from "react";

class Poem extends React.Component {
  state = {
    read: false
  }

  handleClick = () => {
    this.setState({
      read: !this.state.read
    })
  }
  
  render() {
    const {content, title, author} = this.props.poem
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>{author}</strong>
        </p>
        <button onClick={this.handleClick}>
          {
            this.state.read ? 
            'Mark as unread.'
            :
            'Mark as read.'
          }
        </button>
        <button onClick={()=>this.props.deletePoem(this.props.poem.id)}>Delete</button>
        <button onClick={()=>this.props.likePoem(this.props.poem.id)}>Like</button>
      </div>
    );
  }
}

export default Poem;
