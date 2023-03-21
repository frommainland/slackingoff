import React, { useRef, useEffect } from 'react'
import './Holidays.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const Holidays = () => {
	const flipperRef = useRef(null)
	const triggerEl = useRef(null)
	useEffect(() => {
		const flipper = flipperRef.current
		const trigger = triggerEl.current
		gsap.fromTo(
			flipper,
			{ rotation: 0 },
			{
				rotation: 360,
				scrollTrigger: {
					trigger: flipper,
					start: 'top, 50%',
					end: 'bottom, 10%',
					pin: flipper,
					scrub: true,
					markers: true,
				},
			}
		)
	}, [])

	return (
		<div className="holidays" ref={triggerEl}>
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
						<span>10月7日（星期六）、10月8日（星期日）上班</span>
					</div>
				</div>
				<div
					className="flipper"
					ref={flipperRef}
					style={{ backgroundImage: 'url(img/1.jpg)' }}
				></div>
			</section>
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
						<span>10月7日（星期六）、10月8日（星期日）上班</span>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Holidays
