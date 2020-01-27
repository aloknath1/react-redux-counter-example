import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  incrementCounter = () => {
    this.props.dispatch({type: 'INCREMENT'});
  }
   decrementCounter = () => {
    this.props.dispatch({type: 'DECREMENT'});
  }
  render(){
    return (
        <div className="App">
           <h1>Simple Counter Example</h1>
           <h3>Count:  {this.props.count}</h3>
           <button onClick={this.incrementCounter}> + </button>
           <button onClick={this.decrementCounter}> - </button>
        </div>
      );
  }
  
}

const mapStateToProps = state => ({
  count: state.count
});

export default connect(mapStateToProps)(App);
