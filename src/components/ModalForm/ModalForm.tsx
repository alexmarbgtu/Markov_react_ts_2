import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'

import RegistrForm2 from '../RegistrForm/RegistrForm2'

import Styles from './index.module.css'
import cn from 'classnames'

const Modal = ({show, setModal}: {show: boolean, setModal: (show: boolean) => void}) => {

  useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        const targetElement = e.target as HTMLElement
        if (targetElement.classList.contains('modal')) setModal(false)
      }
      window.addEventListener('click', handleClick)
      return () => {
        window.removeEventListener('click', handleClick)
      }
    }, [setModal])

	return (
		<AnimatePresence>
			{show && (
				<motion.div
					className={cn(Styles.modalContainer, 'modal')}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
					}}
					exit={{
						opacity: 0,
					}}
					transition={{
						duration: 0.3,
					}}
				>
					<motion.div
						className={Styles.modalBox}
						initial={{
							opacity: 0,
							y: 160,
							scale: 0.5,
						}}
						animate={{
							opacity: 1,
							y: 0,
							scale: 1,
							transition: {
								type: 'spring',
								stiffness: 300,
							},
						}}
						exit={{
							opacity: 0,
							scale: 0.5,
							transition: { duration: 0.6 },
						}}
					>
						<RegistrForm2 setModal={setModal} />
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal
