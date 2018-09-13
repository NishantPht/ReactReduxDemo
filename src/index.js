/*
 * @file: index.js
 * @description: Entry Point for application
 * @date: 14.September.2018
 * @author: Nishant Singh
 * */



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';

import  { createStore } from 'redux';

import postReducer from './reducers/postReducer';

const store = createStore(postReducer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'));



