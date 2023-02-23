import { type } from "@testing-library/user-event/dist/type";
import * as stdTypes from "./constants/constants";

export const act_get_std = () => {
    return {
        type: stdTypes.STD_GET
    }
}
export const act_get_success_std = (payload) => {
    return {
        type: stdTypes.STD_SUCCESS,
        payload
    }
}
export const act_add_std = (payload) => {

    return {
        type: stdTypes.STD_ADD,
        payload
    }
}
export const act_edit_std = (payload) => {
    return {
        type: stdTypes.STD_EDIT,
        payload
    }
}


export const act_update_std = (payload) => {
    return {
        type: stdTypes.STD_UPDATE,
        payload
    }
}


export const act_check_std = (payload) => {
    return {
        type: stdTypes.STD_CHECK,
        payload
    }
}


export const act_del_std = (payload) => {
    return {
        type: stdTypes.STD_DEL,
        payload
    }
}


export const act_search_std = payload => {
    console.log(payload);
    return {
        type: stdTypes.STD_SEARCH,
        payload
    }
}


export const act_ToggleByAdd=(data)=>{

    return {
        type: stdTypes.TOGGLE_BY_ADD,
        payload:data
    } 
}