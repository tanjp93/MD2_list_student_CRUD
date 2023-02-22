import {all,takeLatest} from 'redux-saga/effects'
import { STD_ADD, STD_GET } from '../constants/constants'
import { STD_SAGA_ADD, STD_SAGA_GET } from './stdSaga'


export const rootSaga=function*(){
    yield all([
        takeLatest(STD_GET,STD_SAGA_GET),
        takeLatest(STD_ADD,STD_SAGA_ADD),
    ])
}