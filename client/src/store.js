// import {createStore, applyMiddleware,compose} from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducer/index';

//     const initialState={};

//     const middleware=[thunk];

//     const store=createStore(rootReducer,initialState,compose(
//         applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// export default store;

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
//import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();
// const middleware=[sagaMiddleware];
//const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;