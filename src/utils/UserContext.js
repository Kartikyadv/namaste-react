import { createContext } from "react";


const UserContext = createContext({
    loggedInUser: "Dummy",
});

export default UserContext;