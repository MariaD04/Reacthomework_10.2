import { CHANGE_FILTER_FIELD } from "../actions/actions"

const initialState = { query: '' }

const filterReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FILTER_FIELD:
            const { name, value } = action.payload
            return { ...state, [name]: value}
        default:
            return state
    }
}

export default filterReducer