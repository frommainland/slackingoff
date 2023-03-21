import React from 'react'
import './Holidays.scss'

const Holidays = () => {
	return (
		<div className="holidays">
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
