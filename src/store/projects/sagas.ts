import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { ProjectsActionTypes } from './types'
import { fetchError, fetchSuccess } from './actions'
import callApi from '../../utils/callApi'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://api.jsonbin.io'

function* handleFetch() {
  try {
    const res = yield call(callApi, 'get', API_ENDPOINT, '/b/5c2ec51481fe89272a83db53/1')

    if (res.error) {
      yield put(fetchError(res.error))
    } else {
      yield put(fetchSuccess(res))
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(fetchError(err.stack!))
    } else {
      yield put(fetchError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(ProjectsActionTypes.FETCH_REQUEST, handleFetch)
}

function* projectsSaga() {
  yield all([fork(watchFetchRequest)])
}

export default projectsSaga
