/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/

import Cards from '../views/ui-components/cards.jsx';
import GamesDetails from '../views/ui-components/gamesDetail';
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
    path: '/',
    name: 'Cards',
    component: Cards
  }
];
export default ThemeRoutes;