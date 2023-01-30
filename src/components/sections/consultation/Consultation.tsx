import './Consultation.scss'
import {Button, Typography} from "antd";
import {SvgIcon} from "../../icon";
import consultationBackground from './images/consultation-bg.png'

const{Title, Paragraph} = Typography
const Consultation = () => {
    return (
        <div className={'consultation'}>
            <div className="container">
                <div className="content">
                    <div className="square"/>
                    <Title  level={3} style={{margin: '50px 0 25px 0', color: 'white'}}>{'Get a free consultation'}</Title>
                    <Paragraph style={{color: 'white', fontSize: 20}}>{'Find out if passive income through commercial real estate investment is right for you.'}</Paragraph>
                    <div className="btn-block">
                        <Button type={'primary'} icon={<SvgIcon type={'meeting'}/>}>{'Book a meeting'}</Button>
                    </div>
                </div>

            </div>
            <img className={'background-image'} src={consultationBackground} alt=""/>
        </div>
    );
};

export default Consultation;
