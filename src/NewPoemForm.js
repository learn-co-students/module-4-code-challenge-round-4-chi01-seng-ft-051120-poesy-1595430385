import React from "react";

class NewPoemForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}className="new-poem-form">
        <input onChange={this.props.handleTitleChange} placeholder="Title" />
        <input onChange={this.props.handleAuthorChange} placeholder="Author" />
        <textarea onChange={this.props.handleContentChange} placeholder="Write your masterpiece here..." rows={10} />
        <input type="submit" value="Share your masterpiece" />
      </form>
    );
  }
}

export default NewPoemForm;
