import React, { useEffect, useRef } from 'react'
import './AboutPage.scss'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const ALink = ({ text, link }) => {
	return (
		<a className="a-link" href={link}>
			{text}
		</a>
	)
}

const AboutPage = () => {
	// const { scrollY } = useScroll()

	// useMotionValueEvent(scrollY, 'change', (latest) => {
	// 	console.log('Page scroll: ', latest)
	// })
	const startImgRef = useRef(null)
	useEffect(() => {
		const el = startImgRef.current
		gsap.to(el, {
			rotate: 5,
			scale: 1.5,
			y: -200,
			scrollTrigger: {
				trigger: el,
				start: 'top, 80%',
				end: 'top, 30%',
				markers: true,
				scrub: 1,
			},
		})
	}, [])

	return (
		<main id="content-wrap">
			<section className="top-start">
				<p>这是2023年学习react做的第二个项目。</p>
				<p>
					延续了去年的想法，在只有一个简单的列表信息时，怎么让设计符合内容并易于记忆。
				</p>
				<div className="vertical-line">
					<div className="arrow"></div>
				</div>
			</section>
			<section className="content-wrap">
				<div className="title">
					<span>01</span>
					<p>开始</p>
				</div>
				<div className="content">
					<p>这张群聊的截图就是这个项目的开始。</p>
				</div>
				<img src={require('../images/start.png')} ref={startImgRef} />
			</section>
			<section className="content-wrap">
				<div className="title">
					<span>02</span>
					<p>外国摸鱼人</p>
				</div>
				<div className="content">
					<p>
						网站后半分的gif素材都是外国的摸鱼人，为什么没有祖国的摸鱼人？我能搜索到的绝大部分是表情包，非常可爱，但是没有太多变化。
					</p>
				</div>
			</section>
			<section className="content-wrap">
				<div className="title">
					<span>03</span>
					<p>里克·鲁宾</p>
				</div>
				<div className="content">
					<p>网站最后的视频是Rick Rubin的一次采访。</p>
					<ALink
						text="Rick Rubin's stripped down approach to making music"
						link="https://www.cbsnews.com/news/rick-rubin-anderson-cooper-60-minutes-interview-2023-01-15/"
					/>
					<p>
						刚看到这个视频的时候，我以为这是一个搞笑的段子，嘲讽了一些有“有品位”，但是做不了任何事情的人。
					</p>
					<p>
						后来我查了一下他，里克·鲁宾（Rick
						Rubin），1963年3月10日出生于美国纽约州长滩，美国音乐制作人，街头教父（Def
						Jam）唱片公司联合创始人，哥伦比亚唱片公司前联合总裁。
					</p>
					<p>
						我并不了解里克·鲁宾的作品，
						但是这个视频无论从讽刺或是正向的角度来看，我都觉得适合放在这里。如果周围“有品位”的人都这样，那么摸鱼人在打工的时候就更要有这种自信的态度。
					</p>
					<img
						src={require('../images/rick_rubin.jpg')}
						alt="rick rubin portrait"
					/>
				</div>
			</section>
		</main>
	)
}

export default AboutPage
