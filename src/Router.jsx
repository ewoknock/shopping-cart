import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/shopping-cart/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "shop",
                    element: <Shop />
                },
                {
                    path: "cart",
                    element: <Cart />
                }
            ]
        }
    ])
    return <RouterProvider router={router} />
}

export default Router