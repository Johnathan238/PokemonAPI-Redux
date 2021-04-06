export const resultsReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_POKEMON':

            // Only show results with urls
            const URL = [...action.payload.filter(pok => pok.url)]
            return [...URL, ...state]

        default:
            return state
    }
}