import './welcome.scss'
import {Button, Typography} from "antd";
import frame from './images/frame01.png'
import picture from './images/welcome-picture.png'


const {Title, Paragraph} = Typography
const Welcome = () => {
    return (
        <div className={'welcome'} id={'welcome'}>
            <div className="container" >
                <div className="welcome-content">
                    <div className="left-block">
                        <Title level={3}
                               className={'welcome-title'}>{'Welcome to the Summit Capital Investors Club'}</Title>
                        <Paragraph
                            style={{fontSize: 20}}>{'At Summit Capital, we provide financial freedom. The freedom to live the lifestyle you want with the people you love.'}</Paragraph>
                        <Paragraph
                            style={{fontSize: 20}}>{'Through commercial real estate investments,'}
                            <a className={'text-link'} href={'#'}>{' Summit Capital'}</a>
                            {' provides you recurring, passive income to support your family and lifestyle.'}
                        </Paragraph>
                        <Paragraph
                            style={{fontSize: 20}}>{'Click the button below to start your journey to financial freedom today.'}</Paragraph>
                        <div className="btn-block">
                            <Button type={'primary'}>{'Join the Investors Club'}</Button>
                        </div>
                    </div>
                    <div className="right-block">
                        <div className="frame-wrapper">
                            <img src={frame} alt=""/>

                        </div>
                        <div className="photo">
                            <img src={picture} alt=""/>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Welcome;
