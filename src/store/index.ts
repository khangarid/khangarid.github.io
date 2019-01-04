import { combineReducers, Dispatch, Action, AnyAction } from 'redux'
import { all, fork } from 'redux-saga/effects'

import { LayoutState, layoutReducer } from './layout'

import projectsSaga from './projects/sagas'
import { projectsReducer } from './projects/reducer'
import { ProjectsState } from './projects/types'

export interface ApplicationState {
  layout: LayoutState
  projects: ProjectsState
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}

export const rootReducer = combineReducers<ApplicationState>({
  layout: layoutReducer,
  projects: projectsReducer,
})

export function* rootSaga() {
  yield all([fork(projectsSaga)])
}
