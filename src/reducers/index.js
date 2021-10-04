import { GET_INFO } from "../actions";

const initialState = {
    info: false,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_INFO: 
            
            return action.payload !== 'Error' ? {
                ...state,
                info: {...action.payload},
            }
            :
            {
                ...state,
                info: 'Error',
            }
        default: return state;
    }
}