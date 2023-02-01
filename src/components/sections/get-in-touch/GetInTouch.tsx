import {Button, Form, Input, Spin, Typography} from "antd";
import {GoogleMap, Marker, useLoadScript} from '@react-google-maps/api'
import mapStyles from './map-styles'
import './GetInTouch.scss'
import MarkerIcon from './images/marker.png'
import {useCallback, useRef} from "react";


const {Title} = Typography
const GetInTouch = () => {
    const mapRef = useRef<google.maps.Map>()
    const onMapLoad = useCallback((map: google.maps.Map) => {
        mapRef.current = map
    }, [])

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.WEBSITE_GOOGLE_MAPS_API_KEY as string,
    })
    console.log('WEBSITE_GOOGLE_MAPS_API_KEY: ',import.meta.env.WEBSITE_GOOGLE_MAPS_API_KEY);
    const defaultCenter = {lng: -104.818130, lat: 39.595553}


    const markerPosition = {lng: -104.818130, lat: 39.595553}

    const containerStyle = {
        width: '100%',
        height: '100%',
    }
    const options = {
        disableDefaultUI: true,
        fullscreenControl: true,
        zoomControl: false,
        styles: mapStyles,
    }
    const markerOptions = {
        draggable: true,
    }
    const onFinish = (values: any) => {
        console.log(values);
    }
    return (
        <div className={'get-in-touch'}>
            <div className="in-touch-grid">
                <Form onFinish={onFinish} layout={'vertical'} autoComplete={'off'} className={'in-touch-form'}>
                    <div className="title-box">
                        <div className="red-square"/>
                        <Title level={3}>{'Get in touch'}</Title>
                    </div>

                    <Form.Item name={"name"} className={'form-item-container'} required={true} rules={[
                        { required: true, message: 'This field is required' },
                        { message: 'Name should contain at least 3 characters', pattern: /^([0-9]*[a-zA-Z]){3,}[0-9]*$/ },
                    ]}>
                        <Input placeholder={'Name*'} bordered={false}/>
                    </Form.Item>
                    <Form.Item name={'email'} className={'form-item-container'} required={true} rules={[
                        { required: true, message: 'This field is required' },
                        { message: 'Incorrect email', pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/ },
                    ]}>
                        <Input placeholder={'Email*'} bordered={false}/>
                    </Form.Item>
                    <Form.Item name={'message'} className={'form-item-container'} required={true}>
                        <Input.TextArea  placeholder={'Message'}  autoSize={true} bordered={false}/>
                    </Form.Item>
                    <div className="btn-container">
                        <Button type={'primary'} htmlType={'submit'}>{'Send'}</Button>
                    </div>
                </Form>
                {isLoaded &&(
                    <div className="map-wrapper">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={8}
                            options={options}
                            onLoad={onMapLoad}
                        >
                            <Marker
                                position={markerPosition}
                                options={markerOptions}
                                icon={{
                                    url: MarkerIcon,
                                    scale: 2,
                                }}
                            />
                        </GoogleMap>
                    </div>
                )}
                {loadError && (
                    <div className={'map-error-container'}>
                        <Spin />
                        <p>{'Map can not be loaded...'}</p>
                    </div>
                )}

            </div>

        </div>
    );
};

export default GetInTouch;
