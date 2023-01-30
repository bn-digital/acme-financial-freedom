import {Button, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import Hero from "../../components/sections/hero/Hero";
import './Home.scss'
import Welcome from "../../components/sections/welcome/welcome";
import Consultation from "../../components/sections/consultation/Consultation";

const {Title} = Typography

const Home = () => {
    const navigate = useNavigate()
    return (
        <div className={'home'}>
            <Hero />
            <Welcome />
            <Consultation />
        </div>
    );
};

export default Home;
