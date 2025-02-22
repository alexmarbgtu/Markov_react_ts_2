import { motion } from "motion/react";
import LogoReact from '../../assets/react.svg' 

export const reactAnime = (
	<motion.img
		src={LogoReact}
		style={{ width: 50 }}
		animate={{
			rotate: 360 * 3,
			x: [0, 30, 50, 30, 0, -30, -50, -30, 0],
			y: [0, 10, 20, 10, 0],
			scale: [1, 1.8, 2, 1.8, 1],
		}}
		transition={{
			duration: 2,
			delay: 2,
			repeat: Infinity,
			repeatDelay: 0.2,
			ease: 'linear',
		}}
	/>
)