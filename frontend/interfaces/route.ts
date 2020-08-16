import {FC} from 'react'

export interface Route<T = {}> extends FC<T> {
    useRouteName: (...args: any) => string
}