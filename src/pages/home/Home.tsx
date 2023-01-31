import Hero from "../../components/sections/hero/Hero";
import './Home.scss'
import Welcome from "../../components/sections/welcome/welcome";
import Consultation from "../../components/sections/consultation/Consultation";
import Specialization from "../../components/sections/specialization/Specialization";
import Customers from "../../components/sections/customers/Customers";
import Team from "../../components/sections/team/Team";
import Footer from "../../components/footer/Footer";
import GetInTouch from "../../components/sections/get-in-touch/GetInTouch";

const Home = () => {
    return (
        <div className={'home'}>
            <Hero/>
            <Welcome/>
            <Consultation/>
            <Specialization/>
            <Customers/>
            <Team />
            <GetInTouch />
            <Footer />
        </div>
    );
};

export default Home;
