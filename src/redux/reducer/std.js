import { STD_SUCCESS } from "../constants/constants";

export const students = (state = [], action) => {
    switch (action.type) {
        case STD_SUCCESS:
            return [...action.payload];
    // case STD_SEARCH:
    //     let newArr = state.filter((val) => {
    //       return val.studentName.toLowerCase() == action.payload.toLowerCase()
    //     })

    //     return newArr;
        default:
            return state;
    }
}