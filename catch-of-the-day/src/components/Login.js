import React from "react";
import { PropTypes } from "prop-types";

const Login = ({ authenticate }) => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage yout store's inventory</p>
    <button className="github" onClick={() => authenticate("Github")}>
      Login with Github
    </button>
  </nav>
);
Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};
export default Login;
