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

const Moon5 = () => {
	const targetDay = 5
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	const boardWrapRef = useRef(null)
	const boardRef = useRef(null)
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scrollTrigger: {
				trigger: boardWrap,
				pin: board,
				pinSpacing: false,
				scrub: 1,
				start: 'top top',
				end: () => `+=${window.innerHeight * 0.8 * 5}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scale: 0.8,
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
				<div className="moon phase5"></div>
				<div className="board-content">
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

const Moon10 = () => {
	const targetDay = 10
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	return (
		<section className="board-wrap">
			<div className="board">
				<div className="moon phase10"></div>
				<div className="board-content">
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

const Moon12 = () => {
	const targetDay = 12
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	return (
		<section className="board-wrap">
			<div className="board">
				<div className="moon phase12"></div>
				<div className="board-content">
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

const Moon15 = () => {
	const targetDay = 15
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	return (
		<section className="board-wrap">
			<div className="board">
				<div className="moon phase15"></div>
				<div className="board-content">
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

const Moon25 = () => {
	const targetDay = 25
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	return (
		<section className="board-wrap">
			<div className="board">
				<div className="moon phase25"></div>
				<div className="board-content">
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

const Moon30 = () => {
	const targetDay = 30
	const [dayDiff, setDayDiff] = useState(null)
	useEffect(() => {
		setDayDiff(calcDate(targetDay))
	}, [])

	return (
		<section className="board-wrap">
			<div className="board">
				<div className="moon phase30"></div>
				<div className="board-content">
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

const Moon = () => {
	return (
		<div>
			<Moon5 />
			<Moon10 />
			<Moon12 />
			<Moon15 />
			<Moon25 />
			<Moon30 />
		</div>
	)
}

export default Moon
