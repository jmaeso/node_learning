const React = require("react");
import styles from '../style.css';
import FilePicker from '../components/searchComponent.js';
import Switch from '../components/switchComponent.js';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue:'',
      inputValue:''
    };
  }

  // Makes a request to the server (simulated for this tutorial)
 handleSubmit() {
   postRequest(this.state.inputValue);
 }

 // React input update (binding) is manual which
  // makes it rubust. This is how you keep the input box
  // in sync with keystroke inputs
  inputChange(e) {
    // New values are availbale from the event object
    console.log("My previous value: ", this.state.inputValue);
    this.setState({inputValue: e.target.value});
  }

  selectChange(e) {
    // New values are availbale from the event object
    console.log("My previous selection: ", this.state.selectValue);
    this.setState({selectValue: e.target.value});
  }

  render() {
    return (
      <div className={styles.centerer}>
        <label>Platform: </label>
        <Switch selectChange={this.selectChange.bind(this)}
                selectValue={this.state.selectValue} />
        <FilePicker handleSubmit={this.handleSubmit.bind(this)}
                inputChange={this.inputChange.bind(this)}
                searchValue={this.state.inputValue} />
      </div>
    );
  }
}

export default FormContainer
