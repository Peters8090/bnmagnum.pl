import {FC} from 'react'
import {PageTitle} from '../../shared/PageTitle'
import Grid from '@material-ui/core/Grid'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'
import {useCurrentNavigationHeight} from '../../../../../hooks/useCurrentNavigationHeight'
import FooterShape from '../../../../../assets/images/footer_shape.svg'
import {CompanyData} from './Section/Sections/CompanyData/CompanyData'

export const Footer: FC = () => {
    const navHeight = useCurrentNavigationHeight()
    const theme = useTheme()
    const styles = {
        root: css`
		    display: flex;
		    height: calc(100vh - ${navHeight}px);
		    flex-direction: column;
		`,
        content: css`
		    width: 100%;
		    height: 100%;
		    flex: 1;
		    background-color: #E0E0E0;
		    padding: 0 ${theme.spacing(12)}px;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		`,
        title: css`
            margin-top: ${theme.spacing(5)}px;
        `,
    }

    return (
        <div css={styles.root}>
            <img src={FooterShape} alt=''/>
            <footer id='kontakt' css={styles.content}>
                <PageTitle text='Kontakt z nami' css={styles.title}/>
                <Grid container>
                    <CompanyData/>
                </Grid>
            </footer>
        </div>
    )
}