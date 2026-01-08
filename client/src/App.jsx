import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import ErrorScreen from "@screens/Error";
import HomeScreen from "@screens/Home";
import ProductDetailsScreen from "@screens/ProductDetails";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        errorElement:<ErrorScreen />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: '/product/:id',
                element: <ProductDetailsScreen />
            }
        ]
    }
])


const App  =() => {
    return <RouterProvider router={router}/>
}

export default App;