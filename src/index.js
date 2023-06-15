import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import createSagaMiddleware from '@redux-saga/core';
import { takeLatest, put } from 'redux-saga/effects'
import axios from 'axios';

const sagaMiddleware = createSagaMiddleware();

//watcher saga hold and listens all the sagas
function* watcherSaga() {
    yield takeLatest('ADD_GIF', postGif)
    yield takeLatest('GET_GIF', fetchGif)
    yield takeLatest('PUT_GIF', updateGif)
    yield takeLatest('GET_FAV', fetchFav)
}
//reducers 
const favoriteList = (state = [], action) => {
    return state
}

const gifList = (state = [], action) => {
    return state
}
//saga CRUD functions

function* fetchGif(action){
    try{
        console.log('fetching gifs with terms:', action.payload)
        yield axios.get(`/api/favorite/${action.payload}`)
        
    }catch(error) {
        console.log('error fetching gifs', error)
    }
}

function* fetchFav(){
    try{
        yield axios.get('/api/favorite')
        console.log('fetching  favorite gifs')
    }catch(error) {
        console.log('error fetching favorite gifs', error)
    }
}

function* postGif(action){
    try {
        yield axios.post('/api/favorite ',{url: action.payload})
        console.log('action.payload is', action.payload)
        console.log('posting favorite gifs')
        yield put ({type: 'GET_GIF'})
    }catch(error) {
        console.log('error posting gifs to database',error)
    }
}

function* updateGif(){
    try {
        yield axios.put('/api/favorite ')
        console.log('posting gifs')
    }catch(error) {
        console.log('error posting gifs to database',error)
    }
}
//Holds all th reducers and saga middleware
const store = createStore(
    combineReducers({
        gifList,
        favoriteList
    }),
    applyMiddleware(sagaMiddleware,logger),
);
//this allows watcher saga start watching
sagaMiddleware.run(watcherSaga)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
       
    </React.StrictMode>
);
