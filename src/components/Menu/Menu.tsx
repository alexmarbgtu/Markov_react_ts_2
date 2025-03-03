import { Link } from "react-router-dom"
import { v4 as uuid4 } from "uuid"

import Styles from './Menu.module.css'
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const itemsMenu = [
  { id: uuid4(), title: 'На главную', to: '/' },
  { id: uuid4(), title: 'Слайдер', to: '/slider' },
]

const aboutMe = { id: uuid4(), title: 'Обо мне', to: '/user' }

const Menu = () => {
	const isAuth = useSelector((state: RootState) => state.auth.isAuth)
  return (
		<>
			<nav className={Styles.menu}>
				{itemsMenu.map(itm => (
					<Link className={Styles.menuLink} key={itm.id} to={itm.to}>
						{itm.title}
					</Link>
				))}
				{isAuth && (
					<Link className={Styles.menuLink} key={aboutMe.id} to={aboutMe.to}>
						{aboutMe.title}
					</Link>
				)}
			</nav>
		</>
	)
}

export default Menu