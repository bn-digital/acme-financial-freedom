import {Button, Menu, MenuProps, Typography} from "antd";
import './Header.scss'
import {useLocation, useNavigate} from "react-router-dom";
import logo from './images/fin-logo.png'
import {useEffect, useState} from "react";
import {SvgIcon} from "../icon";
import classNames from 'classnames'

const {Title} = Typography
const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: 'home',
    },
    {
        label: 'About',
        key: 'about',
    },
    {
        label: 'Contact Us',
        key: 'contact-us',
    },
]
const Header = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [current, setCurrent] = useState('home');
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const [scrollHeight, setScrollHeight] = useState(12);
    useEffect(() => {
        setScrollHeight(window.scrollY)
    }, [])
    console.log(scrollHeight);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [headerFixed, setHeaderFixed] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setHeaderFixed(true);
        } else if (window.scrollY < 100) {
            setHeaderFixed(false);
        }
    };
    const classes = classNames({
        'app-header': true,
        'hidden': headerFixed
    })
    return (
        <div className={classes}>
            <div className="container">
                <div className="header-content-wrapper">
                    <div className="logo-block">
                        <img src={logo} alt=""/>
                    </div>
                    <div className="header-menu-wrapper">
                        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
                              className={'header-menu'}/>
                    </div>

                    <Button className={'header-btn'} type={'text'} icon={<SvgIcon type={'phone'}/>}
                            onClick={() => console.log('on phone click')}>{'+719-967-3377'}</Button>

                </div>
            </div>
        </div>
    );
};

export default Header;
