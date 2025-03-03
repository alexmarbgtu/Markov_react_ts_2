import { useDispatch } from "react-redux"
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import CancelIcon from '@mui/icons-material/Cancel'
import { styled } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Styles from './index.module.css'

import { setAuth } from "../../store/slices/authSlice"
import { signInUser } from "../../store/api/userApi"

type Inputs = {
	password: string
	name: string
}

const AuthForm = ({ setModal }: { setModal: (modal: boolean) => void }) => {
	const dispatch = useDispatch()
	const auth = async ({name, password}: Inputs) => {
		const result = signInUser({
			login: 'jamesd',
			password: 'jamesdpass',
			expiresInMins: 30,
		})
		const token = (await result).accessToken
		if (token) {
			dispatch(setAuth(true))
			localStorage.setItem('token', token)
		}
	}

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
    setModal(false)
    auth(data)
	}

	useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({
				name: '',
				password: '',
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
						label='Имя'
						defaultValue=''
						helperText={errors.name ? 'Введите Ваше имя' : ''}
						variant='filled'
					/>
				</div>
				<div className={Styles.textPassword}>
					<TextField
						{...register('password', {
							required: true,
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
						Войти
					</Button>
				</div>
			</form>
		</>
	)
}

export default AuthForm