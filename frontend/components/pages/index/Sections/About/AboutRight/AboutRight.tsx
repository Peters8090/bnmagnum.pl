import {FC} from 'react'
import {css} from '@emotion/core'
import Grid from '@material-ui/core/Grid'
import {PageTitle} from '../../../shared/PageTitle'
import Typography from '@material-ui/core/Typography'
import {Content} from '../../../../../../contents/content'

export const AboutRight: FC = () => {
    const styles = {
        aboutRight: css`
		    padding: 0 5%;
		`,
        aboutRightTitle: css`
		    padding-right: 2%;
		    text-align: right;
		`,
        aboutRightContent: css`
		    font-weight: 200;
		    line-height: 1.2;
		    text-align: justify;
		`,
    }

    return (
        <Grid item lg={6} md={5} css={styles.aboutRight}>
            <PageTitle text={Content.content.title} css={styles.aboutRightTitle}/>
            <Typography variant='h3' css={styles.aboutRightContent}>
                {Content.content.content}
            </Typography>
        </Grid>
    )
}