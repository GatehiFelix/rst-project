import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "@components/Layout";
import CartScreen from "@screens/Cart";
import ErrorScreen from "@screens/Error";
import HomeScreen from "@screens/Home";
import ProductDetailsScreen from "@screens/ProductDetails";
import store from "./store";

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
                element: <ProductDetailsScreen />,
            },
            {
                path: '/cart',
                element: <CartScreen />,
            },
        ],
    },
]);


const App  =() => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
        );
}

export default App;