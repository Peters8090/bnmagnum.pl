import {FC} from 'react'
import {css} from '@emotion/core'
import {lighten, useTheme} from '@material-ui/core/styles'
import {Container, Divider, Fab, Icon, Typography} from '@material-ui/core'
import Link from 'next/link'
import {RouteLink} from '../../../../functions/RouteLink'
import OfferSearch from '../../../../pages/wyszukiwarka-ofert/[[...offerName]]'
import HouseLocation from '../../../../assets/placeholders/house_location.png'

export const OfferDetails: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            display: flex;
            flex-direction: column;
            align-items: center;
        `,
        images: css`
            ${theme.customMixins.flexCentered};
            margin: ${theme.spacing(3)}px 0;
            
            ${theme.breakpoints.down('sm')} {
                flex-direction: column;
            }
            
            img {
              border-radius: 25px;
              
              ${theme.breakpoints.down('sm')} {
                  border-radius: 12.5px;
              }
            }
        `,
        mainImage: css`
            width: 300px;
            height: 300px;
            
            ${theme.breakpoints.down('sm')} {
                width: 200px;
                height: 200px;
            }
            
            object-fit: cover;
        `,
        thumbnails: css`
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            
            ${theme.breakpoints.up('md')} {
              flex-direction: column;
            }
            
            & > * {
              width: 100px;
              height: 100px;
              
              ${theme.breakpoints.down('sm')} {
                  width: 75px;
                  height: 75px;
              }
              
              object-fit: cover;
              margin: ${theme.spacing(2)}px;
            }
        `,
        title: css`
            font-weight: 500;
        `,
        goBackFab: css`
            position: fixed;
            right: ${theme.spacing(3)}px;
            bottom: ${theme.spacing(3)}px;
        `,
        agentCard: css`
            display: flex;
            align-items: center;
            
            margin: ${theme.spacing(2)}px 0;
        `,
        agentCardIcon: css`
            font-size: 50px;
            margin-right: ${theme.spacing(2)}px;
        `,
        agentCardText: css`
            font-weight: 500;
            font-size: 22px;
        `,
        agentCardTextHighlighted: css`
            color: ${theme.palette.secondary.main};
        `,
        section: css`
            margin-bottom: ${theme.spacing(3)}px;
        `,
        sectionTitle: css`
            font-weight: 600;
        `,
        sectionDesc: css`
            font-weight: 400;
        `,
        detailText: css`
            display: flex;
            justify-content: space-between;
            margin: ${theme.spacing(0.5)}px 0;
        `,
        detailTextName: css`
            font-weight: 500;
            color: ${lighten(theme.palette.text.primary, 0.2)};
        `,
        detailDivider: css`
            height: 3px;
        `,
        houseLocationImg: css`
            width: 100%;
            display: block;
            margin: ${theme.spacing(1.5)}px auto 0;
            border: 2px solid #BDBDBD;
        `,
    }

    return (
        <div css={styles.root}>
            <div css={styles.images}>
                <img
                    src='https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic'
                    alt='image' css={styles.mainImage}/>
                <div css={styles.thumbnails}>
                    <img
                        src='https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic'
                        alt='image'/>
                    <img
                        src='https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic'
                        alt='image'/>
                    <img
                        src='https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic'
                        alt='image'/>
                </div>
            </div>
            <Typography variant='h4' align='center' css={styles.title}>Targówek, Warszawa, mazowieckie</Typography>

            <div css={styles.agentCard}>
                <Icon css={styles.agentCardIcon}>phone</Icon>
                <Typography css={styles.agentCardText} component='div'>
                    Magdalena<br/>
                    <a css={styles.agentCardTextHighlighted} href='tel:+48 123 456 789'>
                        +48 123 456 789
                    </a>
                </Typography>
            </div>

            <Container maxWidth='sm'>
                <div css={styles.section}>
                    <Typography variant='h6' gutterBottom css={styles.sectionTitle}>
                        Opis
                    </Typography>
                    <Typography align='justify' variant='h6' css={styles.sectionDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate, debitis eligendi
                        est
                        expedita labore nulla odit ut vero. Amet animi corporis dolor fuga incidunt iusto modi,
                        provident
                        similique! Autem blanditiis culpa distinctio, dolor dolore est eum exercitationem explicabo
                        illum in
                        incidunt iusto magnam neque nihil nulla officia omnis perspiciatis, quae quaerat quibusdam
                        repellat.
                    </Typography>
                </div>
                <div css={styles.section}>
                    <Typography variant='h6' gutterBottom css={styles.sectionTitle}>
                        Szczegóły
                    </Typography>
                    {([['ID oferty', 8432], ['Cena', '1 689 999 zł'], ['Lokalizacja', 8432]] as [string, string | number][]).map(el => (
                        <div>
                            <div css={styles.detailText}>
                                <Typography align='left' css={styles.detailTextName}
                                            variant='h6'>
                                    {el[0]}
                                </Typography>
                                <Typography align='right' color='textSecondary' variant='h6'>
                                    {el[1]}
                                </Typography>
                            </div>
                            <Divider css={styles.detailDivider}/>
                        </div>
                    ))}
                </div>
                <div css={styles.section}>
                    <Typography variant='h6' gutterBottom css={styles.sectionTitle}>
                        Przybliżona lokalizacja
                    </Typography>
                    <img src={HouseLocation} alt='Lokalizacja domu' css={styles.houseLocationImg}/>
                </div>
            </Container>

            <Link {...RouteLink(OfferSearch)}>
                <Fab color='primary' css={styles.goBackFab}>
                    <Icon>clear</Icon>
                </Fab>
            </Link>
        </div>
    )
}