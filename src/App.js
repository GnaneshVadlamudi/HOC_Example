import React from "react";
import "./styles.css";

class App extends React.Component {
  
  state = { inputValue: '' };

/* need to implement hoc
  
  const Username = (props) => (
    <div>{props.children}</div>
  )

  const UpperCaseUsername = hoc(Username)

  const App = () => (
    <div>
      <UpperCaseUsername>Kingsley</UpperCaseUsername>
    </div>
  ); */
  

  handleSearch = () => {
    
    
  };

  render() {
    return (
      <div>
        <div>
          <b>Input value in Capitals: </b>
          {this.state.inputValue}
        </div>
        <div>
            <input onChange={this.handleSearch} value={this.state.inputValue} type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default App;
