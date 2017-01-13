const React = require("react");
const ReactDOM = require("react-dom");
//const styles = require('./titleScreen.css');

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const background = (
  //<div className={styles.container}>
    <h1>
      Hello, {formatName(user)}!
    </h1>
  //</div>
);

ReactDOM.render(
  background,
  document.getElementById('root')
);
