import React, { useState, useEffect } from 'react'

const HomePage = () => {
	const currentTime = new Date()
	const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' }
	const weekdayOptions = { weekday: 'long' }

	const [time, setTime] = useState(new Date())
	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => {
			clearInterval(timer)
		}
	}, [time])

	return (
		<div>
			<h1>{currentTime.toLocaleDateString('zh-CN', dateOptions)}</h1>
			<h1>{currentTime.toLocaleDateString('zh-CN', weekdayOptions)}</h1>
			<h1>{time.toLocaleTimeString('zh-CN')}</h1>
		</div>
	)
}

export default HomePage
