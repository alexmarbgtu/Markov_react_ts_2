import { Link } from "react-router-dom"
import { v4 as uuid4 } from "uuid"

import Styles from './Menu.module.css'

const itemsMenu = [
  { id: uuid4(), title: 'На главную', to: '/' },
  { id: uuid4(), title: 'Слайдер', to: '/slider' }

]

const Menu = () => {
  return (
		<>
			<nav className={Styles.menu}>
				{itemsMenu.map(itm => (
					<Link className={Styles.menuLink} key={itm.id} to={itm.to}>
            {itm.title}
          </Link>
				))}
			</nav>
		</>
	)
}

export default Menu