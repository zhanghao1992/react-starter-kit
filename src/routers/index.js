import Loadable from 'react-loadable'
import DelayLoading from '../components/DelayLoading'

export const Login = Loadable({
  loader: () => import('../views/Login'),
  loading: DelayLoading,
  delay: 3000//默认200ms
})