import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AdminRoute from "@components/AdminRoute";
import Layout from "@components/Layout";
import PrivateRoute from "@components/PrivateRoute";
import CartScreen from "@screens/Cart";
import ErrorScreen from "@screens/Error";
import HomeScreen from "@screens/Home";
import LoginScreen from "@screens/Login";
import ProductDetailsScreen from "@screens/ProductDetails";
import ProductListScreen from "@screens/ProductList";
import ProfileScreen from "@screens/Profile";
import ProductEditScreen from "@screens/ProductEdit";
import RegisterScreen from "@screens/Register";       
import ShippingScreen from "@screens/Shipping";     
import PaymentScreen from "@screens/Payment";     
import PlaceOrderScreen from "@screens/PlaceOrder";
import OrderScreen from "@screens/Order";
import OrderListScreen from "@screens/OrderList";
import UserListScreen from "@screens/UserList";

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
                    },
                    {
                        path: '/profile',
                        element: <ProfileScreen />,
                    }
                ]
            },
            {
                path: '',
                element: <AdminRoute />,
                children: [
                    {
                        path: '/admin/order-list',
                        element: <OrderListScreen />,
                    },
                    {
                        path: '/admin/product-list',
                        element: <ProductListScreen />,
                    },
                    {
                        path: '/admin/product/:id/edit',
                        element: <ProductEditScreen />,
                    },
                    {
                        path: '/admin/user-list',
                        element: <UserListScreen />,
                    }
                ]
            },
        ],
    },
]);


const App  =() => {
    return (
        <Provider store={store}>
            <PayPalScriptProvider 
                deferLoading={true}
                options={{
                    currency: 'USD',
                }}
            >
            <RouterProvider router={router}/>
            <ToastContainer 
                position="bottom-right"
                autoClose={3000}
                hideProgressBar
            />
            </PayPalScriptProvider>
        </Provider>
        );
}

export default App;