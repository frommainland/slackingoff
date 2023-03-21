import React from 'react'
import './Manifesto.scss'
import Splitting from 'splitting'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

// const manifesto = "我们是摸鱼人，我们的口号是！摸鱼摸得好，工作没烦恼。
// 我们致力于将摸鱼文化发扬光大，追求工作和生活的平衡。我们反对工作过度、加班过度、压力过大等不良现象，提倡摸鱼文化，让员工劳逸结合，身心健康。
// 摸鱼人不是懒惰者，不是逃避者，而是一群热爱生活、热爱工作的人。我们有追求，有理想，有梦想，但是我们也懂得珍惜身体，珍惜健康，珍惜家人和朋友。
// 我们不是为了摸鱼而摸鱼，而是为了更好的工作和生活而摸鱼。我们追求高效工作，高质量生活，我们追求工作和生活的平衡，让人生更加丰富多彩。
// 让我们一起摸鱼，一起追求更美好的生活。"

const Manifesto = () => {
	const ref = useRef(null)
	useEffect(() => {
		Splitting()
		const arr = gsap.utils.toArray(ref.current)
		// console.log(arr)
		arr.forEach((title) => {
			// gsap.fromTo(
			// 	title,
			// 	{
			// 		transformOrigin: '0% 50%',
			// 		rotate: 6,
			// 	},
			// 	{
			// 		ease: 'none',
			// 		rotate: 0,
			// 		scrollTrigger: {
			// 			trigger: title,
			// 			start: 'top bottom',
			// 			end: 'top top',
			// 			scrub: true,
			// 			markers: true,
			// 		},
			// 	}
			// )

			gsap.fromTo(
				title.querySelectorAll('.char'),
				{
					'will-change': 'opacity',
					opacity: 0.05,
				},
				{
					ease: 'none',
					opacity: 1,
					stagger: 0.05,
					scrollTrigger: {
						trigger: title,
						start: 'top 90%',
						end: 'center 40%',
						scrub: true,
					},
				}
			)
		})
	}, [])
	return (
		<section className="manifesto" data-splitting="" ref={ref}>
			<h1>我们是摸鱼人，我们的口号是！摸鱼摸得好，工作没烦恼。</h1>
			<h1>
				我们致力于将摸鱼文化发扬光大，追求工作和生活的平衡。我们反对工作过度、加班过度、压力过大等不良现象，提倡摸鱼文化，让员工劳逸结合，身心健康。
			</h1>
			<h1>
				摸鱼人不是懒惰者，不是逃避者，而是一群热爱生活、热爱工作的人。我们有追求，有理想，有梦想，但是我们也懂得珍惜身体，珍惜健康，珍惜家人和朋友。
			</h1>
			<h1>
				我们不是为了摸鱼而摸鱼，而是为了更好的工作和生活而摸鱼。我们追求高效工作，高质量生活，我们追求工作和生活的平衡，让人生更加丰富多彩。
			</h1>
			<h1>让我们一起摸鱼，一起追求更美好的生活。</h1>
			<h2>- ChatGPT</h2>
		</section>
	)
}

export default Manifesto
