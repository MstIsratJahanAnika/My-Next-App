
const UserDetailPage = async({ params }) => {

    // params a folder er nam e pabo
    //params, an object that contains all dynamic segments of URL. In this case, it will contain the userId that we defined in the route.

    const {userId} = await params; 
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    console.log('show me user Id',user);

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserDetailPage;