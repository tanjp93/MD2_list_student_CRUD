import { combineReducers } from "redux";
import { students, } from "./std";
import { searchStd } from "./stdSearch";

export const rootReducer=combineReducers({students,searchStd })