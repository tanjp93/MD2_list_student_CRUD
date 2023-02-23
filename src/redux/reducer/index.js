import { combineReducers } from "redux";
import { students, } from "./std";
import { searchStd } from "./stdSearch";
import { editStd ,checkStd} from './editStd'

export const rootReducer=combineReducers({students,searchStd ,editStd,checkStd})