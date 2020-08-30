import {FC} from 'react'
import {Chip, Typography} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {css} from '@emotion/core'

export const Offer: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            width: 100%;
            border: 2px solid #BDBDBD;
            padding: ${theme.spacing(1.2)}px;
            transition: background-color 250ms;
            user-select: none;
            
            &:hover {
              background-color: #BDBDBD;
              cursor: pointer;
            }
        `,
        main: css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            & > * {
              margin: 0 ${theme.spacing(1)}px;
            }
        `,
        image: css`
            width: 80px;
            height: 80px;
            border-radius: 20px;
        `,
        title: css`
            font-weight: 500;
        `,
        chips: css`
            margin-top: ${theme.spacing(1)}px;
            & > * {
              margin: ${theme.spacing(0.5)}px ${theme.spacing(1)}px;
            }
        `,
        priceWrapper: css`
            flex: 1;
        `,
        price: css`
            font-weight: 500;
            white-space: nowrap;
            text-align: right;
        `,
    }


    return (
        <div css={styles.root}>
            <div css={styles.main}>
                <img
                    css={styles.image}
                    src='https://lh3.googleusercontent.com/mk4C8GtfBo8UmmwrDtQb1essiQPh_A1cN8S5liJ3jCRy1RSqAMCYgP6VW-yH70XFDic'
                    alt='image'/>
                <Typography
                    css={styles.title}
                    gutterBottom
                    variant='h5'>
                    Targówek, Warszawa, mazowieckie
                </Typography>
                <div css={styles.priceWrapper}>
                    <Typography variant='h5' css={styles.price}>
                        1 689 999 zł
                    </Typography>
                </div>
            </div>
            <div css={styles.chips}>
                {['300 m²', '2015 rok', 'ogród', 'basen', 'internet', 'telewizja', 'gaz', 'woda'].map((info) => (
                    <Chip key={info} label={info} color='secondary' size='small'/>
                ))}
            </div>

        </div>
    )
}