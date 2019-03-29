import { combineReducers } from 'redux';
import themedQuotes from './themedQuotes';

// This is used for combining multiple reducers
// We currently only use one here (themedQuotes)
// But we could add more in the future like: combineReducers({ themedQuotes, otherReducer })
export default combineReducers({ themedQuotes });
