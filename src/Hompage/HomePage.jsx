import React, { useState, useEffect } from 'react'
import './HomePage.scss'
import Top from './Top'
import Manifesto from './Manifesto'
import Holidays from './Holidays'
import Moon from './Moon'
import BreakTime from './BreakTime'
import RelaxGif from './RelaxGif'
import Rick from './Rick'
import Footer from '../components/Footer'
import FooterButton from '../components/FooterButton'
import { motion } from 'framer-motion'
import { smooth } from '../helper/easing'
import LogoSvg from '../components/LogoSvg'
import { Link } from 'react-router-dom'
import LogoStart from './LogoStart'

const transition = { duration: 1, ease: smooth }

const HomePage = () => {
	return (
		<>
			<LogoStart />
			<motion.main id="home-page">
				{/* logo + 线 */}
				{/* <motion.div exit={{ opacity: 0 }}> */}

				{/* </motion.div> */}

				{/* 时间天气 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 1, delay: 1.5 },
					}}
					exit={{ opacity: 0 }}
				>
					<Top />
				</motion.div>

				{/* 其他组件 */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { duration: 1, delay: 1 },
					}}
					exit={{ opacity: 0 }}
				>
					{/* <Manifesto />
				<Holidays />
				<Moon />
				<BreakTime p1="现在是" p2="摸鱼时间" p3="专心摸鱼，停止打工" />
				<RelaxGif />
				<BreakTime p1="摸鱼重要的是" p3="心态，心态和心态" /> */}
					<Rick />
				</motion.div>
			</motion.main>
			<div className="footer-wrap">
				<LogoSvg />
				{/* <motion.button
					exit={{
						opacity: 1,
						trannsition: {
							transition,
						},
					}}
					whileHover={{
						backgroundColor: '#FFFFFF',
						color: '#191816',
					}}
				>
					<Link to="/about">☻&nbsp;关于网站&nbsp;☻</Link>
				</motion.button> */}
				<FooterButton text="☻&nbsp;关于网站&nbsp;☻" link="/about" />
			</div>
		</>
	)
}

export default HomePage
