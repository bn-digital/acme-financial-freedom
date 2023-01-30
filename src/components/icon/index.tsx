import {FC, SVGProps} from 'react'
import {ReactComponent as CloseModal} from './images/close-modal.svg'
import {ReactComponent as ArrowRight} from './images/arrow-right.svg'
import {ReactComponent as Phone} from './images/phone.svg'
import {ReactComponent as ArrowScroll} from './images/arrow-scroll-down.svg'
import {ReactComponent as Meeting} from './images/meeting.svg'

export type IconTypes =
  | 'close-modal'
  | 'arrow-right'
  | 'phone'
  | 'arrow-scroll'
  | 'meeting'

const icons: { [key: string]: FC<SVGProps<SVGSVGElement>> } = {
  'close-modal': CloseModal,
  'arrow-right': ArrowRight,
  'phone': Phone,
  'arrow-scroll': ArrowScroll,
  'meeting': Meeting,
} as const

type SvgIconProps = SVGProps<SVGSVGElement> & { type: IconTypes }

const SvgIcon: FC<SvgIconProps> = ({ type, ...svgProps }) => {
  const Icon = icons[type] ?? null
  return Icon && <Icon {...svgProps} />
}

export { SvgIcon }
