import { TOGGLE_BY_ADD } from "../constants/constants";

export const showForm = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_BY_ADD:
            return !state;
        default:
            return state;
    }
}