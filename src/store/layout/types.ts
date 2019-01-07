export enum LayoutActionTypes {
  SET_NAV_VISIBILITY = '@@layout/SET_NAV_VISIBILITY'
}

export interface LayoutState {
  readonly navVisible: boolean
}
