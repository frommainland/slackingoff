import React from 'react'
import './Footer.scss'
import { motion } from 'framer-motion'

const LogoSvg = () => {
	return (
		<motion.svg
			viewBox="0 0 120 232"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M7.2523e-06 50.5V57.5C-0.0045222 68.27 2.11265 78.9355 6.23062 88.8873C10.3486 98.839 16.3867 107.882 24 115.5C40 99.5 48 78.5 48 57.5V50.5C48 44.758 50.281 39.2513 54.3411 35.1911C58.4013 31.1309 63.9081 28.85 69.65 28.85C75.3919 28.85 80.8987 31.1309 84.9589 35.1911C89.019 39.2513 91.3 44.758 91.3 50.5V53.5999C87.1956 54.6833 83.5659 57.0963 80.9786 60.4617C78.3912 63.827 76.9921 67.955 77 72.2V101.1C83.8 101.1 90.4 99.2 96.2 95.9C102.06 99.3111 108.72 101.106 115.5 101.1V72.2C115.5 63.2 109.3 55.7999 101 53.5999V50.5999C101.007 43.9682 99.7069 37.4001 97.1751 31.2706C94.6433 25.1412 90.929 19.5704 86.2443 14.8764C81.5595 10.1824 75.9961 6.4571 69.8717 3.91317C63.7473 1.36924 57.1818 0.0565176 50.55 0.0499515C43.9183 0.0433854 37.3501 1.3431 31.2207 3.8749C25.0912 6.4067 19.5205 10.121 14.8265 14.8057C10.1325 19.4904 6.40715 25.0538 3.86322 31.1782C1.3193 37.3027 0.00657325 43.8682 7.2523e-06 50.5ZM105.8 72.2V89.7C102.232 88.4837 98.9372 86.5813 96.1 84.1C93.4 86.5 90.1 88.4 86.5 89.7V72.2C86.5 69.6406 87.5167 67.1861 89.3264 65.3764C91.1361 63.5666 93.5907 62.5499 96.15 62.5499C98.7093 62.5499 101.164 63.5666 102.974 65.3764C104.783 67.1861 105.8 69.6406 105.8 72.2ZM38.4 51V57.4C38.4 73.4 33.4 88.4 24 100.9C14.591 88.355 9.53485 73.0812 9.60001 57.4V51C14.108 48.8923 19.0237 47.7999 24 47.7999C28.9763 47.7999 33.892 48.8923 38.4 51ZM50.4 9.59995C61.1 9.59995 70.8 13.7 78 20.4C70.2061 18.2977 61.9014 19.288 54.8203 23.1639C47.7392 27.0399 42.4295 33.5018 40 41.2C30.7327 37.5573 20.4962 37.2043 11 40.2C13.2654 31.4261 18.3871 23.6561 25.5574 18.1154C32.7277 12.5747 41.5385 9.57873 50.6 9.59995H50.4ZM24 62.5999C25.273 62.5999 26.4939 63.1057 27.3941 64.0058C28.2943 64.906 28.8 66.1269 28.8 67.4C28.8 68.673 28.2943 69.8939 27.3941 70.7941C26.4939 71.6942 25.273 72.2 24 72.2C22.727 72.2 21.5061 71.6942 20.6059 70.7941C19.7057 69.8939 19.2 68.673 19.2 67.4C19.2 66.1269 19.7057 64.906 20.6059 64.0058C21.5061 63.1057 22.727 62.5999 24 62.5999ZM120 179.5V172.5C120.005 161.73 117.887 151.064 113.769 141.113C109.651 131.161 103.613 122.118 96 114.5C88.3867 122.118 82.3486 131.161 78.2306 141.113C74.1127 151.064 71.9955 161.73 72 172.5V179.5C72 185.242 69.719 190.749 65.6589 194.809C61.5987 198.869 56.0919 201.15 50.35 201.15C44.6081 201.15 39.1013 198.869 35.0411 194.809C30.981 190.749 28.7 185.242 28.7 179.5V176.4C32.8044 175.317 36.4341 172.904 39.0215 169.538C41.6088 166.173 43.0079 162.045 43 157.8V128.9C36.2 128.9 29.6 130.8 23.8 134.1C17.96 130.741 11.3372 128.982 4.60001 129V157.9C4.60001 166.9 10.8 174.3 19.1 176.5V179.5C18.7966 186.314 19.8767 193.119 22.2752 199.504C24.6737 205.89 28.3408 211.723 33.0554 216.652C37.77 221.581 43.4344 225.504 49.7066 228.185C55.9789 230.865 62.7291 232.247 69.55 232.247C76.3709 232.247 83.1211 230.865 89.3934 228.185C95.6657 225.504 101.33 221.581 106.045 216.652C110.759 211.723 114.426 205.89 116.825 199.504C119.223 193.119 120.303 186.314 120 179.5ZM14.2 157.8V140.3C17.7665 141.519 21.0613 143.421 23.9 145.9C26.6 143.5 29.9 141.6 33.5 140.3V157.8C33.5 160.359 32.4833 162.814 30.6736 164.624C28.8639 166.433 26.4093 167.45 23.85 167.45C21.2907 167.45 18.8362 166.433 17.0264 164.624C15.2167 162.814 14.2 160.359 14.2 157.8ZM81.6 179V172.6C81.6 156.6 86.6 141.6 96 129.1C105.409 141.645 110.465 156.919 110.4 172.6V179C105.892 181.108 100.976 182.2 96 182.2C91.0237 182.2 86.108 181.108 81.6 179ZM69.6 220.4C59.3678 220.407 49.5104 216.549 42 209.6C49.7939 211.702 58.0987 210.712 65.1797 206.836C72.2608 202.96 77.5705 196.498 80 188.8C89.2673 192.443 99.5038 192.796 109 189.8C106.735 198.574 101.613 206.344 94.4426 211.884C87.2723 217.425 78.4616 220.421 69.4 220.4H69.6ZM96 157.4C94.727 157.4 93.5061 156.894 92.6059 155.994C91.7057 155.094 91.2 153.873 91.2 152.6C91.2 151.327 91.7057 150.106 92.6059 149.206C93.5061 148.306 94.727 147.8 96 147.8C97.273 147.8 98.4939 148.306 99.3941 149.206C100.294 150.106 100.8 151.327 100.8 152.6C100.8 153.873 100.294 155.094 99.3941 155.994C98.4939 156.894 97.273 157.4 96 157.4Z"
				fill="white"
			/>
		</motion.svg>
	)
}

const Footer = ({ children }) => {
	return (
		<div className="footer-wrap">
			<LogoSvg />
			{children}
		</div>
	)
}

export default Footer
