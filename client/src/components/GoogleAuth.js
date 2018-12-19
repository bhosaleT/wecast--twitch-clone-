import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

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
          this.setState({
            isSignedIn: this.auth.isSignedIn.get()
          });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({
      isSignedIn: this.auth.isSignedIn.get()
    });
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  /* WORKFLOW 
  -- THIS COMPONENT DOES EVERYTHING WE WANT OUR SIGN IN COMPONENT TO DO.
  -- we use the gapi.auth2.getAuthInstance to get the instance of our  authentication.
  -- then on our auth instance we want to check if we are signedIn or not.
  -- To Achieve this we will add a state element called isSignedIn  whose value will be decided by this.auth.isSignedIn.get(). the .get() gives us the current value of       our signed in status.
  -- we want to listen to the change in our login and sign outs. for this gapi gives us another method called .listen() . this listen for changes and for this we will        call a helper function called onAuthChange(). which will change the state to our new auth value.
  -- we will use semantic UI buttons to display sign in and sign out buttons.
  -- two more helper functions to call the inbuilt signIn and signOut functions from the gapi.
  */

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <div className="item">
          <button onClick={this.onSignOut} className="ui red google button">
            <i className="google icon" />
            Log Out
          </button>
        </div>
      );
    } else {
      return (
        <div className="item">
          <button onClick={this.onSignIn} className="ui red google button">
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

export default GoogleAuth;
