import {css} from '@emotion/core'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../../contents/content'
import {FC} from 'react'

export const Logo: FC = () => {
    const styles = {
        root: css`
          font-family: 'Cabin', sans-serif;
        `,
    }

    return (
        <Typography variant='h6' css={styles.root}>
            {Content.navigation.logo_text}
        </Typography>
    )
}