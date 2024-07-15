import Footer from "../Components/Footer/Footer";
import Catalogue from "../Components/Match/Catalogue";

import styles from "./Matches.module.css";

function Matches() {
    return (
        <>
            <section className={`${styles.Matches}`}>
                <header>header</header>
                <section></section>
            </section>
            <Catalogue />
            <Footer />
        </>
    );
}

export default Matches;
