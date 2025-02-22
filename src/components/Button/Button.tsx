interface IButton {
	onClick: () => void
	className: string
	label?: string
	children?: React.ReactElement
}

const Button: React.FunctionComponent<IButton> = ({
	onClick,
	className,
	label,
	children,
}) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
			{label}
		</button>
	)
}

export default Button