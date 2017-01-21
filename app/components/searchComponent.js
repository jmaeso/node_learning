
import React  from 'react';

class Search extends React.Component {
  render() {
    return (
      <input type="file" accept=".apk, .app"
        value={this.props.searchValue}
        onChange={this.props.inputChange} />
    );
  }
}

export default Search
