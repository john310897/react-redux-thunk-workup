import React, { useEffect } from "react"
import { employeeList, userData } from "./reducers"
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

	const handleButtonClick = (actionType: string) => {
		switch (actionType) {
			case ('initDispatch'):
				console.log("in initDispatch###")
				checkInitialDispatch()
				break
			case ('allEmployeeStatus'):
				console.log("in checking get all employee status###")
				checkAllEmployeeListDispatch()
				break
			case ('employeeData'):
				console.log("in getting employee data")
				break
			default:
				console.info("no matching action found")
				break
		}
	}

	const checkInitialDispatch = () => {
		console.log("in checking initial dispatch status")
		dispatch(userData())
		setTimeout(() => {
			console.log(userStore)
		}, 3000)

	}

	const checkAllEmployeeListDispatch = () => {
		console.log("in dispatch action: getting all employee list")
		dispatch(employeeList())
	}

	return (
		<React.Fragment>
			<div className="main_container">
				<TableComponent
					headers={tableHeader}
					data={tableData}
					handleOnClick={(key) => handleButtonClick(key)}
					apiStatus={userStore?.data?.status}
				/>
			</div>
		</React.Fragment>
	)
}
export default App