import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter , Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";

const Contact = lazy(()=> import("./components/Contact"));

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/restaurant-detail/:id",
                element: <RestaurantDetail/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}><Contact/></Suspense>
                )
            },
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);