import { Global, css } from '@emotion/core'
import { FC } from 'react'

export const GlobalStyles: FC = () => <Global styles={css`
@import "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap";
`}/>