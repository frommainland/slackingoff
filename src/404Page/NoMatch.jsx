import React from 'react'
import './NoMatch.scss'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { smooth } from '../helper/easing'

const transition = { duration: 0.5, ease: smooth }

const NoMatch = () => {
	return (
		<motion.div
			className="page-404"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<motion.div
				className="tea-break"
				exit={{ scale: 0 }}
				transition={transition}
			>
				<img
					src={require('../images/tea-break.jpg')}
					alt="tea break time"
				/>
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
				>
					<Link to="/">☻&nbsp;返回首页&nbsp;☻</Link>
				</motion.button>
			</motion.div>
			<motion.div
				class="container"
				exit={{ opacity: 0 }}
				transition={transition}
			>
				<div class="scrolling">
					☻&nbsp;找不到这个页面，饮茶先。找不到这个页面，饮茶先。&nbsp;
				</div>
				<div class="scrolling" aria-hidden="true">
					☻&nbsp;找不到这个页面，饮茶先。找不到这个页面，饮茶先。&nbsp;
				</div>
				<div class="scrolling" aria-hidden="true">
					☻&nbsp;找不到这个页面，饮茶先。找不到这个页面，饮茶先。&nbsp;
				</div>
				<div class="scrolling" aria-hidden="true">
					☻&nbsp;找不到这个页面，饮茶先。找不到这个页面，饮茶先。&nbsp;
				</div>
			</motion.div>
		</motion.div>
	)
}

export default NoMatch
