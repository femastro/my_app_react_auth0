import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {
    const { loginWithRedirect } = useAuth0();
    return (
        <div className="d-grid gap-2">
            <button
                type="button"
                onClick={() => loginWithRedirect()}
                class="btn btn-primary"
            >
                Login
            </button>
        </div>
    );
}
