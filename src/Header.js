import React from 'react';

class Header extends React.Component {
  render(){
    return(
      <div className="user-header">
        <h2> {this.props.username} </h2>
        <button onClick={this.props.onSignOut}>Sign Out</button>
      </div>
    );
  }
}
export default Header;