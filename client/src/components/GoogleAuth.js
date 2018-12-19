import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    /* we are calling in the google api when the component is loaded first. we will load only the auth client that we require
      --- In that we will add a callback function which will only run when the library is loaded.
      --- initialise it with our clientId and scope.
      */
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "1044441256083-506u8jk1rns67kvg82kbk747fnp4e2rn.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <div className="item">
          <button
            onClick={this.onSignOutClick}
            className="ui red google button"
          >
            <i className="google icon" />
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="item">
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign in with Google
          </button>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  {
    signIn,
    signOut
  }
)(GoogleAuth);
