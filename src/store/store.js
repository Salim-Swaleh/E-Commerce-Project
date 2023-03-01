import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './root-reducer';

//middleware is a library helper that runs before an action hits the reducer
const middleWares = [logger];
const composedEnhancers = compose(applyMiddleware(...middleWares));


// root-reducer which is the combination of our reducers


export const store = createStore(rootReducer, undefined, composedEnhancers);