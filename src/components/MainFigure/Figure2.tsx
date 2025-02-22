import { motion } from "motion/react";
import Styles from './index.module.css'

export const circle = (
	<motion.div
		className={Styles.containerCircle}
		animate={{
			scale: [1, 2, 2, 1, 1],
			rotate: [0, 0, 180, 180, 0],
			borderRadius: ['0%', '0%', '50%', '50%', '0%'],
			backgroundColor: [
				'rgba(255,0,0,1)',
				'rgba(255,255,0,1)',
				'rgba(255,0,255,1)',
				'rgba(0,255,255,1)',
				'rgba(0, 0, 255,1)',
			],
		}}
		transition={{
			duration: 2,
			ease: 'easeInOut',
			times: [0, 0.2, 0.5, 0.8, 1],
			repeat: Infinity,
			repeatDelay: 1,
		}}
	/>
)
