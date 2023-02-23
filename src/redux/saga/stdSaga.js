import { call, put } from 'redux-saga/effects'
import * as stdService from '../../axios/stdServices'
import { act_get_success_std } from '../action'
import { STD_SEARCH } from '../constants/constants'

export const STD_SAGA_ADD = function* (action) {
    try {
        yield call(stdService.STD_POST_SERVICE, action.payload)
        yield STD_SAGA_GET()
    } catch (error) {
        console.log("STD_SAGA_GET Err =>>", error);
    }
}

export const STD_SAGA_UPDATE = function* (action) {

    try {
        yield call(stdService.STD_PATCH_SERVICE, action.payload)
        yield STD_SAGA_GET()
    } catch (error) {
        console.log("STD_SAGA_GET Err =>>", error);
    }
}

export const STD_SAGA_DEL = function* (action) {
    try {

        yield call(stdService.STD_DEL_SERVICE, action.payload)
        yield STD_SAGA_GET()
    } catch (error) {
        console.log("STD_DEL_SERVICE Err =>>", error);
    }
}

// export const STD_SAGA_SEARCH = function* (action) {
//     try {
//         yield call(stdService.STD_SEARCH_SERVICE, action.payload)
//         yield STD_SAGA_GET()
//     } catch (error) {
//         console.log("STD_SAGA_SEARCH Err =>>", error);
//     }
// }


export const STD_SAGA_GET = function* (action) {
    let listStd;
    switch (action.type) {
        case STD_SEARCH:
            try {
                 listStd =yield call(stdService.STD_SEARCH_SERVICE, action.payload)
                yield put(act_get_success_std(listStd))
            } catch (error) {
                console.log("STD_SAGA_SEARCH Err =>>", error);
            }
            break;
        default:
            try {
                 listStd = yield call(stdService.STD_GET_SERVICE)
                yield put(act_get_success_std(listStd))
            } catch (error) {
                console.log("STD_SAGA_GET Err =>>", error);
            }
    }
}