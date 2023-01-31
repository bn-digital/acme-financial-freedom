import React, {FC} from 'react';
import './Team.scss'
import {Typography} from "antd";
import image01 from './images/photo01.png'
import image02 from './images/photo02.png'
import teamFrame from './images/team-frame.png'
import TeamMemberCard, {TeamCard} from "../../team-member-card/TeamMemberCard";

const {Title, Paragraph} = Typography



const Team = () => {

    const teamArray:TeamCard[] = [
        {
            key: '1',
            name: 'Josh Jordan',
            image: image01,
            attributes: ['Partner', 'Investor','Enthusiast'],
            twitterLink: 'https://twitter.com/?lang=en',
            linkedInLink: 'https://www.linkedin.com/',
            facebookLink: 'https://www.facebook.com/',
        },
        {
            key: '1',
            name: 'Wilson Kahlmus',
            image: image02,
            attributes: ['Partner', 'Investor','Enthusiast'],
            twitterLink: 'https://twitter.com/?lang=en',
            linkedInLink: 'https://www.linkedin.com/',
            facebookLink: 'https://www.facebook.com/',
        }
    ]
    return (
        <div className={'team'}>
            <div className="container">
                <div className="team-grid">
                    <div className="title-box">
                    <Title level={3} >{'Expert Team'}</Title>
                        <div className="frame-wrapper">
                            <img src={teamFrame} alt=""/>
                        </div>
                    </div>
                    <div className="main-content">
                        <Paragraph className={'content-text'}>{'We are a group of passionate and reliable partners. Get to know the people leading the way at the Summit.'}</Paragraph>
                        <div className="team-card-grid">
                            {teamArray.map((it) => (
                                <TeamMemberCard it={it}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Team;
