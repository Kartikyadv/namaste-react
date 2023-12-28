const SingleMenu = ({menulist,index}) => {
    // console.log(menulist.card.info);
    const {name,price,defaultPrice,description,imageId} = menulist?.card?.info;
    return (
        <div className="single_menu">
            <h3 className="food_name">{name}        - Rs {(defaultPrice || price)/100}</h3>
            {imageId?<img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}/>:<h1></h1>}
            
            <h4>{description}</h4>
        </div>
    )
};

export default SingleMenu;