import { resultsReducer } from './Results'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    results: resultsReducer
})