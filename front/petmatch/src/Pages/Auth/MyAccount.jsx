import Footer from "../../Components/Footer/Footer";
import AccountForm from "../../Components/Auth/AccountForm";
import Header from "../../Components/Header/Header";
// import { useParams } from "react-router-dom";

function MyAccount() {
    // const { userId } = useParams();

    // console.log(userId);

    return (
        <section className='bg-[#F4F4F4]'>
            <Header />
            <AccountForm />
            <Footer />
        </section>
    );
}

export default MyAccount;
