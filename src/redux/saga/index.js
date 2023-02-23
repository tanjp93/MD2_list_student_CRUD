import {all,takeLatest} from 'redux-saga/effects'
import { STD_ADD, STD_DEL, STD_EDIT, STD_GET, STD_SEARCH, STD_UPDATE } from '../constants/constants'
import { STD_SAGA_ADD, STD_SAGA_DEL, STD_SAGA_EDIT, STD_SAGA_GET, STD_SAGA_SEARCH, STD_SAGA_UPDATE } from './stdSaga'


export const rootSaga=function*(){
    yield all([
        takeLatest(STD_GET,STD_SAGA_GET),
        takeLatest(STD_ADD,STD_SAGA_ADD),
        takeLatest(STD_UPDATE,STD_SAGA_UPDATE),
        takeLatest(STD_DEL,STD_SAGA_DEL),
        takeLatest(STD_SEARCH,STD_SAGA_GET)
    ])
}