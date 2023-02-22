import {call,put} from 'redux-saga/effects'
import * as stdService from '../../axios/stdServices'
import { act_get_success_std } from '../action'

export const STD_SAGA_GET=function*(){ 
    try {
        let listStd=yield call(stdService.STD_GET_SERVICE)
        yield put(act_get_success_std(listStd))
    } catch (error) {
        console.log("STD_SAGA_GET Err =>>",error);
    }
}
export const STD_SAGA_ADD=function*(action){
    try {
       yield call(stdService.STD_POST_SERVICE, action.payload)
       yield STD_SAGA_GET()
    } catch (error) {
        console.log("STD_SAGA_GET Err =>>",error);
    }
}