import { motion } from "motion/react"

const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i: number) => {
			const delay = i * 0.5
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: {
						delay,
						type: 'spring',
						duration: 1.5,
						bounce: 0,
						repeat: Infinity,
					},
					opacity: { delay, duration: 0.01 },
				},
			}
		},
	}

  const image: React.CSSProperties = {
    maxWidth: '80vw',
  }

  const shape: React.CSSProperties = {
    strokeWidth: 1,
    strokeLinecap: 'round',
    fill: 'transparent',
  }

	export const motion4 = (
			<motion.svg
				width='60'
				height='60'
				viewBox='0 0 60 60'
				initial='hidden'
				animate='visible'
				style={image}
			>
				<motion.circle
					className='circle-path'
					cx='10'
					cy='10'
					r='8'
					stroke='#ff0088'
					variants={draw}
					custom={1}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='3'
					x2='36'
					y2='17'
					stroke='#4ff0b7'
					variants={draw}
					custom={2}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='17'
					x2='36'
					y2='3'
					stroke='#4ff0b7'
					variants={draw}
					custom={2.5}
					style={shape}
				/>
				<motion.rect
					width='14'
					height='14'
					x='41'
					y='3'
					rx='2'
					stroke='#0d63f8'
					variants={draw}
					custom={3}
					style={shape}
				/>
				<motion.circle
					cx='10'
					cy='30'
					r='8'
					stroke='#0d63f8'
					variants={draw}
					custom={2}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='23'
					x2='36'
					y2='37'
					stroke='#ff0088'
					custom={3}
					variants={draw}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='37'
					x2='36'
					y2='23'
					stroke='#ff0088'
					custom={3.5}
					variants={draw}
					style={shape}
				/>
				<motion.rect
					width='14'
					height='14'
					x='41'
					y='23'
					rx='2'
					stroke='#4ff0b7'
					custom={4}
					variants={draw}
					style={shape}
				/>
				<motion.circle
					cx='10'
					cy='50'
					r='8'
					stroke='#4ff0b7'
					variants={draw}
					custom={3}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='43'
					x2='36'
					y2='57'
					stroke='#0d63f8'
					variants={draw}
					custom={4}
					style={shape}
				/>
				<motion.line
					x1='22'
					y1='57'
					x2='36'
					y2='43'
					stroke='#0d63f8'
					variants={draw}
					custom={4.5}
					style={shape}
				/>
				<motion.rect
					width='14'
					height='14'
					x='41'
					y='43'
					rx='2'
					stroke='#ff0088'
					variants={draw}
					custom={5}
					style={shape}
				/>
			</motion.svg>
  )