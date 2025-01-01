import { createBrowserRouter } from 'react-router-dom';
import {AuthLayout, MainLayout} from "./components/layouts";
import {ErrorPage} from "./pages/errorPage";
import {AuthLogin} from "./components";
import {AuthRegister} from "./components/authRegister";
import {BookingsList} from "./components/bookingsList";




const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'sign-up',
                element: <AuthRegister />,
            },
            {
                path: 'sign-in',
                element: <AuthLogin/>,
            },
            {
                path: 'admin/sign-in',
                element: <AuthLogin/>,
            },
        ],
    },
    {
        path: 'bookings',
        element: <BookingsList />,

    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
export { router };