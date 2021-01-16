import Fulllayout from '../layouts/fulllayout.jsx';
import GameView from "../views/ui-components/gameView";

var indexRoutes = [
    {
        path: '/games-view',
        name: 'gamesView',
        component: GameView
    },
    {
        path: '/',
        name: 'Starter',
        component: Fulllayout
    }];

export default indexRoutes;
