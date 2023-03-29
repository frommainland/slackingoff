import React from 'react'
import './Moon.scss'

const Moon = () => {
	return (
		<div>
			<section className="board-wrap">
				<div className="moon phase12"></div>
				<div className="board-content">
					<p className='salary-discription'>离12号发工资还有</p>
					<div className="timer-wrap">
						<h1>2</h1>
						<p>天</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Moon
