import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Layout from "@components/Layout";
import PrivateRoute from "@components/PrivateRoute";
import CartScreen from "@screens/Cart";
import ErrorScreen from "@screens/Error";
import HomeScreen from "@screens/Home";
import LoginScreen from "@screens/Login";
import ProductDetailsScreen from "@screens/ProductDetails";
import RegisterScreen from "@screens/Register";       
import ShippingScreen from "@screens/Shipping";     
import PaymentScreen from "@screens/Payment";     
import PlaceOrderScreen from "@screens/PlaceOrder";
import OrderScreen from "@screens/Order";
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
            {
                path: '/login',
                element: <LoginScreen />,
            },
            {
                path: '/register',
                element: <RegisterScreen />,
            },
            {
                path: '',
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/shipping',
                        element: <ShippingScreen />,
                    },
                    {
                        path: '/payment',
                        element: <PaymentScreen />,
                    },
                    {
                        path: '/place-order',
                        element: <PlaceOrderScreen />,
                    },
                    {
                        path: '/order/:id',
                        element: <OrderScreen />,
                    }
                ]
            }
        ],
    },
]);


const App  =() => {
    return (
        <Provider store={store}>
            <RouterProvider router={router}/>
            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
            />
        </Provider>
        );
}

export default App;