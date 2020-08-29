import {useContext} from 'react'
import {LayoutContext} from '../hoc/Layout/Layout'
import useComponentSize from '@rehooks/component-size'

export const useCurrentNavigationHeight = () => {
    const {navigationRef} = useContext(LayoutContext)
    const {height} = useComponentSize(navigationRef)

    return height
}