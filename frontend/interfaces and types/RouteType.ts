import {FC} from 'react'

export interface RouteType<T = {}> extends FC<T> {
    displayName: string
    routeName: string
}