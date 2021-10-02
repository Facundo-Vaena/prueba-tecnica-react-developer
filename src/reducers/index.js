import { GET_INFO, SET_DETAIL } from "../actions";

const initialState = {
    info: false,
    selectedProgram: false,
}

export default function rootReducer(state = initialState, action) {
    switch(action.type) {
        case GET_INFO: 
            
            return {
                ...state,
                info: {...action.payload},
            }
        case SET_DETAIL:
            return {
                ...state,
                selectedProgram: action.payload,
            }    
        default: return state;
    }
}