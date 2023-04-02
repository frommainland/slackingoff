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
const topMarker = 1.75

const brightFactor = 20

const MoonItem = ({ item, index, targetDay, totalItem, moonAllRef }) => {
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
		const scaleTopStart =
			(window.innerHeight -
				(board.offsetHeight +
					(topMarker * (totalItem - 1) * window.innerHeight) / 100)) /
				2 +
			(index * topMarker * window.innerHeight * Math.sin(index / 5)) / 100

		gsap.to(board, {
			scrollTrigger: {
				trigger: boardWrap,
				pin: board,
				pinSpacing: false,
				scrub: 1,
				// start: `top ${topMarker * index}% + ${scaleTopStart}px `,
				start: `top ${scaleTopStart}px `,
				// end: () => `+=${window.innerHeight * 0.8 * (5 - index)}`,
				endTrigger: moonAllRef.current,
				end: 'bottom center',
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
			// filter: `brightness(${(totalItem - 1 + index) * 7}%)`,
			filter: `brightness(${
				100 - (totalItem - 1 - index) * brightFactor
			}%)`,
			scrollTrigger: {
				trigger: boardWrap,
				scrub: 1,
				start: 'top top',
				end: () => `+=${window.innerHeight * 0.8}`,
			},
		})
		gsap.to(moonRef.current, {
			scale: 0.85,
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
