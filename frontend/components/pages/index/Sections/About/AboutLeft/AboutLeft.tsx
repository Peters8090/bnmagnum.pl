import {FC} from 'react'
import Grid from '@material-ui/core/Grid'
import {css} from '@emotion/core'

export const AboutLeft: FC = () => {
    const styles = {
        aboutLeft: css`
		    border-radius: 80px;
		    width: 100%;
		`,
    }

    return (
        <Grid item lg={4} md={5} xs={8}>
            <img src='https://dompp.pl/wp-content/uploads/2018/07/Projekt-domu-House-21-DomPP.pl-1.jpg'
                 alt='dom' css={styles.aboutLeft}/>
        </Grid>
    )
}