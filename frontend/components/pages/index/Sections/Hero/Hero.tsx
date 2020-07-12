import {FC} from 'react'
import {css} from '@emotion/core'
import {HeroLeft} from './HeroLeft/HeroLeft'
import {HeroRight} from './HeroRight/HeroRight'
import {GoDownFab} from './GoDownFab/GoDownFab'

export const Hero: FC = () => {
    const styles = {
        root: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;
		`,
    }

    return (
        <div css={styles.root}>
            <HeroLeft/>
            <HeroRight/>
            <GoDownFab/>
        </div>
    )
}