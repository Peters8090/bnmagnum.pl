import {FC} from 'react'
import {PageTitle} from '../../shared/PageTitle'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'
import {useCurrentNavigationHeight} from '../../../../../hooks/useCurrentNavigationHeight'
import FooterShape from '../../../../../assets/images/footer_shape.svg'

export const Footer: FC = () => {
    const navHeight = useCurrentNavigationHeight()
    const theme = useTheme()
    const styles = {
        footerWrapper: css`
		    display: flex;
		    height: calc(100vh - ${navHeight}px);
		    flex-direction: column;
		`,
        footer: css`
		    width: 100%;
		    height: 100%;
		    flex: 1;
		    background-color: #E0E0E0;
		    padding: 0 ${theme.spacing(12)}px;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		`,
        footerTitle: css`
            margin-top: ${theme.spacing(5)}px;
        `,
        footerSection: css`
            
        `,
        footerSectionTitle: css`
            font-weight: 500;
            margin-bottom: ${theme.spacing(3)}px;
        `,
        companyData: css`
            margin: ${theme.spacing(2)}px 0;
        `,
        companyDataText: css`
            font-weight: 300;
        `,
    }

    return (
        <div css={[styles.footerWrapper]}>
            <img src={FooterShape}/>
            <footer id='kontakt' css={[styles.footer]}>
                <PageTitle text='Kontakt z nami' css={styles.footerTitle}/>
                <Grid container>
                    <Grid item md={8}>
                        <Typography variant='h5' gutterBottom css={styles.footerSectionTitle}>
                            Dane firmy
                        </Typography>
                        <div css={styles.companyData}>
                            <Typography>
                                E-MAIL
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                biuro@nieruchomosci-waw.com
                            </Typography>
                        </div>
                        <div css={styles.companyData}>
                            <Typography>
                                TELEFON
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                +48 123 456 789
                            </Typography>
                        </div>
                        <div css={styles.companyData}>
                            <Typography>
                                ADRES FIRMY
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                ul. Marszałkowska 1, 00-026 Warszawa
                            </Typography>
                        </div>
                        <div css={styles.companyData}>
                            <Typography>
                                NIP
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                5213849986
                            </Typography>
                        </div>
                        <div css={styles.companyData}>
                            <Typography>
                                REGON
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                382028956
                            </Typography>
                        </div>
                        <div css={styles.companyData}>
                            <Typography>
                                KRS
                            </Typography>
                            <Typography variant='h4' css={styles.companyDataText}>
                                0000745671
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}