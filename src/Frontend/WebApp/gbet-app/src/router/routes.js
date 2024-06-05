import About from "../pages/About"
import BetHistory from "../pages/BetHistory"
import Bets from "../pages/Bets"
import Events from "../pages/Events"
import Login from "../pages/Login"
import Replenishment from "../pages/Replenishment"
import Welcome from "../pages/Welcome"
import WithDrawing from "../pages/WithDrawing"

export const privateRoutes = [
    {path: '/', component: Events},
    {path: '/events/:id', component: Bets},
    {path: '/history', component: BetHistory},
    {path: '/replineshment/', component: Replenishment},
    {path: '/withdraw', component: WithDrawing},
    {path: '/about', component: About},
    {path: '*', component: Events},
]

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '*', component: Login},
]

export const protectedRoutes = [
    {path: '/', component: Welcome},
    {path: '/about', component: About},
    {path: '*', component: Welcome},
]