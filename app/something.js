const React = require("react");
const ReactDOM = require("react-dom");
const vaaa = require('./testfunction.js')
console.log(vaaa(1))

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('content')
);
