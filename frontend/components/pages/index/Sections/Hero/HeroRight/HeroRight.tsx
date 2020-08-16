import {FC} from 'react'
import House from '../../../../../../assets/images/house.svg'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

export const HeroRight: FC = () => {
    const theme = useTheme()
    const styles = {
        root: css`
            ${theme.customMixins.flexCentered};
		`,
        image: css`
		    width: 80%;
		`,
    }

    return (
        <div css={styles.root}>
            <img src={House} alt='dom' css={styles.image}/>
        </div>
    )
}