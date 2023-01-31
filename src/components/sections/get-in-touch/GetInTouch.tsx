import {Button, Form, Input, Typography} from "antd";
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
    const defaultCenter = {lng: 22.920048, lat: -32.010987}
    const markerPosition = {lng: 22.920048, lat: -32.010987}

    const containerStyle = {
        width: '100%',
        height: '400px',
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
    return (
        <div className={'get-in-touch'}>
            <div className="in-touch-grid">
                <Form layout={'vertical'} autoComplete={'off'} className={'in-touch-form'}>
                    <div className="red-square"/>
                    <Title level={3}>{'Get in touch'}</Title>
                    <Form.Item className={'form-item-container'}>
                        <Input placeholder={'Name'}/>
                    </Form.Item>
                    <Form.Item className={'form-item-container'}>
                        <Input placeholder={'Email'}/>
                    </Form.Item>
                    <Form.Item className={'form-item-container'}>
                        <Input.TextArea placeholder={'Message'}/>
                    </Form.Item>
                    <div className="btn-container">
                        <Button type={'primary'}>{'Send'}</Button>
                    </div>
                </Form>
                {isLoaded &&(
                    <div className="map-wrapper">
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={6}
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

            </div>

        </div>
    );
};

export default GetInTouch;
