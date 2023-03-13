import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Profile from "./components/pages/Profile";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Article from "./components/pages/Article";
import NewArticle from "./components/pages/New";

function App() {
    const { isAuthenticated } = useAuth0();
    return (
        <div>
            <Header />
            {isAuthenticated && (
                <div className="container">
                    {/* ACA VAN LAS RUTAS */}
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Profile />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/article/:id" element={<Article />} />
                            <Route exact path="/new" element={<NewArticle />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            )}
        </div>
    );
}

export default App;
