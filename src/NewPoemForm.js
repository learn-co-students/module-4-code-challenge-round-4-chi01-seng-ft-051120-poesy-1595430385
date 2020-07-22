import React from "react";

class NewPoemForm extends React.Component {
  constructor() {
    super();

    this.state = {
      title: "",
      author: "",
      description: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, description } = this.state;
    const poem = {
      title: title,
      author: author,
      description: description,
    };

    this.props.sendData(poem);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="new-poem-form">
        <input
          onChange={this.handleChange}
          name="title"
          value={this.state.title}
          placeholder="Title"
        />

        <input
          onChange={this.handleChange}
          name="author"
          value={this.state.author}
          placeholder="Author"
        />

        <textarea
          onChange={this.handleChange}
          name="description"
          value={this.state.description}
          placeholder="Write your masterpiece here..."
          rows={10}
        />

        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
