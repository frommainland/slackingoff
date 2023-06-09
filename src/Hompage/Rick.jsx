import React, { useLayoutEffect, useRef, useState } from 'react'
import './Rick.scss'
import { motion } from 'framer-motion'

const ALink = ({ text, link }) => {
	const [divSize, setDivSize] = useState({ width: 0, height: 0 })
	const ref = useRef(null)
	const getSize = () => {
		setDivSize({
			width: ref.current.offsetWidth,
			height: ref.current.offsetHeight,
		})
	}
	useLayoutEffect(() => {
		getSize()
		window.addEventListener('resize', getSize)
		return () => window.removeEventListener('resize', getSize)
	}, [])

	return (
		<motion.a
			id="a-link"
			href={link}
			ref={ref}
			whileHover={{
				width: divSize.width * 1.2,
				height: divSize.height * 1.2,
				backgroundColor: '#FBCBCB',
				color: '#191816',
			}}
		>
			{text}
		</motion.a>
	)
}

const Rick = () => {
	return (
		<div className="rick-video">
			<video controls>
				<source src={require(`../video/rick.mp4`)} type="video/webm" />
			</video>
			<ALink
				text="Rick Rubin's stripped down approach to making music"
				link="https://www.cbsnews.com/news/rick-rubin-anderson-cooper-60-minutes-interview-2023-01-15/"
			/>
		</div>
	)
}

export default Rick
