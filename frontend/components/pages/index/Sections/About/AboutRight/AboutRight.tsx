import {FC} from 'react'
import {css} from '@emotion/core'
import Grid from '@material-ui/core/Grid'
import {PageTitle} from '../../../shared/PageTitle'
import Typography from '@material-ui/core/Typography'

export const AboutRight: FC = () => {
    const styles = {
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
        <Grid item lg={6} md={5} css={styles.aboutRight}>
            <PageTitle text='O firmie' css={styles.aboutRightTitle}/>
            <Typography variant='h3' css={styles.aboutRightContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam nulla, accumsan nec augue
                ultrices, aliquam malesuada nibh. Fusce arcu ante, blandit ut hendrerit vitae, eleifend vel
                lorem.
            </Typography>
        </Grid>
    )
}