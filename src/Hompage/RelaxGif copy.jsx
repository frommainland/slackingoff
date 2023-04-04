import React, { useRef, useEffect, useState } from 'react'
import './RelaxGif.scss'
import useWindowSize from '../helper/hooks/useWindowSize'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const RelaxGif = () => {
	const size = useWindowSize()
	const speed = 0.5
	const { scrollY } = useScroll()

	const ref = useRef(null)
	const isInView = useInView(ref)
	const y = useTransform(scrollY, [100, 200], [0, 500])

	return (
		<div className="relax-wrap">
			<motion.img
				className="gif1"
				src={require(`../images/relax/1.webp`)}
				alt=""
				ref={ref}
				// whileInView={{ scale: scale }
				style={{ scale: isInView ? scale : 1 }}
			/>
			<motion.img
				className="gif2"
				src={require(`../images/relax/2.webp`)}
				alt=""
				// whileInView={{ y: y }}
			/>
			<img
				className="gif3"
				src={require(`../images/relax/3.webp`)}
				alt=""
			/>
			<img
				className="gif4"
				src={require(`../images/relax/4.webp`)}
				alt=""
			/>
			<img
				className="gif5"
				src={require(`../images/relax/5.webp`)}
				alt=""
			/>
			<img
				className="gif6"
				src={require(`../images/relax/6.webp`)}
				alt=""
			/>
		</div>
	)
}
export default RelaxGif
