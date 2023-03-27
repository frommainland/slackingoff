import React, { useRef, useEffect, useState } from 'react'
import './Holidays.scss'
import { motion, useInView } from 'framer-motion'
import differenceInDays from 'date-fns/differenceInDays'
import nextSaturday from 'date-fns/nextSaturday'
import nextSunday from 'date-fns/nextSunday'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const NextSat = () => {
	const currentTime = new Date()
	let nextSat = nextSaturday(new Date(currentTime))
	const diffIndays = differenceInDays(
		new Date(nextSat),
		new Date(currentTime)
	)
    const ref = useRef(null)
    const isInView = useInView(ref)
	return (
		<section className="nationalday-wrap" ref={ref}>
			<div className="nationalday">
				<h1 className="timer-discription">离周末双休还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
			</div>
		</section>
	)
}

const NextSun = () => {
	const currentTime = new Date()
	let nextSun = nextSunday(new Date(currentTime))
	const diffIndays = differenceInDays(
		new Date(nextSun),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="timer-discription">离周末单休还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
			</div>
		</section>
	)
}

const QingmingDay = () => {
	const currentTime = new Date()
	const diffIndays = differenceInDays(
		new Date(2023, 4, 5),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">清明假期4月5日放假，共1天。</h1>
				<h1 className="timer-discription">离清明假期还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
			</div>
		</section>
	)
}

const LaborDay = () => {
	const currentTime = new Date()
	const diffIndays = differenceInDays(
		new Date(2023, 5, 1),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					劳动节假期4月29日至5月3日放假调休，共5天。
				</h1>
				<h1 className="timer-discription">离劳动节假期还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
				<div className="caveat-wrap">
					<span>节前，节后都需要连上6天班。</span>
					<span>4月23日（星期日）、5月6日（星期六）上班。</span>
				</div>
			</div>
		</section>
	)
}
const DragonBoatDay = () => {
	const currentTime = new Date()
	const diffIndays = differenceInDays(
		new Date(2023, 6, 22),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					端午节假期6月22日至24日放假调休，共3天。
				</h1>
				<h1 className="timer-discription">离端午节假期还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
				<div className="caveat-wrap">
					<span>6月25日（星期日）上班。</span>
				</div>
			</div>
		</section>
	)
}

const NationalDay = () => {
	const currentTime = new Date()
	const diffIndays = differenceInDays(
		new Date(2023, 9, 29),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					国庆假期9月29日至10月6日放假调休，共8天。
				</h1>
				<h1 className="timer-discription">离国庆假期还有</h1>
				<div className="timer-wrap">
					<h1>{diffIndays}</h1>
					<p>天</p>
				</div>
				<div className="caveat-wrap">
					<span>节后需要连上7天班。</span>
					<span>10月7日（星期六）、10月8日（星期日）上班</span>
				</div>
			</div>
		</section>
	)
}

const Holidays = () => {
	const flipperRef = useRef(null)
	const cardRef = useRef(null)
	const holidayRef = useRef(null)
	const [bgImg, setBgImg] = useState('1.jpg')

	useEffect(() => {
		const flipper = flipperRef.current
		const holiday = holidayRef.current
		const card = cardRef.current
		gsap.to(card, {
			rotationX: 360,
			ease: 'none',
			scrollTrigger: {
				trigger: holiday,
				start: 'top top',
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				scrub: true,
			},
		})

		gsap.to(flipper, {
			scrollTrigger: {
				trigger: holiday,
				start: 'top top',
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				scrub: true,
				pin: flipper,
				pinSpacing: false,
			},
		})

		// let distanceScrollY = holiday.getBoundingClientRect().top
		// gsap.to(flipper, {
		// 	scrollTrigger: {
		// 		scrub: true,
		// 		trigger: holiday,
		// 		start: 'top top',
		// 		end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
		// 		onUpdate: () => {
		// 			if (distanceScrollY == 200) {
		// 				setBgImg('2.jpg')
		// 			}
		// 			console.log(distanceScrollY)
		// 		},
		// 	},
		// })

	}, [])
	// window.scrollY
	// window.pageYOffset
	// holiday.getBoundingClientRect().top

    const [NextSatInview, setNextSatInview] = useState(false)

	return (
		<div className="holidays">
			<div className="flip-card-flex">
				<div className="flip-card" ref={flipperRef}>
					<div className="inner" ref={cardRef}>
						<div
							className="front"
							style={{ background: `url(./img/${bgImg})` }}
						>
							{/* <img src="" alt="" /> */}
						</div>
						<div
							className="back"
							style={{ background: 'url(./img/2.jpg)' }}
						>
							{/* <img src="" alt="" /> */}
						</div>
					</div>
				</div>
			</div>

			<div className="holidays-content" ref={holidayRef}>
				<NextSun />
				<NextSat />
				<QingmingDay />
				{/* <LaborDay />
				<DragonBoatDay />
				<NationalDay /> */}
			</div>
		</div>
	)
}

export default Holidays
