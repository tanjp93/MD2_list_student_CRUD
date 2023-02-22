import * as actTypes from "../redux/constants/constants";
import { instance } from "./axios";

export const STD_GET_SERVICE = async () => {
    let respone = await instance.get("students")
    return respone.data
}
export const STD_POST_SERVICE = async (newStudent) => {
    return await instance.post("students", newStudent)

}