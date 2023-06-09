import React, { useRef, useEffect, useState } from 'react'
import './Holidays.scss'
import { motion, useInView } from 'framer-motion'
import differenceInDays from 'date-fns/differenceInDays'
import nextSaturday from 'date-fns/nextSaturday'
import nextSunday from 'date-fns/nextSunday'
import format from 'date-fns/format'
import zhCN from 'date-fns/locale/zh-CN'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const NextSat = () => {
	const currentTime = new Date()
	let nextSat = format(nextSaturday(new Date(currentTime)), 'PPP', {
		locale: zhCN,
	})

	const diffIndays = differenceInDays(
		new Date(nextSaturday(new Date(currentTime))),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					{`最近的周六是${nextSat}`}。
				</h1>
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
	let nextSun = format(nextSunday(new Date(currentTime)), 'PPP', {
		locale: zhCN,
	})
	const diffIndays = differenceInDays(
		new Date(nextSunday(new Date(currentTime))),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					{`最近的周日是${nextSun}`}。
				</h1>
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
		new Date(2023, 3, 5),
		new Date(currentTime)
	)

	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					清明假期2023年4月5日放假，共1天。
				</h1>
				<h1 className="timer-discription">离清明假期还有</h1>
				<div className="timer-wrap">
					<h1 className={`${diffIndays >= 0 ? 'kerozene' : 'cn206'}`}>
						{diffIndays >= 0 ? diffIndays : '已过完'}
					</h1>
					<p>{diffIndays >= 0 ? '天' : null}</p>
				</div>
			</div>
		</section>
	)
}

const LaborDay = () => {
	const currentTime = new Date()
	const diffIndays = differenceInDays(
		new Date(2023, 4, 1),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					劳动节假期2023年4月29日至5月3日放假调休，共5天。
				</h1>
				<h1 className="timer-discription">离劳动节假期还有</h1>
				<div className="timer-wrap">
					<h1 className={`${diffIndays >= 0 ? 'kerozene' : 'cn206'}`}>
						{diffIndays >= 0 ? diffIndays : '已过完'}
					</h1>
					<p>{diffIndays >= 0 ? '天' : null}</p>
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
		new Date(2023, 5, 22),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					端午节假期2023年6月22日至24日放假调休，共3天。
				</h1>
				<h1 className="timer-discription">离端午节假期还有</h1>
				<div className="timer-wrap">
					<h1 className={`${diffIndays >= 0 ? 'kerozene' : 'cn206'}`}>
						{diffIndays >= 0 ? diffIndays : '已过完'}
					</h1>
					<p>{diffIndays >= 0 ? '天' : null}</p>
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
		new Date(2023, 8, 29),
		new Date(currentTime)
	)
	return (
		<section className="nationalday-wrap">
			<div className="nationalday">
				<h1 className="holiday-details">
					国庆假期2023年9月29日至10月6日放假调休，共8天。
				</h1>
				<h1 className="timer-discription">离国庆假期还有</h1>
				<div className="timer-wrap">
					<h1 className={`${diffIndays >= 0 ? 'kerozene' : 'cn206'}`}>
						{diffIndays >= 0 ? diffIndays : '已过完'}
					</h1>
					<p>{diffIndays >= 0 ? '天' : null}</p>
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
	const shimmerRef = useRef(null)
	const shimmerRef2 = useRef(null)
	const [frontBgImg, setFrontBgImg] = useState('1.jpg')
	const [backBgImg, setBackBgImg] = useState('2.jpg')

	useEffect(() => {
		const flipper = flipperRef.current
		const holiday = holidayRef.current
		const card = cardRef.current
		const shimmer = shimmerRef.current
		const shimmer2 = shimmerRef2.current

		gsap.to(shimmer, {
			backgroundPositionX: '500%',
			scrollTrigger: {
				trigger: holiday,
				start: 'top top',
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				scrub: true,
			},
		})
		gsap.to(shimmer2, {
			backgroundPositionX: '500%',
			scrollTrigger: {
				trigger: holiday,
				start: 'top top',
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				scrub: true,
			},
		})

		gsap.to(card, {
			rotationX: -180 * 5,
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

		gsap.to(flipper, {
			scrollTrigger: {
				scrub: true,
				trigger: holiday,
				start: 'top top',
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				onUpdate: () => {
					let distanceScrollY = Math.abs(
						holiday.getBoundingClientRect().top
					)
					if (distanceScrollY < window.innerHeight) {
						setFrontBgImg('1.webp')
					} else if (
						distanceScrollY > window.innerHeight &&
						distanceScrollY < window.innerHeight * 2.9
					) {
						setFrontBgImg('3.webp')
					} else if (
						distanceScrollY > window.innerHeight * 3 &&
						distanceScrollY < window.innerHeight * 3.5
					) {
						setFrontBgImg('5.webp')
					}

					if (distanceScrollY < window.innerHeight * 2) {
						setBackBgImg('2.webp')
					} else if (
						distanceScrollY > window.innerHeight * 2 &&
						distanceScrollY < window.innerHeight * 3.9
					) {
						setBackBgImg('4.webp')
					} else if (
						distanceScrollY > window.innerHeight * 4 &&
						distanceScrollY < window.innerHeight * 4.5
					) {
						setBackBgImg('6.webp')
					}
				},
			},
		})
	}, [])
	// window.scrollY
	// window.pageYOffset
	// holiday.getBoundingClientRect().top

	return (
		<div className="holidays">
			<div className="flip-card-flex">
				<div className="flip-card" ref={flipperRef}>
					<div className="inner" ref={cardRef}>
						<div
							className="front"
							style={{
								backgroundImage: `url(./img/${frontBgImg})`,
							}}
						>
							<div className="shimmer" ref={shimmerRef}></div>
						</div>
						<div
							className="back"
							style={{
								backgroundImage: `url(./img/${backBgImg})`,
							}}
						>
							<div className="shimmer" ref={shimmerRef2}></div>
						</div>
					</div>
				</div>
			</div>

			<div className="holidays-content" ref={holidayRef}>
				<NextSun />
				<NextSat />
				<QingmingDay />
				<LaborDay />
				<DragonBoatDay />
				<NationalDay />
			</div>
		</div>
	)
}

export default Holidays
