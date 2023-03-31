import React, { useState, useEffect, useRef } from 'react'
import './Moon.scss'
import addMonths from 'date-fns/addMonths'
import setDate from 'date-fns/setDate'
import differenceInDays from 'date-fns/differenceInDays'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MoonItem from './MoonItem'
gsap.registerPlugin(ScrollTrigger)

let moonCardArray = [5, 10, 12, 15, 25, 30]
console.log(moonCardArray.length)

const Moon = () => {
	return (
		<div>
			{moonCardArray.map((item, index) => (
				<MoonItem
					item={item}
					key={index}
					index={index}
					targetDay={item}
					totalItem={moonCardArray.length}
				/>
			))}
		</div>
	)
}

export default Moon
