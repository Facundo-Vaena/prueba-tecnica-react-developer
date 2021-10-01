import { GET_INFO } from "../actions";

const initialState = {
    info: false,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_INFO: 
            
            return {
                ...state,
                info: {...action.payload},
            }
        default: return state;
    }
}