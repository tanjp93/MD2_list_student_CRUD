import { STD_CHECK, STD_EDIT } from "../constants/constants";

export const editStd = (state = null, action) => {
    switch (action.type) {
        case STD_EDIT:
            return action.payload
        default:
            return state;
    }
}
export const checkStd = (state = null, action) => {

    switch (action.type) {
        case STD_CHECK:
            return action.payload 
            default:
                return state;
            }
}