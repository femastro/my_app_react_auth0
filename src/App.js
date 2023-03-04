import "./App.css";

import Profile from "./Profile";
import Login from "./components/Login";
import LogOut from "./components/LogOut";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
    const { isAuthenticated } = useAuth0();

    return (
        <div className="App">
            <header className="App-header">
                {isAuthenticated ? <LogOut /> : <Login />}
                <br />
                <br />
                <Profile />
            </header>
        </div>
    );
}

export default App;
