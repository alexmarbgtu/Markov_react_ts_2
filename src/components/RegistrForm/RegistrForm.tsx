import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"

type Inputs = {
  email: string,
  password: string,
  name: string,
  test: string
}



const RegistrForm = () => {
  const {
		register,
		handleSubmit,
		formState: { errors },
    formState,
		reset,
	} = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    console.log(errors)
  }

  useEffect(() => {
		if (formState.isSubmitSuccessful) {
			reset({ 
        name: '',
        password: '',
        email: '',
        test: ''
      })
		}
	}, [formState, reset])
  return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input {...register('name', { required: true })} />
					{errors.name && <p>Введите Ваше имя</p>}
				</div>
				<div>
					<input
						type='email'
						{...register('email', {
							required: true,
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Введите корректный email ',
							},
						})}
					/>
					{errors.email && errors.email.message && (
						<p>{errors.email.message}</p>
					)}
					{errors.email && !errors.email.message && <p>Введите Ваш email</p>}
				</div>
				<div>
					<input
						type='password'
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
					/>
					{errors.password && errors.password.message && (
						<p>{errors.password.message}</p>
					)}
					{errors.password && !errors.password.message && <p>Введите пароль</p>}
				</div>
				<input type='submit' />
			</form>
		</>
	)
}

export default RegistrForm
