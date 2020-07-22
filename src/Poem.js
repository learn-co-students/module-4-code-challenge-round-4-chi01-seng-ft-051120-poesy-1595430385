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
    const { title, content, author } = this.props.poem
    const { text } = this.state
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By Author {author}</strong>
        </p>
        <button onClick={this.handleClick}>{this.state.read ? 'Mark as unread' : 'Mark as read'}</button>
      </div>
    );
  }
}

export default Poem;
