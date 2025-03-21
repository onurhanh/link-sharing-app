import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileDetails from "./components/profile-details"; 
import HomePage from "./components/home-page";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile-details" element={<ProfileDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
