import SingleMenu from "./SingleMenu";

const RestaurantMenu = ({data,showItems,setShowIndex}) => {
    const handleClick = () => {
        setShowIndex();
        !showItems
    }
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                <span >⬇️</span>
            </div>
            {showItems?(<SingleMenu itemCards={data.itemCards}/>):(null)}
        </div>
    )
}

export default RestaurantMenu;