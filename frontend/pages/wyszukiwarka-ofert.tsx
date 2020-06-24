import {FC} from 'react'

const OffersSearch: FC = () => {
	return (
		<h1 style={{
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		}}>
			Wyszukiwarka
		</h1>
	)
}

export default OffersSearch

export const getServerSideProps = async () => {
	await new Promise((resolve => setTimeout(() => resolve(), 2000)))
	return {props: {}}
}