import React  from 'react';

class FilePicker extends React.Component {
  render() {
    return (
      <input type="file"
        value={this.props.searchValue}
        onChange={this.props.inputChange} />
    );
  }
}

export default FilePicker
