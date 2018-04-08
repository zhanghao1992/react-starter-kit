import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

const Home = Loadable({loader: () => import('../views/Home'), loading: DelayLoading, delay: 3000})
const Detail = Loadable({loader: () => import('../views/Detail'), loading: DelayLoading, delay: 3000})
const NoMatch = Loadable({loader: () => import('../views/404'), loading: DelayLoading, delay: 3000})

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
    'path': '/panel/NoMatch',
    'component': NoMatch,
    'exact': false
  }
]
