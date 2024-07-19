import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Auth/LoginPage";
import RegisterPager from "../Pages/Auth/RegisterPage";
import Matches from "../Pages/Matches/Matches";
import ComingSoon from "../Pages/Comming Soon/CommingSoon";

function AppRoutes() {
    return (
        <Routes>
            <Route path='*' element={<ComingSoon />} />
            <Route path='/' element={<Home />} />
            <Route path='/Matches' element={<Matches />} />
            <Route path='/Match' element={<ComingSoon />} />
            <Route path='/Sign-Up' element={<RegisterPager />} />
            <Route path='/Log-In' element={<LoginPage />} />
            <Route path='/Catalogue' element={<ComingSoon />} />
            <Route path='/About-Us' element={<ComingSoon />} />
            <Route path='/Admin' element={<ComingSoon />} />
            <Route path='/Blog' element={<ComingSoon />} />
        </Routes>
    );
}

export default AppRoutes;
