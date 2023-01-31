import './Specialization.scss'
import frame02 from './images/frame02.png'
import slide01 from './images/slide01.png'
import slide02 from './images/slide02.jpg'
import slide03 from './images/slide03.jpg'
import slide04 from './images/slide04.jpg'
import slide05 from './images/slide05.jpg'
import slide06 from './images/slide06.jpg'
import {Button, Carousel, Typography} from "antd";
import {SvgIcon} from "../../icon";
import React, {useRef, useState} from "react";
import {CarouselRef} from "antd/es/carousel";
import classNames from "classnames";

const {Title, Text, Paragraph} = Typography

const slides = [
    {
        key: '1',
        image: slide01
    },
    {
        key: '2',
        image: slide02
    },
    {
        key: '3',
        image: slide03
    },
    {
        key: '4',
        image: slide04
    },
    {
        key: '5',
        image: slide05
    },
    {
        key: '6',
        image: slide06
    },
]
const Specialization = () => {
    const slider = useRef<CarouselRef | null>()
    const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
    const onNext = () => {
        slider.current?.next()
    }
    const onPrev = () => {
        slider.current?.prev()
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        afterChange(currentSlide: number) {
            console.log(currentSlide)
            setCurrentSlideNumber(currentSlide+1)
        }

    };
    const classesL = classNames({
        "arrow-wrapper": true,
        "disabled-left": currentSlideNumber === 1,

    })
    const classesR = classNames({
        "arrow-wrapper": true,

        "disabled-right": currentSlideNumber === slides.length
    })
    return (
        <div className={'specialization'}>
            <div className="container">
                <Title level={3}>{'Our Specializations'}</Title>
                <div className="content-grid">
                    <div className="slider-box">
                        <Carousel ref={(ref) => {
                            slider.current = ref;
                        }} {...settings}>
                            {slides.map(it => (
                                <div key={it?.key} className="image-slide">
                                    <img src={it?.image} alt=""/>
                                </div>
                            ))}
                        </Carousel>
                        <div className="frame-wrapper">
                            <img src={frame02} alt=""/>
                        </div>
                        <div className="counter-box">
                            <span className="current-slide">{`.${currentSlideNumber}`}</span>
                            <span className="total-slides">{`/${slides.length}`}</span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="slider-controls">
                            <div className={classesL} onClick={onPrev}>
                                <SvgIcon type={'slider-arrow-left'}/>
                            </div>
                            <div className={classesR} onClick={onNext}>
                                <SvgIcon type={'slider-arrow-right'}/>
                            </div>
                        </div>
                        <div className="title-box">
                            <SvgIcon type={'building'}/>
                            <Text className={'subtitle'}>{'Apartments'}</Text>
                        </div>
                        <Paragraph className={'description'}>{'Large, high demand apartment complexes. \n' +
                        'Big buildings, big returns.'}</Paragraph>
                        <div className="btn-box">
                            <Button type={'primary'}>{'Join the Investors Club'}</Button>
                        </div>
                    </div>
                </div>
                <div className="section-divider">
                    <div className="stripe"/>
                </div>
            </div>

        </div>
    );
};

export default Specialization;
