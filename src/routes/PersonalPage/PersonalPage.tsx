import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store'
import User from "../../components/User/User"
import Layout from "../../components/Layout/Layout"
import { changeName, setUser } from "../../store/slices/userSlice"
import { useInfoUserQuery } from '../../store/api/userApi'

const PersonalPage = () => {
  const newUser = {
    "id": '23',
    "firstName": "12",
    "lastName": "43",
    "maidenName": "234",
    "age": 21,
    "gender": "men",
    "email": "alex",
  }
  // const { data, error, isLoading } = useInfoUserQuery()
  const dispatch = useDispatch()
	// if (data) {
	// 	console.log(`data: ${data}`)
	// 	// dispatch(setUser(data))
	// }

  const { firstName, lastName, age, gender, email } = useSelector(
		(state: RootState) => state.user
	)

  // console.log(`Status: ${isAuth}`)
  


  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeName(e.target.value))
	}
  const user = () => {
    // console.log(`set user: ${newUser}`);
    dispatch(setUser(newUser))
  }
  
  return (
		<>
			<Layout className='personal'>
				<User
					firstName={firstName}
					lastName={lastName}
					age={age}
					gender={gender}
					email={email}
				/>
				<input type='text' onChange={change} />
				<button onClick={user}>Click</button>
			</Layout>
		</>
	)
}

export default PersonalPage