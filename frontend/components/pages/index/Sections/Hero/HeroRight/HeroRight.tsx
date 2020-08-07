import {FC} from 'react'
import House from '../../../../../../assets/images/house.svg'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const HeroRight: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
		    
		    ${theme.breakpoints.down('xs')} {
		        align-items: flex-start;
		    }
		`,
        image: css`
		    width: 80%;
		    
		    ${theme.breakpoints.down('sm')} {
		        
		    }
		`,
    }

    return (
        <div css={styles.root}>
            <img src={House} alt='dom' css={styles.image}/>
        </div>
    )
}