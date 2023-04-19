import './FooterButton.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { smooth } from '../helper/easing'

import { footerLogoTopPosAtom } from '../components/LogoSvg'

import { atom, useAtom } from 'jotai'

export const footerButtonClickAtom = atom(0)

const transition = { duration: 0.5, ease: smooth }
const FooterButton = ({ text, link }) => {
	const [top] = useAtom(footerLogoTopPosAtom)
	const [buttonClickTop, setButtonClickTop] = useAtom(footerButtonClickAtom)

	function clickHandle() {
		setButtonClickTop(top)
		console.log('buttonClickTop' + buttonClickTop)
	}

	return (
		<motion.button
			initial={{ opacity: 1 }}
			exit={{
				opacity: 0,
				trannsition: {
					transition,
				},
			}}
			whileHover={{
				backgroundColor: 'rgba(255,255,255,100)',
				color: '#191816',
			}}
			onClick={clickHandle}
		>
			<Link to={link}>{text}</Link>
		</motion.button>
	)
}

export default FooterButton
