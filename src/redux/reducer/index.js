import { combineReducers } from "redux";
import { students, } from "./std";
import { editStd ,checkStd} from './editStd'

export const rootReducer=combineReducers({students ,editStd,checkStd})