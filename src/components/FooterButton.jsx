import './FooterButton.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { smooth } from '../helper/easing'

const transition = { duration: 0.5, ease: smooth }
const FooterButton = ({ text, link }) => {
	return (
		<motion.button
			exit={{
				opacity: 0,
				trannsition: {
					transition,
				},
			}}
			whileHover={{ backgroundColor: 'white', color: '#191816' }}
		>
			<Link to={link}>{text}</Link>
		</motion.button>
	)
}

export default FooterButton
