import { useEffect } from "react"
import { getUserData } from "./reducers"
import { useSelector, useDispatch } from "react-redux"

const App = () => {
	const dispatch: any = useDispatch();
	const userStore: any = useSelector(data => data)
	const statusColor: any = {
		'PENDING': 'orange',
		'IDLE': 'red',
		'SUCCESS': 'green'
	}

	useEffect(() => {
		console.log(userStore)

	}, [])

	const handleButtonClick = () => {
		console.log(userStore)
		dispatch(getUserData())
	}
	return (
		<>
			<div className="main_container">
				<div className="main_dispatch_control">
					<button onClick={handleButtonClick}>update dispatch status</button>
				</div>
				<div className="main_dispatch_status" style={{ 'background': statusColor[userStore?.data?.status] }}>
					<p>{userStore?.data?.status}</p>
				</div>
			</div>
		</>
	)
}
export default App