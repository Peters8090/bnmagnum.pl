import {FC} from 'react'
import House from '../../../../../../assets/images/house.svg'
import {css} from '@emotion/core'

export const HeroRight: FC = () => {
    const styles = {
        root: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
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