import {combineReducers} from "redux";
import {homeReducer} from "./homeReducer";

const exampleInitialState = {
    reducerExapmle:{
        lastUpdate: 0,
        light: false,
        count: 0
    },
    homeReducer:{},
}

export const actionTypes = {
    TICK: 'TICK',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET'
}
// REDUCERS
const reducerExapmle = (state = exampleInitialState, action) => {
    switch (action.type) {
        case actionTypes.TICK:
            return Object.assign({}, state, {
                lastUpdate: action.ts,
                light: !!action.light
            })
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            })
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            })
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: exampleInitialState.count
            })
        default:
            return state
    }
}

export const rootReducer=combineReducers({
    reducerExapmle,
    homeReducer
})
