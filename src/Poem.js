import React from "react";

class Poem extends React.Component {
  state = {
      read: false
    }

  handleClick = (id) => {
    this.setState({ read: !this.state.read })
  }
  
  render() {
    const id = this.props.poem.id
    return (
      <div onClick={ () => this.handleClick(id)} >
        <h3>{this.props.poem.title}</h3>
        <p>{this.props.poem.content}</p>
        <p>
          <strong>{this.props.poem.title}</strong>
        </p>
        <button onClick={this.props.handleMarkedRead}>
        {
          this.props.poem.read ? "This has been read " : "Read"

        }
        </button>
      </div>
    );
  }
}

export default Poem;
