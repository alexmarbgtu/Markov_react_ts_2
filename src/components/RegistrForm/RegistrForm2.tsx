import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Styles from './index.module.css'

type Inputs = {
	email: string
	password: string
	name: string
	test: string
}

const RegistrForm = ({ setModal }: { setModal: (modal: boolean) => void }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		formState,
		reset,
	} = useForm<Inputs>()

	const onSubmit: SubmitHandler<Inputs> = data => {
		console.log(data)
		console.log(errors)
	}

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({
				name: '',
				password: '',
				email: '',
			})
		}
	}, [formState, reset])

	const [showPassword, setShowPassword] = useState(false)

	const handleClickShowPassword = () => setShowPassword(show => !show)

	const handleMouseDownPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const handleMouseUpPassword = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		event.preventDefault()
	}

	const CancelButton = styled(Button)({
		color: 'rgba(25,48,66,.8)',
	})
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<TextField
						sx={{ margin: '0.5em', width: '350px' }}
						{...register('name', { required: true })}
						error={errors.name ? true : false}
						required
						// size='medium'
						label='Имя'
						defaultValue=''
						helperText={errors.name ? 'Введите Ваше имя' : ''}
						variant='filled'
					/>
				</div>
				<div>
					<TextField
						sx={{ margin: '0.5em', width: '350px' }}
						{...register('email', {
							required: true,
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Введите корректный email ',
							},
						})}
						error={errors.email ? true : false}
						required
						type='email'
						// id='name'
						label='Email'
						defaultValue=''
						helperText={errors.email ? errors.email.message : ''}
						variant='filled'
					/>
				</div>
				<div className={Styles.textPassword}>
					<TextField
						{...register('password', {
							required: true,
							minLength: {
								value: 6,
								message: 'Минимальная длина пароля 6 символов',
							},
							maxLength: {
								value: 20,
								message: 'Максимальная длина пароля 20 символов',
							},
						})}
						error={errors.password ? true : false}
						sx={{ margin: '0.5em', width: '350px' }}
						type={showPassword ? 'text' : 'password'}
						required
						label='Пароль'
						defaultValue=''
						helperText={errors.password ? errors.password.message : ''}
						variant='filled'
					/>
					<div className={Styles.buttonShowPassword}>
						<InputAdornment position='end'>
							<IconButton
								aria-label={showPassword ? 'скрыть пароль' : 'показать пароль'}
								onClick={handleClickShowPassword}
								onMouseDown={handleMouseDownPassword}
								onMouseUp={handleMouseUpPassword}
							>
								{showPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					</div>
				</div>
				{/* <input type='submit' /> */}
				<div className={Styles.buttons}>
					<div className={Styles.buttonCancel}>
						<CancelButton
							onClick={() => setModal(false)}
							endIcon={<CancelIcon />}
						>
							Закрыть
						</CancelButton>
					</div>
					<Button type='submit' variant='outlined' endIcon={<SendIcon />}>
						Отправить
					</Button>
				</div>
			</form>
		</>
	)
}

export default RegistrForm
