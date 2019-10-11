import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from "./redux/reducer";



export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}



// ACTIONS
export const serverRenderClock = isServer => dispatch => {
    return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = dispatch => {
    return setInterval(() => {
        // Dispatch `TICK` every 1 second
        dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() })
    }, 1000)
}

export const incrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.INCREMENT })
}

export const decrementCount = () => dispatch => {
    return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
    return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (initialState = {}) {
    return createStore(
        rootReducer,
        initialState,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    )
}
