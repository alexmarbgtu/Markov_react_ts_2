import { Card, Typography } from "@mui/material"
import Style from "./index.module.css"

const User = ({
	firstName,
	lastName,
	age,
	gender,
	email,
}: {
	firstName: string
	lastName: string
	age: number
	gender: string
	email: string
}) => {
	return (
		<Card className={Style.container}>
			<Typography>{`Имя: ${firstName}`}</Typography>
			<Typography>{`Фамилия: ${lastName}`}</Typography>
			<Typography>{`Возраст: ${age}`}</Typography>
			<Typography>{`Пол: ${gender}`}</Typography>
			<Typography>{`Email: ${email}`}</Typography>
		</Card>
	)
}

export default User