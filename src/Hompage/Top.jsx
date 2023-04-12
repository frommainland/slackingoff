import React, { useState, useEffect } from 'react'
import './Top.scss'
import { motion, useAnimationControls, useScroll } from 'framer-motion'
import { smooth } from '../helper/easing'
import useScrollPosition from '../helper/hooks/useScrollPosition'

const transition = { duration: 1, ease: smooth }



const Top = () => {
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

	const [data, setData] = useState([])
	const lat = 39.916668
	const lon = 116.383331
	const APIKEY = '37daaa8cb8f407eeace86c5708e3e9ad'
	useEffect(() => {
		const fetchData = async () => {
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&lang=zh_cn&units=metric`
			)
				.then((res) => res.json())
				.then((result) => {
					setData(result)
					// console.log(result)
				})
		}
		fetchData()
	}, [])



	return (
		<>
			<section className="top-start">
				<h1>
					{currentTime.toLocaleDateString('zh-CN', dateOptions)} ✺{' '}
					{currentTime.toLocaleDateString('zh-CN', weekdayOptions)}
				</h1>

				{typeof data.main != 'undefined' ? (
					<h1>
						{data.weather[0].description} ✦ 当前{data.main.temp}°C
					</h1>
				) : (
					<></>
				)}
				<h1>{time.toLocaleTimeString('zh-CN')}</h1>
			</section>
		</>
	)
}

export default Top
