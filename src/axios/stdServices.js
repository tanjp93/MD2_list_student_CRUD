import * as actTypes from "../redux/constants/constants";
import { instance } from "./axios";

export const STD_GET_SERVICE = async () => {
    let respone = await instance.get("students")
    return respone.data
}
export const STD_POST_SERVICE = async (newStudent) => {
    return await instance.post("students", newStudent)

}
export const STD_PATCH_SERVICE=async(updateStd)=>{
    // console.log(updateStd);
    return await instance.patch(`students/${updateStd.id}`,updateStd)
}
export const STD_DEL_SERVICE=async(delStd)=>{
    console.log(delStd.id);
    return await instance.delete(`students/${delStd.id}`)
}