import {FC} from 'react'
import {Typography, useTheme} from '@material-ui/core'
import {css} from '@emotion/core'

export const OfferDetails: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
    		${theme.customMixins.flexCentered};
    	`,
    }

    return (
        <div css={styles.root}>
            <Typography variant='h2'>
                Szczegóły oferty
            </Typography>
        </div>
    )
}