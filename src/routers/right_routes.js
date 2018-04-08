import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Home = Loadable({loader: () => import('../views/Home'), loading: DelayLoading, delay: 3000})
const Detail = Loadable({loader: () => import('../views/Detail'), loading: DelayLoading, delay: 3000})
const NoMatch = Loadable({loader: () => import('../views/404'), loading: DelayLoading, delay: 3000})
const EventLoop = Loadable({loader: () => import('../views/EventLoop'), loading: DelayLoading, delay: 3000})
const SetState = Loadable({loader: () => import('../views/SetState'), loading: DelayLoading, delay: 3000})

export default
[
    {
        'path': '/panel/home',
        'component': Home,
        'exact': true
    },
    {
        'path': '/panel/detail',
        'component': Detail,
        'exact': true
    },
    {
        'path': '/panel/event-loop',
        'component': EventLoop,
        'exact': true
    },
    {
        'path': '/panel/state',
        'component': SetState,
        'exact': true
    },
    {
        'path': '/panel/NoMatch',
        'component': NoMatch,
        'exact': false
    }
]
