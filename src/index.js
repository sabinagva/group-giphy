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
    yield takeLatest('ADD_GIF', fetchFav)
}
//reducers
const favoriteList = (state = [], action) => {
    if (action.type === 'GET_FAV'){
        return action.payload
    }
            return state
};

const gifList = (state = [], action) => {
    console.log('action.payload is:', action.payload)
    switch (action.type) {
        case 'SET_GIF':
            return action.payload.data
        default:
    return state
}
}
//saga CRUD functions

function* fetchGif(action) {
    try {
        console.log('fetching gifs with terms:', action.payload)
        const gifResponse = yield axios.get(`/api/favorite/${action.payload}`)

        yield put({ type: 'SET_GIF', payload: gifResponse.data })
    } catch (error) {
        console.log('error fetching gifs', error)
    }
}

function* fetchFav() {
    try {
        yield axios.get('/api/favorite')
        console.log('fetching  favorite gifs')
    } catch (error) {
        console.log('error fetching favorite gifs', error)
    }
}

function* postGif(action) {
    try {
        yield axios.post('/api/favorite',{url: action.payload})
        console.log('action.payload is', action.payload)
        console.log('posting favorite gifs')
        yield put ({type: 'SET_FAV'})
    } catch (error) {
        console.log('error posting gifs to database', error)
    }
}

function* updateGif(action) {
    console.log('favId on index',action.payload.favId);
    console.log('catId on index',action.payload.catId);
    try {
        yield axios.put(`/api/favorite/${action.payload.favId}`, action.payload)
        console.log('posting gifs')
    } catch (error) {
        console.log('error posting gifs to database', error)
    }
}
//Holds all th reducers and saga middleware
const store = createStore(
    combineReducers({
        gifList,
        favoriteList
    }),
    applyMiddleware(sagaMiddleware, logger),
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
