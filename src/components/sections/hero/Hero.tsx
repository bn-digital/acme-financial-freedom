import React from 'react';
import background from './images/hero-bg.png'
import './Hero.scss'
import {Button, Typography} from "antd";
import {SvgIcon} from "../../icon";
import {useNavigate} from "react-router-dom";

const {Title} = Typography
const Hero = () => {
    const navigate = useNavigate()
    const onScrollDown = () => {
      // navigate('#welcome')
    }
    return (
        <div className={'hero'}>
            <div className="container">
                <div className="content-wrapper">
                    <Title className={'main-title'}>{'Financial Freedom'}</Title>
                    <div className="secondary-text-block">
                        <div className="text-string first" >
                            <p className="red-star">{'*'}</p>
                            <p className="hero-text">{'through passive'}</p>
                        </div>
                        <div className="text-string">
                            <p className="hero-text">{'real estate investing'}</p>
                        </div>
                    </div>
                    <div className="circle">
                        <SvgIcon type={'arrow-right'}/>
                        <p>{'JOIN US NOW'}</p>
                    </div>
                </div>
                <div className="down-btn-wrapper">
                    <a href="#welcome">
                    <Button onClick={onScrollDown} className={'scroll-down-btn'} type={'text'} icon={<SvgIcon type={'arrow-scroll'} />}>{'Scroll Down'}</Button>
                    </a>
                </div>
            </div>
            <div className="background">
                <img src={background} alt="background"/>
            </div>
        </div>
    );
};

export default Hero;
