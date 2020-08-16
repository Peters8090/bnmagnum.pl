declare module 'nextjs-progressbar' {
    import {FC} from 'react'

    interface NextNProgressProps {
        color?: string
        startPosition?: number
        stopDelayMs?: number
        options?: object
    }

    const NextNProgress: FC<NextNProgressProps> = () => {
    }
    export default NextNProgress
}