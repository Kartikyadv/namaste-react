const User = (props) => {
    const {name,location} = props;
    return (
        <div className="user_card">
            <h1>{name}</h1>
            <h2>{location}</h2>
            <h2>ky5986390@gmail.com</h2>
        </div>
    )
}

export default User;