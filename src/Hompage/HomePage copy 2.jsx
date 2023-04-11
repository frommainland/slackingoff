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

const transition = { duration: 0.5, ease: smooth }

const HomePage = () => {
	return (
		<motion.main
			id="home-page"
			// initial={{ opacity: 0 }}
			// animate={{ opacity: 1 }}
			// exit={{ opacity: 0 }}
			// transition={transition}
		>
			<Top />
			{/* <Manifesto />
				<Holidays />
				<Moon />
				<BreakTime p1="现在是" p2="摸鱼时间" p3="专心摸鱼，停止打工" />
				<RelaxGif />
				<BreakTime p1="摸鱼重要的是" p3="心态，心态和心态" /> */}
			<Rick />
			<Footer>
				<FooterButton text="☻ 关于网站 ☻" link="/about" />
			</Footer>
		</motion.main>
	)
}

export default HomePage
