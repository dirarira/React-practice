import React, {Component} from 'react';
import './App.css';
import ScrollBox from './component/ScrollBox';

class App extends Component {
  render(){
    return (
      <>
        <ScrollBox ref={(ref)=>this.scrollBox=ref}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>Down</button>
      </>    
    );
  }
}

export default App;
