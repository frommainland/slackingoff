import React, { useState, useEffect, useRef } from 'react'
import './Moon.scss'
import addMonths from 'date-fns/addMonths'
import setDate from 'date-fns/setDate'
import differenceInDays from 'date-fns/differenceInDays'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const calcDate = (targetDay) => {
	const currentTime = new Date()
	const targetDayThisMonth = setDate(currentTime, targetDay)
	const targetDayNextMonth = addMonths(targetDayThisMonth, 1)

	let dayDiff =
		differenceInDays(targetDayThisMonth, currentTime) >= 0
			? differenceInDays(targetDayThisMonth, currentTime)
			: differenceInDays(targetDayNextMonth, currentTime)

	return dayDiff
}

const scaleBase = 0.5
const scaleFactor = 0.1
const topMarker = 2.5

const MoonItem = ({ item, index, targetDay, totalItem }) => {
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	const boardWrapRef = useRef(null)
	const boardRef = useRef(null)
	const moonRef = useRef(null)
	const contentRef = useRef(null)
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scrollTrigger: {
				trigger: boardWrap,
				pin: board,
				pinSpacing: false,
				scrub: 1,
				start: `top ${topMarker * index}% `,
				end: () => `+=${window.innerHeight * 0.8 * (5 - index)}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.set(board, {
			filter: 'brightness(100%)',
		})
		gsap.to(board, {
			scale: scaleBase + scaleFactor * index,
			filter: `brightness(${(totalItem - 1 + index) * 10}%)`,
			scrollTrigger: {
				trigger: boardWrap,
				scrub: 1,
				start: 'top top',
				end: () => `+=${window.innerHeight * 0.8}`,
			},
		})
		gsap.to(moonRef.current, {
			scale: 0.7,
			scrollTrigger: {
				trigger: boardWrap,
				scrub: 1,
				start: 'top top',
				end: () => `+=${window.innerHeight * 0.8}`,
			},
		})
	}, [])

	return (
		<section className="board-wrap" ref={boardWrapRef}>
			<div className="board" ref={boardRef}>
				<div className={`moon phase${item}`} ref={moonRef}></div>
				<div className="board-content" ref={contentRef}>
					<p className="salary-discription">
						离{targetDay}号发工资还有
					</p>
					<div className="timer-wrap">
						<h1>{dayDiff}</h1>
						<p>天</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default MoonItem
