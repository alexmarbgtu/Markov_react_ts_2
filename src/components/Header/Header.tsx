import { useNavigate } from "react-router-dom"
import Theme from "../theme-provider/theme-provider"
import { motion } from 'motion/react'

import Styles from './index.module.css'
import Menu from "../Menu/Menu"
import BlockAuth from "../BlockAuth/BlockAuth"


const Header = () => {
  const navigate = useNavigate()
	
	return (
		<>
			<header className={Styles.main}>
				<motion.div
					className={Styles.logo}
					onClick={() => navigate('/')}
					initial={{
						x: -50,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
					}}
				>
					Alex
				</motion.div>
				<motion.div
					animate={{
						y: [-50, 0],
					}}
					transition={{
						duration: 0.5,
					}}
				>
					<Menu />
				</motion.div>
				<div className={Styles.buttonAuth}>
					<BlockAuth />
				</div>
				<motion.div
					initial={{
						x: 50,
						opacity: 0,
					}}
					animate={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						delay: 0.3,
					}}
				>
					<Theme.SimpleToggler />
				</motion.div>
			</header>
		</>
	)
}

export default Header
