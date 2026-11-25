import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import NotFound from '../pages/NotFound.jsx'
import Logement from '../pages/Logement.jsx'
import logementLoader from '../loaders/logementLoader.js'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                loader: logementLoader,
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'logement/:id',
                element: <Logement />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },
])

export default router