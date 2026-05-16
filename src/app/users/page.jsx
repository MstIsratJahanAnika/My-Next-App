import Link from "next/link";

// metadata
export const metadata = {
  title: 'All Users',
  description: 'all users description',
}

const UsersPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    return (
        <div>
            <h2>Users are coming here</h2>
            <div className="grid grid-cols-3 gap-4">
                {
                    users.map(user =>
                        <div key={user.id}>

                            {/* daisyUI card */}
                            <div className="card bg-primary text-primary-content">
                                <div className="card-body">
                                    <h2 className="card-title">{user.name}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                    <div className="card-actions justify-end">
                                        <Link href={`/users/${user.id}`}>
                                            <button className="btn">View Details</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;