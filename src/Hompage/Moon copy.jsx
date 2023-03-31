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
//月亮卡总数
const totalItem = 6



const Moon5 = () => {
	const index = 0
	const targetDay = 5
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
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
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
			<div className="board board1" ref={boardRef}>
				<div className="moon phase5" ref={moonRef}></div>
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

const Moon10 = () => {
	const index = 1
	const targetDay = 10
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
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
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
			<div className="board board1" ref={boardRef}>
				<div className="moon phase10" ref={moonRef}></div>
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

const Moon12 = () => {
	const index = 2
	const targetDay = 12
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
				start: `top ${topMarker * index}% `,
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scale: scaleBase + scaleFactor * index,
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
	const index = 3
	const targetDay = 15
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
				start: `top ${topMarker * index}% `,
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scale: scaleBase + scaleFactor * index,
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
	const index = 4
	const targetDay = 25
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
				start: `top ${topMarker * index}% `,
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scale: scaleBase + scaleFactor * index,
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
	const index = 5
	const targetDay = 30
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
				start: `top ${topMarker * index}% `,
				end: () => `+=${window.innerHeight * 0.8 * (6 - index)}`,
			},
		})
	}, [])
	useEffect(() => {
		const boardWrap = boardWrapRef.current
		const board = boardRef.current
		gsap.to(board, {
			scale: scaleBase + scaleFactor * index,
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
	// const ref = useRef(null)
	// useEffect(() => {
	// 	const arr = gsap.utils.toArray(ref.current)
	// 	// console.log(arr)
	// 	arr.forEach((title, index) => {
	// 		let boardEl = title.querySelector(`.board${index - 1}`)
	// 		console.log(boardEl)
	// 		gsap.to(boardEl, {
	// 			scale: 1 - 0.1 * index,
	// 			scrollTrigger: {
	// 				trigger: title,
	// 				start: 'top top',
	// 				end: 'bottom top',
	// 				scrub: 1,
	// 			},
	// 		})
	// 	})
	// }, [])

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
