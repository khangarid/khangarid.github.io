export interface Project extends ApiResponse {
  name: string
  url: string,
  image: string,
  techs: string,
  description: string
}

export type ApiResponse = Record<string, any>

export enum ProjectsActionTypes {
  FETCH_REQUEST = '@@projects/FETCH_REQUEST',
  FETCH_SUCCESS = '@@projects/FETCH_SUCCESS',
  FETCH_ERROR = '@@projects/FETCH_ERROR',
  SELECT_PROJECT = '@@projects/SELECT_PROJECT',
  SELECTED = '@@projects/SELECTED'
}

export interface ProjectsState {
  readonly loading: boolean
  readonly data: Project[]
  readonly errors?: string
}
