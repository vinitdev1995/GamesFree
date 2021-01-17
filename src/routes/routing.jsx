/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/

import Cards from '../views/ui-components/cards.jsx';
import GamesDetails from '../views/ui-components/gamesDetail';
import About from "../views/ui-components/about";
import Policy from "../views/ui-components/policy";
import Terms from "../views/ui-components/TermsOfUse";
import ContactUs from "../views/ui-components/contactus/contactUs";
var ThemeRoutes = [
  {
    path: '/card',
    name: 'Cards',
    component: Cards
  },
  {
    path: '/gamesDetails',
    name: 'gamesDetails',
    component: GamesDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy
  },
  {
    path: '/terms',
    name: 'Terms',
    component: Terms
  },
  {
    path: '/contact-us',
    name: 'Terms',
    component: ContactUs
  },
  {
    path: '/advertise_with_us',
    name: 'Advertise',
    component: ContactUs
  },
  {
    path: '/',
    name: 'Cards',
    component: Cards
  }
];
export default ThemeRoutes;
