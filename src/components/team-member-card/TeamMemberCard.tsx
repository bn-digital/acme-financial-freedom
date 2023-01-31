import React, {FC} from 'react';
import {Typography} from "antd";
import {SvgIcon} from "../icon";
import './TeamMemberCard.scss'

export type TeamCard = {
    key: string,
    name: string,
    image: string,
    attributes: string[],
    twitterLink: string,
    linkedInLink: string,
    facebookLink: string,
}
const {Text} = Typography
const TeamMemberCard:FC<{it: TeamCard }> = ({it}) => (
    <div className={'team-member-card'}>
        <div className="image-wrapper">
            <img src={it.image} alt=""/>
        </div>
        <Text className={'member-name'}>{it?.name}</Text>
        <div className="attributes-wrapper">
            {it?.attributes?.map(attr =>(
                <span className={'attr-item'}>{attr}</span>
            ))}
        </div>
        <div className="soc-block">
            <a href={it?.twitterLink} target={'_blank'}>
                <SvgIcon type={'twitter'}/>
            </a>
            <a href={it?.linkedInLink} target={'_blank'}>
                <SvgIcon type={'linkedIn'}/>
            </a>
            <a href={it?.facebookLink} target={'_blank'}>
                <SvgIcon type={'facebook'}/>
            </a>
        </div>

    </div>
)

export default TeamMemberCard;
