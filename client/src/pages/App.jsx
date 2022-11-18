import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "./Home/Home";
import SignIn from "./SignIn/SignIn";
import Profile from "./Profile/Profile";
import Footer from "../components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile/:token" element={<Profile />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
