import {FC, ReactNode} from 'react'

interface HiddenCondProps {
    condition: boolean
    implementation?: 'js' | 'css'
    children: ReactNode
}

export const HiddenCond: FC<HiddenCondProps> = props => {
    if (props.implementation === 'css') {
        return (
            <span style={{display: props.condition ? 'none' : undefined}}>
                {props.children}
            </span>
        )
    } else {
        if (props.condition) {
            return null
        } else {
            return <>{props.children}</>
        }
    }
}

HiddenCond.defaultProps = {
    implementation: 'js',
}