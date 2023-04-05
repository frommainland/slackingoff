import React from 'react'
import './BreakTime.scss'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const BreakTime = ({ p1, p2 = null, p3 }) => {
	const ref = useRef(null)
	useEffect(() => {
		Splitting()
		const arr = gsap.utils.toArray(ref.current)
		arr.forEach((title) => {
			const words = [...title.querySelectorAll('.word')]

			for (const word of words) {
				const chars = word.querySelectorAll('.char')
				const charsTotal = chars.length

				chars.forEach((char) => {
					// console.log(char)
					gsap.set(char.parentNode, { perspective: 1000 })
				})

				gsap.fromTo(
					chars,
					{
						'will-change': 'transform',
						x: (position) => {
							const factor =
								position < Math.ceil(charsTotal / 2)
									? position
									: Math.ceil(charsTotal / 2) -
									  Math.abs(
											Math.floor(charsTotal / 2) -
												position
									  ) -
									  1
							return (
								(charsTotal % 2
									? Math.abs(
											Math.ceil(charsTotal / 2) -
												1 -
												factor
									  )
									: Math.abs(
											Math.ceil(charsTotal / 2) - factor
									  )) *
								200 *
								(position < charsTotal / 2 ? -1 : 1)
							)
						},
						y: (position) => {
							const factor =
								position < Math.ceil(charsTotal / 2)
									? position
									: Math.ceil(charsTotal / 2) -
									  Math.abs(
											Math.floor(charsTotal / 2) -
												position
									  ) -
									  1
							return factor * 60
						},

						rotationY: -270,
						rotationZ: (position) => {
							const factor =
								position < Math.ceil(charsTotal / 2)
									? position
									: Math.ceil(charsTotal / 2) -
									  Math.abs(
											Math.floor(charsTotal / 2) -
												position
									  ) -
									  1
							return position < charsTotal / 2
								? Math.abs(factor - charsTotal / 2) * 8
								: -1 * Math.abs(factor - charsTotal / 2) * 8
						},
					},

					{
						ease: 'power2.inOut',
						x: 0,
						y: 0,
						rotationZ: 0,
						rotationY: 0,
						scale: 1,
						scrollTrigger: {
							trigger: word,
							start: 'top bottom+=40%',
							end: 'top top+=15%',
							scrub: 1,
						},
					}
				)
			}
		})
	}, [])

	return (
		<div className="break-time-wrap">
			<div className="content-wrap" data-splitting="" ref={ref}>
				<p>{p1}</p>
				<p>{p2}</p>
				<p>{p3}</p>
			</div>
		</div>
	)
}

export default BreakTime
