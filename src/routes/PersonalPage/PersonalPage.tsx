import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../store/store'
import User from "../../components/User/User"
import Layout from "../../components/Layout/Layout"
import { changeName } from "../../store/userSlice"

const PersonalPage = () => {
  const {firstName, lastName} = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeName(e.target.value))
	}
  return (
		<>
			<Layout className="personal">
				<User firstName={firstName} lastName={lastName} />
        <input type="text" onChange={change}/>
			</Layout>
		</>
	)
}

export default PersonalPage