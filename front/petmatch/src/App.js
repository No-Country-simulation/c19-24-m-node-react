import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import CatalogueBanner from "./Components/Banners/Catalogue/CatalogueBanner";
import Catalogue from "./Pages/Catalogue";
import CatalogueFilter from "./Components/CatalogueFilter";


function App() {
    return (
        <div className='bg-gray-100'>
            <Header />
          {/*   <Home /> */}
          <CatalogueBanner/>

          <Catalogue/>
            <Footer />
        </div>

    );
}

export default App;
