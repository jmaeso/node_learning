const React = require("react");

import FormContainer from './formContainer.js';

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <h1 className="container">
          Amazing title!
        </h1>
        <FormContainer />
    </div>
    );
  }
}

export default AppContainer
