import {FC} from 'react'
import {useTheme} from '@material-ui/core/styles'
import {css} from '@emotion/core'
import Typography from '@material-ui/core/Typography'

interface InformationProps {
    title: string
    content: string
}

export const Information: FC<InformationProps> = props => {
    const theme = useTheme()
    const styles = {
        root: css`
            margin: ${theme.spacing(2)}px 0;
            word-wrap: anywhere;
            word-break: break-all;
            white-space: pre-wrap;
        `,
        title: css`
            text-transform: uppercase;
        `,
        content: css`
            font-weight: 300;
        `,
    }

    return (
        <div css={styles.root}>
            <Typography css={styles.title}>
                {props.title}
            </Typography>
            <Typography variant='h4' align='justify' css={styles.content}>
                {props.content}
            </Typography>
        </div>
    )
}