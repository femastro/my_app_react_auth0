import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function LogOut() {
    const { logout } = useAuth0();
    return (
        <div className="d-grid gap-2">
            <button
                type="button"
                onClick={() => logout()}
                class="btn btn-primary"
            >
                LogOut
            </button>
        </div>
    );
}
