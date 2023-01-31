import {FC, SVGProps} from 'react'
import {ReactComponent as CloseModal} from './images/close-modal.svg'
import {ReactComponent as ArrowRight} from './images/arrow-right.svg'
import {ReactComponent as Phone} from './images/phone.svg'
import {ReactComponent as ArrowScroll} from './images/arrow-scroll-down.svg'
import {ReactComponent as Meeting} from './images/meeting.svg'
import {ReactComponent as Building} from './images/building.svg'
import {ReactComponent as SliderArrowLeft} from './images/slider-arrow-left.svg'
import {ReactComponent as SliderArrowRight} from './images/slider-arrow-right.svg'
import {ReactComponent as SmallArrowRight} from './images/smallArrowRight.svg'
import {ReactComponent as Twitter} from './images/twitter.svg'
import {ReactComponent as Facebook} from './images/facebook.svg'
import {ReactComponent as LinkedIn} from './images/linkedIn.svg'

export type IconTypes =
    | 'close-modal'
    | 'arrow-right'
    | 'phone'
    | 'arrow-scroll'
    | 'meeting'
    | 'building'
    | 'slider-arrow-left'
    | 'slider-arrow-right'
    | 'small-arrow-right'
    | 'facebook'
    | 'linkedIn'
    | 'twitter'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
    'close-modal': CloseModal,
    'arrow-right': ArrowRight,
    'phone': Phone,
    'arrow-scroll': ArrowScroll,
    'meeting': Meeting,
    'building': Building,
    'slider-arrow-left': SliderArrowLeft,
    'slider-arrow-right': SliderArrowRight,
    'small-arrow-right': SmallArrowRight,
    'facebook': Facebook,
    'linkedIn': LinkedIn,
    'twitter': Twitter,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({type, ...svgProps}) => {
    const Icon = icons[type] ?? null
    return Icon && <Icon {...svgProps} />
}

export {SvgIcon}
