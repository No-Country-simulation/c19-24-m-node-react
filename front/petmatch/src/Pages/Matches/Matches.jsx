import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Catalogue from "../../Components/Match/Catalogue";
import MatchBanner from "../../Components/MatchBanner/MatchBanner";

function Matches() {
    return (
        <>
            <section className={`bg-[#7ba36c]`}>
                <Header />
                <MatchBanner />
            </section>
            <Catalogue />
            <Footer />
        </>
    );
}

export default Matches;
