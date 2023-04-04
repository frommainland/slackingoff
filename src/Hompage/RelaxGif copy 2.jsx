import React, { useRef, useEffect, useState, useLayoutEffect } from 'react'
import './RelaxGif.scss'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import useWindowSize from '../helper/hooks/useWindowSize'

const RelaxGif = () => {
	const size = useWindowSize()
	const { scrollY } = useScroll()
	const ref = useRef(null)
	const isInView = useInView(ref)
	const [elementTop, setElementTop] = useState(null)
	useLayoutEffect(() => {
		const element = ref.current
		// save our layout measurements in a function in order to trigger
		// it both on mount and on resize
		const onResize = () => {
			// use getBoundingClientRect instead of offsetTop in order to
			// get the offset relative to the viewport
			setElementTop(element.getBoundingClientRect().top)
		}
		onResize()

		window.addEventListener('scroll', onResize)
		return () => window.removeEventListener('scroll', onResize)
	}, [elementTop])

	// const [scrollPosition, setScrollPosition] = useState(0)
	// const handleScroll = () => {
	// 	const position = window.scrollY
	// 	console.log(`scrollPosition ${position}`)
	// 	setScrollPosition(position)
	// }

	// useEffect(() => {
	// 	window.addEventListener('scroll', handleScroll, { passive: true })

	// 	return () => {
	// 		window.removeEventListener('scroll', handleScroll)
	// 	}
	// }, [scrollPosition])

	// const y = useTransform(
	// 	scrollY,
	// 	[elementTop, elementTop + size.height],
	// 	[0, -1.2 * size.height]
	// )

	const y = useTransform(scrollY, [0, size.height], [0, -1.1 * size.height])

	return (
		<div className="relax-wrap">
			<motion.img
				className="gif1"
				src={require(`../images/relax/1.webp`)}
				alt=""
				ref={ref}
				style={{ y: y }}
			/>
			<img
				className="gif2"
				src={require(`../images/relax/2.webp`)}
				alt=""
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