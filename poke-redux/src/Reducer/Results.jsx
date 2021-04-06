export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_POKEMON':

        return {
        ...state.data,
        loading: false,
        data: action.payload.results,
        errorMsg: "NO_POKEMON",
    }

        default:
            return state
    }
}