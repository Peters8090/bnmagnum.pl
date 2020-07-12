import {FC} from 'react'
import Grid from '@material-ui/core/Grid'
import {AboutLeft} from './AboutLeft/AboutLeft'
import {AboutRight} from './AboutRight/AboutRight'
import css from '@emotion/css'

export const About: FC = () => {
    const styles = {
        root: css`
            display: flex;
    		justify-content: center;
    		align-items: center;
    	`,
    }

    return (
        <Grid container css={styles.root} id='o-firmie'>
            <AboutLeft/>
            <AboutRight/>
        </Grid>
    )
}