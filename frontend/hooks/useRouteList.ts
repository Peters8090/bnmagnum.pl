import {Hero} from '../components/pages/index/Sections/Hero/Hero'
import {About} from '../components/pages/index/Sections/About/About'
import {OurEmployees} from '../components/pages/index/Sections/OurEmployees/OurEmployees'
import OffersSearch from '../pages/wyszukiwarka-ofert'
import {Footer} from '../components/pages/index/Sections/Footer/Footer'

export const useRouteList: { name: string, href: string }[] = [Hero, About, OurEmployees, OffersSearch, Footer]