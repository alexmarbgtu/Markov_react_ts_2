import { ReactNode } from 'react'
import React from 'react'

import Header from '../Header/Header'

interface ILayout {
	children: ReactNode
	className: string
}

const Layout: React.FunctionComponent<ILayout> = ({ children, className }) => {

	return (
		<>
			<Header />
			<main className={className}>{children}</main>
		</>
	)
}

export default Layout
