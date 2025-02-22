import { useNavigate } from "react-router-dom"
import Theme from "../theme-provider/theme-provider"
import { motion } from 'motion/react'

import Styles from './index.module.css'
import Modal from "../ModalForm/ModalForm"
import { useState } from "react"
import Button from "../Button/Button"
import Menu from "../Menu/Menu"


const Header = () => {
  const navigate = useNavigate()
  const [modal, setModal] = useState(false)

	return (
		<>
			<Modal show={modal} setModal={setModal} />
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
				<Button
					className={Styles.showModal}
					onClick={() => setModal(true)}
					label={'Регистрация'}
				/>
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
