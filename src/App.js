import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './state/store';
import Counter from './components/Counter';


function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Counter></Counter>
			</div>
		</Provider>
	);
}

export default App;