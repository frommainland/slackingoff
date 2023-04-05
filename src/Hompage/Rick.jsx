import React from 'react'
import './Rick.scss'

const ALink = ({ text, link }) => {
	return (
		<a id="a-link" href={link}>
			{text}
		</a>
	)
}

const Rick = () => {
	return (
		<div className="rick-video">
			<video controls>
				<source src={require(`../video/rick.mp4`)} type="video/webm" />
			</video>
			<ALink
				text="Rick Rubin's stripped down approach to making music"
				link="https://www.cbsnews.com/news/rick-rubin-anderson-cooper-60-minutes-interview-2023-01-15/"
			/>
		</div>
	)
}

export default Rick
