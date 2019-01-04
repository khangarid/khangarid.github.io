import { action } from 'typesafe-actions'
import { ProjectsActionTypes, Project } from './types'

export const fetchRequest = () => action(ProjectsActionTypes.FETCH_REQUEST)
export const fetchSuccess = (data: Project[]) => action(ProjectsActionTypes.FETCH_SUCCESS, data)
export const fetchError = (message: string) => action(ProjectsActionTypes.FETCH_ERROR, message)
