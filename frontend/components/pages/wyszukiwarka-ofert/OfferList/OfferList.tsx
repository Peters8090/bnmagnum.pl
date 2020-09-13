import {FC} from 'react'
import {Offer} from './Offer/Offer'

export const OfferList: FC = () => {
    return (
        <div>
            {new Array(10).fill(null).map((_, i) => (
                <Offer key={i} id={i}/>
            ))}
        </div>
    )
}