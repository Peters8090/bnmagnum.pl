import {FC} from 'react'

export interface Route<T = {}> extends FC<T> {
    name: string
    useRouteName: (...args: any) => string
}