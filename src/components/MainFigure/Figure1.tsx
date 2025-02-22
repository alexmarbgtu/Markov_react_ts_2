import { motion } from "motion/react";
import Styles from './index.module.css'

export const triangle = (
	<motion.div
		className={Styles.containerTriangle}
		animate={{
			rotate: 360,
		}}
		transition={{
			duration: 2,
			repeat: Infinity,
			ease: 'linear',
		}}
	>
		<div className={Styles.triangle} />
	</motion.div>
)

