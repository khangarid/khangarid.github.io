import { Reducer } from 'redux'
import { LayoutState, LayoutActionTypes } from './types'

const initialState: LayoutState = {
  navVisible: false
}

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_NAV_VISIBILITY: {
      return { ...state, theme: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as layoutReducer }
