import useMediaQuery from '@material-ui/core/useMediaQuery'

export const useCurrentNavigationHeight = () => {
    const cond1 = useMediaQuery('@media (min-width:600px)')
    const cond2 = useMediaQuery('@media (min-width:0px) and (orientation: landscape)')

    if (cond1)
        return 66
    else if (cond2)
        return 50
    else
        return 58
}