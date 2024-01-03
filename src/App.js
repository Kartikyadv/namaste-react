import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter , Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";
import UserContext from "./utils/UserContext";

const Contact = lazy(()=> import("./components/Contact"));

const App = () => {
    const [userName,setUserName]  = useState();
    useEffect(()=> {
        setUserName("Kartik");
    },[]);

    return (
        <div className="app">
            <UserContext.Provider value={{
                loggedInUser: userName
            }}>
            <Header/>
            </UserContext.Provider>
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