import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Home = Loadable({loader: () => import('../views/Home'), loading: DelayLoading, delay: 3000})
// const Detail = Loadable({loader: () => import('../views/Detail'), loading: DelayLoading, delay: 3000})
const NoMatch = Loadable({loader: () => import('../views/404'), loading: DelayLoading, delay: 3000})
const EventLoop = Loadable({loader: () => import('../views/EventLoop'), loading: DelayLoading, delay: 3000})
const SetState = Loadable({loader: () => import('../views/SetState'), loading: DelayLoading, delay: 3000})
const MapObject = Loadable({loader: () => import('../views/MapObject'), loading: DelayLoading, delay: 3000})
const AsyncFnc = Loadable({loader: () => import('../views/AsyncFnc'), loading: DelayLoading, delay: 3000})

export default
[
    {
        'path': '/home',
        'component': Home,
        'exact': true
    },
    // {
    //     'path': '/detail',
    //     'component': Detail,
    //     'exact': true
    // },
    {
        'path': '/event-loop',
        'component': EventLoop,
        'exact': true
    },
    {
        'path': '/state',
        'component': SetState,
        'exact': true
    },
    {
        'path': '/map-object',
        'component': MapObject,
        'exact': true
    },
    {
        'path': '/async-fnc',
        'component': AsyncFnc,
        'exact': true
    },
    {
        'path': '/panel/NoMatch',
        'component': NoMatch,
        'exact': false
    }
]
