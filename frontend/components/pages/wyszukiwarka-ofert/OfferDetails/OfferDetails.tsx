import {FC} from 'react'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core/styles'
import {Fab, Icon, Typography} from '@material-ui/core'
import Link from 'next/link'

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
            <Link href='/wyszukiwarka-ofert/[...offerName]' as='/wyszukiwarka-ofert'>
                <Fab color='primary' css={styles.goBackFab}>
                    <Icon>clear</Icon>
                </Fab>
            </Link>
        </div>
    )
}