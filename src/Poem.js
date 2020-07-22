import React from "react";

class Poem extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
    };
  }

  // ran out of time. to toggle button, I would implement a ternary 

  handleClick = () => {
    let newBoolean = !this.state.clicked;
    this.setState({
      clicked: newBoolean,
    });
  };

  render() {
    const { title, content, author } = this.props.poem;
    return (
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
        <p>
          <strong>- By {author}</strong>
        </p>
        <button onClick={this.handleClick} >Mark as read</button>
      </div>
    );
  }
}

export default Poem;
