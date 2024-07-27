import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Auth/LoginPage";
import RegisterPage from "../Pages/Auth/RegisterPage";
import Matches from "../Pages/Matches/Matches";
import MatchPage from "../Pages/matchPage/MatchPage";
import ComingSoon from "../Pages/Comming Soon/CommingSoon";
import Catalogue from "../Pages/Catalogue/Catalogue";
import MyAccount from "../Pages/Auth/MyAccount";
import PetsContext from "../Context/GlobalContext";
import { useContext } from "react";
import Loader from "../Components/Loading";

function AppRoutes() {
    const { loading } = useContext(PetsContext);

    if (loading) return <Loader />;

    return (
        <Routes>
            <Route path='*' element={<ComingSoon />} />
            <Route path='/' element={<Home />} />
            <Route path='/Matches' element={<Matches />} />
            <Route path='/Match' element={<MatchPage />} />
            <Route path='/Sign-Up' element={<RegisterPage />} />
            <Route path='/Log-In' element={<LoginPage />} />
            {/* <Route path='/Account-Settings/:userId' element={<AccountSettings />} />  */}
            <Route path='/Account-Settings' element={<MyAccount />} />

            <Route path='/Catalogue' element={<Catalogue />} />
            <Route path='/About-Us' element={<ComingSoon />} />
            <Route path='/Admin' element={<ComingSoon />} />
            <Route path='/Blog' element={<ComingSoon />} />
        </Routes>
    );
}

export default AppRoutes;
