import { STD_SEARCH } from "../constants/constants";

export const searchStd = (state = '', action) => {
    switch (action.type) {
        case STD_SEARCH:
            return action.payload;
        default:
            return state;
    }
}