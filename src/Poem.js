import React from "react";

class Poem extends React.Component {
  constructor() {
    super();

    this.state = {
      isRead: false,
    };
  }

  handleClick = () => {
    this.setState({
      isRead: !this.state.isRead,
    });
  };

  render() {
    const { id, title, content, author } = this.props.poem;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        {this.state.isRead ? (
          <button onClick={this.handleClick}>Mark as Unread</button>
        ) : (
          <button onClick={this.handleClick}>Mark as read</button>
        )}
        <button onClick={() => this.props.handleFavorite(this.props.poem)}>
          Favorite
        </button>
        <button onClick={() => this.props.handleDelete(this.props.poem)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Poem;
