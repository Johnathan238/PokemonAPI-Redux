export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_POKEMON':

        return {
        ...state,
        loading: false,
        data: action.payload.results,
        errorMsg: "",
    }
    
    default:
        return state
}