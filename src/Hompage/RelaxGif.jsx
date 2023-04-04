import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import './RelaxGif.scss'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import useWindowSize from '../helper/hooks/useWindowSize'

const Img = ({ index, speed }) => {
	const size = useWindowSize()
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })
	const y = useTransform(scrollYProgress, [0, 1], [0, size.height * speed])
	return (
		<motion.img
			className={`gif${index + 1}`}
			src={require(`../images/relax/${index + 1}.webp`)}
			ref={ref}
			style={{ y: y }}
			drag="x"
		/>
	)
}

const RelaxGif = () => {
	const size = useWindowSize()
	const ref = useRef(null)
	const { scrollYProgress } = useScroll({ target: ref })

	const y = useTransform(scrollYProgress, [0, 1], [0, size.height * 0.2])
	const speedArray = [0.2, 0.1, 0.01, 0.3, 0.02, 0.2]
	return (
		<div className="relax-wrap">
			{speedArray.map((value, index) => {
				return <Img speed={value} key={index} index={index} />
			})}
		</div>
	)
}
export default RelaxGif
