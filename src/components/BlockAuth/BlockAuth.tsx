import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'
import { RootState } from "../../store/store"
import Button from "../Button/Button"
import Modal from '../ModalForm/ModalForm'
import Styles from './index.module.css'
import { setAuth } from "../../store/slices/authSlice"
import { useInfoUserQuery } from "../../store/api/userApi"
import { initialState, setUser } from "../../store/slices/userSlice"
import { useNavigate } from "react-router-dom"
// import { useInfoUserQuery } from '../../store/api/userApi'


const BlockAuth = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { data, isLoading, error } = useInfoUserQuery(null);

  useEffect(() => {
		if (data) {
			const { id, maidenName, email, firstName, lastName, age, gender } = data
			dispatch(
				setUser({ id, maidenName, email, firstName, lastName, age, gender })
			)
		}
	}, [data, dispatch])

  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const [modal, setModal] = useState(false)
  const [form, setForm] = useState('auth')
  const logout = () => {
    localStorage.removeItem('token')
		dispatch(setUser(initialState))
    dispatch(setAuth(false))
		navigate('/')
  }

	// console.log(`data: ${data}`)
	// console.log(`isLoading: ${isLoading}`)
	// console.log(`error: ${error}`)
	// console.log(`isAuth: ${isAuth}`)

  return (
		<>
			{!isLoading && !isAuth && (
				<>
					<Modal show={modal} setModal={setModal} form={form} />
					<Button
						className={Styles.showModal}
						onClick={() => {
							setModal(true)
							setForm('reg')
						}}
						label={'Регистрация'}
					/>
					<Button
						className={Styles.showModal}
						onClick={() => {
							setModal(true)
							setForm('auth')
						}}
						label={'Войти'}
					/>
				</>
			)}

			{!isLoading && isAuth && (
				<Button className={Styles.showModal} onClick={logout} label={'Выйти'} />
			)}
		</>
	)
}

export default BlockAuth