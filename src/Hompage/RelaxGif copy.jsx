import React from 'react'
import './RelaxGif.scss'

const RelaxGif = () => {
	return (
		<div className='relax-wrap'>
			<img
				className="gif1"
				src={require(`../images/relax/1.webp`)}
				alt=""
			/>
			<img
				className="gif2"
				src={require(`../images/relax/2.webp`)}
				alt=""
			/>
			<img
				className="gif3"
				src={require(`../images/relax/3.webp`)}
				alt=""
			/>
			<img
				className="gif4"
				src={require(`../images/relax/4.webp`)}
				alt=""
			/>
			<img
				className="gif5"
				src={require(`../images/relax/5.webp`)}
				alt=""
			/>
			<img
				className="gif6"
				src={require(`../images/relax/6.webp`)}
				alt=""
			/>
		</div>
	)
}
export default RelaxGif
