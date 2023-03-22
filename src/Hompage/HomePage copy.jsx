import React, { useState, useEffect } from 'react'
import './HomePage.scss'
import Top from './Top'
import Manifesto from './Manifesto'
import Holidays from './Holidays'
import Moon from './Moon'

const HomePage = () => {
	return (
		<main id="home-page">
			<Top />
			<Manifesto />
			<Holidays />
			<Moon />
		</main>
	)
}

export default HomePage
