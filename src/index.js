import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    count: 42
};

function reducer(state = initialState, action){
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + 1
            };            
        case 'DECREMENT':
            return {
                count: state.count - 1
            };           
        default:
            return state;
    }
}
const store = new createStore(reducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
