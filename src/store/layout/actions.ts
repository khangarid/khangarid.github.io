import { action } from 'typesafe-actions'

import { LayoutActionTypes } from './types'

export const setNavVisibility = (visibility: boolean) => action(LayoutActionTypes.SET_NAV_VISIBILITY, visibility)
