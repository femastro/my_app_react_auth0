import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
    const { user } = useAuth0();
    return (
        <div className="container">
            <div className="col-md-5 mx-auto mt-5 text-center">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        </div>
    );
}
