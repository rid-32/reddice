import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    function showLoginBlock() {
      return [
        <li key='1' className="nav-item active">
          <Link to="/signup" className="nav-link">Sign up</Link>
        </li>,
        <li key='2' className="nav-item">
          <Link to="/login" className="nav-link">Login</Link>
        </li>,
      ];
    }

    const showLogoutBlock = () => {
      return (
        <li className="nav-item">
          <a onClick={ this.logout } href="#" className="nav-link">Logout</a>
        </li>
      );
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Red Dice</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            { isLoggedIn ? showLogoutBlock() : showLoginBlock() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch({
        type: 'userLogout',
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
