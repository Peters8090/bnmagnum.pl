import {FC} from 'react'
import css from '@emotion/css'
import {Typography, useTheme} from '@material-ui/core'

const OffersSearch: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
    	    flex: 1;
    	    ${theme.customMixins.flexCentered};
    	`,
    }

    return (
        <div css={styles.root}>
            <Typography variant='h1'>
                Wyszukiwarka
            </Typography>
        </div>
    )
}

export default OffersSearch

export const getServerSideProps = async () => {
    await new Promise((resolve => setTimeout(() => resolve(), 2000)))
    return {props: {}}
}