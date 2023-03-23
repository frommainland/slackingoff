import React, { useRef, useEffect } from 'react'
import './Holidays.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Holidays = () => {
	const flipperRef = useRef(null)
	const holidayRef = useRef(null)

	useEffect(() => {
		const flipper = flipperRef.current
		const holiday = holidayRef.current
		gsap.to(flipper, {
			scale: 1,
			scrollTrigger: {
				trigger: holiday,
				start: 'top top',
				// end: () => `+=${window.innerHeight}`,
				end: () => `+=${holiday.offsetHeight - window.innerHeight}`,
				scrub: 1,
				pin: flipper,
				pinSpacing: false,
			},
		})
	}, [])

	// useEffect(() => {
	// 	const flipper = flipperRef.current
	// 	const holiday = holidayRef.current
	// 	gsap.to(flipper, {
	// 		scrollTrigger: {
	// 			trigger: holiday,
	// 			markers: true,
	// 			scrub: 1,
	// 			start: 'top top',
	// 			end: () => `+=${window.innerHeight * 2}`,
	// 			pin: flipper,
	// 		},
	// 	})
	// }, [])

	return (
		<div className="holidays">
			<div className="flipper-wrap">
				<div
					className="flipper"
					ref={flipperRef}
					style={{ backgroundImage: 'url(img/1.jpg)' }}
				/>
			</div>

			<div className="holidays-content" ref={holidayRef}>
				<section className="nationalday-wrap">
					<div className="nationalday">
						<h1 className="holiday-details">
							国庆假期9月29日至10月6日放假调休，共8天。
						</h1>
						<h1 className="timer-discription">离国庆假期还有</h1>
						<div className="timer-wrap">
							<h1>31</h1>
							<p>天</p>
						</div>
						<div className="caveat-wrap">
							<span>节后需要连上7天班。</span>
							<span>
								10月7日（星期六）、10月8日（星期日）上班
							</span>
						</div>
					</div>
				</section>
				<section className="nationalday-wrap">
					<div className="nationalday">
						<h1 className="holiday-details">
							国庆假期9月29日至10月6日放假调休，共8天。
						</h1>
						<h1 className="timer-discription">离国庆假期还有</h1>
						<div className="timer-wrap">
							<h1>12</h1>
							<p>天</p>
						</div>
						<div className="caveat-wrap">
							<span>节后需要连上7天班。</span>
							<span>
								10月7日（星期六）、10月8日（星期日）上班
							</span>
						</div>
					</div>
				</section>
				<section className="nationalday-wrap">
					<div className="nationalday">
						<h1 className="holiday-details">
							国庆假期9月29日至10月6日放假调休，共8天。
						</h1>
						<h1 className="timer-discription">离国庆假期还有</h1>
						<div className="timer-wrap">
							<h1>12</h1>
							<p>天</p>
						</div>
						<div className="caveat-wrap">
							<span>节后需要连上7天班。</span>
							<span>
								10月7日（星期六）、10月8日（星期日）上班
							</span>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Holidays
