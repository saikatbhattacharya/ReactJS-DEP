import { createStore, applyMiddleware, compose, combineReducers  } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router';
import formReducer from '../reducer/form-reducer';
import devTools from 'remote-redux-devtools';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    formState: formReducer
});


let store = createStore(reducers,{  });
export default store;