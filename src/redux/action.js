import { type } from "@testing-library/user-event/dist/type";
import * as stdTypes from "./constants/constants";

export const act_get_std=()=>{
    return {
        type:stdTypes.STD_GET
    }
}
export const act_get_success_std=(payload)=>{
    return {
        type:stdTypes.STD_SUCCESS,
        payload
    }
}
export const act_add_std=(payload)=>{

return {
    type: stdTypes.STD_ADD,
    payload
} 
}
export const act_search_std=payload=>{
    return {
        type: stdTypes.STD_SEARCH,
        payload
    }
}