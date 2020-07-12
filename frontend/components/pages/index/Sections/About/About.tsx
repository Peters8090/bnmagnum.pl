import {FC} from 'react'
import Grid from '@material-ui/core/Grid'
import {PageTitle} from '../../shared/PageTitle'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'

export const About: FC = () => {
    const styles = {
        aboutLeft: css`
		    border-radius: 80px;
		    width: 100%;
		`,
        aboutRight: css`
		    padding: 0 5%;
		`,
        aboutRightTitle: css`
		    text-align: right;
		    padding-right: 2%;
		`,
        aboutRightContent: css`
		    font-weight: 200;
		    line-height: 1.2;
		    text-align: justify;
		`,
    }

    return (
        <Grid container justify='center' alignItems='center' id='o-firmie'>
            <Grid item lg={4} md={5} xs={8}>
                <img src='https://dompp.pl/wp-content/uploads/2018/07/Projekt-domu-House-21-DomPP.pl-1.jpg'
                     alt='dom' css={styles.aboutLeft}/>
            </Grid>
            <Grid item lg={6} md={5} css={styles.aboutRight}>
                <PageTitle text='O firmie' css={styles.aboutRightTitle}/>
                <Typography variant='h3' css={styles.aboutRightContent}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam nulla, accumsan nec augue
                    ultrices, aliquam malesuada nibh. Fusce arcu ante, blandit ut hendrerit vitae, eleifend vel
                    lorem.
                </Typography>
            </Grid>
        </Grid>
    )
}