import React  from 'react';

class Switch extends React.Component {
  render() {
    return (
      <select value={this.props.selectValue}
              onChange={this.props.selectChange}>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
      </select>
    );
  }
}

export default Switch
