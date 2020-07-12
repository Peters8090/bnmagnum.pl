import {FC} from 'react'
import {useTheme} from '@material-ui/core'
import {css} from '@emotion/core'
import Typography from '@material-ui/core/Typography'

interface InformationProps {
    title: string
    content: string
}

export const Information: FC<InformationProps> = props => {
    const theme = useTheme()
    const styles = {
        companyData: css`
            margin: ${theme.spacing(2)}px 0;
        `,
        companyDataText: css`
            font-weight: 300;
        `,
    }

    return (
        <div css={styles.companyData}>
            <Typography>
                {props.title}
            </Typography>
            <Typography variant='h4' css={styles.companyDataText}>
                {props.content}
            </Typography>
        </div>
    )
}