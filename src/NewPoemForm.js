import React from "react";

class NewPoemForm extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      author: "",
      content: "",
    };
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAuthor = (event) => {
    this.setState({
      author: event.target.value,
    });
  };

  handleContent = (event) => {
    this.setState({
      content: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newPoem = { title: this.state.title, author: this.state.author, content: this.state.content};
    this.props.formData(newPoem);
  };

  render() {
    return (
      <form onSubmit={ this.handleSubmit} className="new-poem-form">
        <input
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitle}
        />
        <input
          placeholder="Author"
          value={this.state.author}
          onChange={this.handleAuthor}
        />
        <textarea
          placeholder="Write your masterpiece here..."
          value={this.state.content}
          onChange={this.handleContent}
          rows={10}
        />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
