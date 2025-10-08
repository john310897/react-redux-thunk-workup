import React, { useEffect } from "react"
import { userData } from "./reducers"
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { tableData, tableHeader } from "./constants"
import TableComponent from "./components/TableComponent"

const App = () => {
	const dispatch: any = useDispatch();
	const userStore: any = useSelector(data => data)
	useEffect(() => {
		console.log(userStore)

	}, [])

	const handleButtonClick = () => {
		console.log(userStore)
		dispatch(userData())
	}

	return (
		<React.Fragment>
			<div className="main_container">
				<TableComponent
					headers={tableHeader}
					data={tableData}
					handleOnClick={handleButtonClick}
					apiStatus={userStore?.data?.status}
				/>
			</div>

		</React.Fragment>
	)
}
export default App