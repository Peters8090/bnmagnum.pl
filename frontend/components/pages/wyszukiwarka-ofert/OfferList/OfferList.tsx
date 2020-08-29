import {FC} from 'react'
import {Offer} from './Offer/Offer'
import {css} from '@emotion/core'

export const OfferList: FC = () => {
    const styles = {
        root: css`
    		overflow-y: scroll;
    	`,
    }

    return (
        <div css={styles.root}>
            {new Array(10).fill(null).map((_, i) => (
                <Offer key={i}/>
            ))}
        </div>
    )
}