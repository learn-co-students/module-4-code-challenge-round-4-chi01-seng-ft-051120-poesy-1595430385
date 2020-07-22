import React from "react";

class NewPoemForm extends React.Component {
  state = {
    title: '',
    content: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onCreatePoem(this.state)
  }

  handleNewTitle = (event) => {
    this.setState ({ title: event.target.value })
  }

  handleNewAuthor = (event) => {
    this.setState ({ author: event.target.value })
  }

  handleNewContent = (event) => {
    this.setState ({ content: event.target.value })
  }

  render() {
    return (
      <div className="new-poem">
      {
        this.props.username ? 
        <form onSubmit={this.handleSubmit} className="new-poem-form">
          <input value={this.state.title} onChange={this.handleNewTitle} placeholder="Title" />
          <input value={this.state.author} onChange={this.handleNewAuthor} placeholder="Author" />
          <textarea value={this.state.content} onChange={this.handleNewContent} placeholder="Write your masterpiece here..." rows={10} />
          <input type="submit" value="Share your masterpiece" />
        </form> 
        :
        'Sign-in to add new poems'
      }
      </div>
    );
  }
}

export default NewPoemForm;
