import React from 'react';
import './Customers.scss'
import {Button, Typography} from "antd";
import {SvgIcon} from "../../icon";
import customer01 from './images/customer01.png'
import customer02 from './images/customer02.png'
import customer03 from './images/customer03.png'
import customer04 from './images/customer04.png'
import customer05 from './images/customer05.png'
import customer06 from './images/customer06.png'
import customer07 from './images/customer07.png'
import customer08 from './images/customer08.png'


const {Text} = Typography

const customersArray = [
    {
        key: '1',
        image: customer01
    },
    {
        key: '2',
        image: customer02
    },
    {
        key: '3',
        image: customer03
    },
    {
        key: '4',
        image: customer04
    },
    {
        key: '5',
        image: customer05
    },
    {
        key: '6',
        image: customer06
    },
    {
        key: '7',
        image: customer07
    },
    {
        key: '8',
        image: customer08
    },
]

const Customers = () => {
    return (
        <div className={'customers'}>
            <div className="container">
                <div className="title-container">
                <Text className={'section-title'}>{'Trusted by 2,000+ founders & customers'}</Text>
                </div>
                <div className="customers-grid">
                    {customersArray.map(it => (
                        <div key={it?.key} className="customer-card">
                            <img src={it?.image} alt=""/>
                        </div>
                    ))}

                </div>
                <div className="btn-box">
                    <Button type={'text'} icon={<SvgIcon type={'small-arrow-right'} />}>{'Meet Our Customers'}</Button>
                </div>
            </div>

        </div>
    );
};

export default Customers;
