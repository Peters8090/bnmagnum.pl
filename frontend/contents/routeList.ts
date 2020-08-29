import {Hero} from '../components/pages/index/Sections/Hero/Hero'
import {About} from '../components/pages/index/Sections/About/About'
import {OurEmployees} from '../components/pages/index/Sections/OurEmployees/OurEmployees'
import OfferSearch from '../pages/wyszukiwarka-ofert'
import {Footer} from '../components/pages/index/Sections/Footer/Footer'

export const routeList: { displayName: string, routeName: string }[] = [Hero, About, OurEmployees, OfferSearch, Footer].map(route => ({
    displayName: route.displayName,
    routeName: route.routeName,
}))