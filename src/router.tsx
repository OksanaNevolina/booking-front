import { createBrowserRouter } from 'react-router-dom';
import {AuthLayout, MainLayout} from "./components/layouts";
import {ErrorPage} from "./pages/errorPage";
import InfoMe from "./components/infoMe/InfoMe";
import {AuthLogin} from "./components";
import {AuthRegister} from "./components/authRegister";




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
        ],
    },
    {
        path: 'bookings',
        element: <InfoMe />,

    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);
export { router };