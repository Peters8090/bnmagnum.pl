import {FC} from 'react'
import {PageTitle} from '../../shared/PageTitle'
import Grid from '@material-ui/core/Grid'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'
import {useCurrentNavigationHeight} from '../../../../../hooks/useCurrentNavigationHeight'
import {CompanyData} from './Section/Sections/CompanyData/CompanyData'
import {useScrollbarWidth} from 'react-use'

export const Footer: FC = () => {
    const navHeight = useCurrentNavigationHeight()
    const scrollBarWidth = useScrollbarWidth()!
    const theme = useTheme()
    const styles = {
        root: css`
		    width: 100%;
		    min-height: calc(100vh - ${navHeight}px);
		    background-color: #E0E0E0;
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		    
		    &::before {
		      width: 100%;
		      height: 50px;
		      background-color: transparent;
		      content: '';
		      
		      border-right: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
		      border-left: calc(50vw - ${scrollBarWidth / 2}px) solid transparent;
		      border-top: 100px solid white;
		      
		      ${theme.breakpoints.down('sm')} {
		          border-top-width: 50px;
		      }
		    }
		`,
        content: css`
          padding: 0 5%;
        `,
        title: css`
            margin-top: ${theme.spacing(5)}px;
        `,
    }

    return (
        <footer id='kontakt' css={styles.root}>
            <PageTitle text='Kontakt z nami' css={styles.title}/>
            <Grid container css={styles.content}>
                <CompanyData/>
            </Grid>
        </footer>
    )
}