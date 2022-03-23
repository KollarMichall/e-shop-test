const initialState = {
    sections: []
}

const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_SECTIONS':
            return {
                ...state,
                sections: payload
            }
        default:
            return state
    }
}
export default categoryReducer