import { useEffect, useState } from "react";

const useRestaurantDetails = (id) => {
    const [resInfo,setResInfo] = useState(null);
    
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const dataTemp = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.1774553&lng=78.0077653&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`);
        const jsonData = await dataTemp.json();
        setResInfo(jsonData.data);
    };
    return resInfo;
}

export default useRestaurantDetails;
