import {createStore, combineReducers, applyMiddleware} from 'redux';
import CounterReducer from './reducers/CounterReducer';
import logger from 'redux-logger';


const store = createStore(combineReducers({
    counter: CounterReducer
}), applyMiddleware(logger));

export default store;