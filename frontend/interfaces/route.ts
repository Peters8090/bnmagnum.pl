import {FC} from 'react'

export interface Route<T = {}> extends FC<T> {
    displayName: string
    routeName: string
}