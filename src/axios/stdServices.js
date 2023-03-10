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
export const STD_SEARCH_SERVICE=async(search)=>{
    let listSearch= await instance.get(`students?studentName_like=${search}`)
    return listSearch.data  
} 
export const STD_SORT_SERVICE=async(sort)=>{
    console.log(sort);
    let listSearch= await instance.get(`students?_sort=${sort[0]}&_order=${sort[1]}`)
    return listSearch.data  
} 
