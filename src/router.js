import { lazy } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Product = lazy(() => import('./pages/Product'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Shop = lazy(() => import('./pages/Shop'))
// const Dashboard = lazy(() => import('./pages/Dashboard'))

const routes = [
    { path: '/', exact: true, name: 'Home', element: Home },
    { path: '/about', exact: true, name: 'About', element: About },
    { path: '/product', exact: true, name: 'Product', element: Product },
    { path: '/blog', exact: true, name: 'Product', element: Blog },
    { path: '/contact', exact: true, name: 'Contact', element: Contact },
    { path: '/shop', exact: true, name: 'Shop', element: Shop },

  ]
  
  export default routes
