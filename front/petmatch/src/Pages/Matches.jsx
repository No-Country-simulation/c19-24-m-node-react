import Footer from "../Components/Footer/Footer";
import Catalogue from "../Components/Match/Catalogue";
import MatchBanner from "../Components/MatchBanner/MatchBanner";

import styles from "./Matches.module.css";

function Matches() {
    return (
        <>
            <section className={`${styles.Matches}`}>
                {/* Aqui iria el Header */}
                <MatchBanner />
            </section>
            <Catalogue />
            <Footer />
        </>
    );
}

export default Matches;
