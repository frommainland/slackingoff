import './FooterButton.scss'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const FooterButton = ({ text, link }) => {
	return (
		<motion.button
			whileHover={{ backgroundColor: 'white', color: '#191816' }}
		>
			<Link to={link}>{text}</Link>
		</motion.button>
	)
}

export default FooterButton
