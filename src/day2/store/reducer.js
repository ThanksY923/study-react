const defaultStore = {
    conter: 0,
}

function reducer(state = defaultStore, action) {
    switch(action.type) {
        case 'ADD':
            return {
                ...state,
                conter: state.conter + action.value
            }
        default:
            return state
    }
    
}

export default reducer