import React, { useEffect } from "react"
import { employeeData, employeeList, userData } from "./reducers"
import './App.css'
import { useSelector, useDispatch } from "react-redux"
import { tableData, tableHeader } from "./constants"
import TableComponent from "./components/TableComponent"
import OutputComponent from "./components/OutputComponent"

const App = () => {
	const dispatch: any = useDispatch();
	const userStore: any = useSelector(data => data)
	useEffect(() => {
		console.log(userStore)
	}, [])
	const handleButtonClick = (actionType: string) => {
		switch (actionType) {
			case ('initDispatch'):
				console.debug("in initDispatch###")
				checkInitialDispatch()
				break
			case ('allEmployeeStatus'):
				console.debug("in checking get all employee status###")
				checkAllEmployeeListDispatch()
				break
			case ('employeeData'):
				console.debug("in getting employee data")
				checkEmployeeDataDispatch()
				break
			default:
				console.error("no matching action found")
				break
		}
	}

	const checkInitialDispatch = () => {
		console.debug("in checking initial dispatch status")
		dispatch(userData())
		setTimeout(() => {
			console.debug(userStore)
		}, 3000)

	}

	const checkAllEmployeeListDispatch = () => {
		console.debug("in dispatch action: getting all employee list")
		dispatch(employeeList())
	}

	const checkEmployeeDataDispatch = () => {
		console.debug("in dispatch action: get employee data")
		dispatch(employeeData())
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
				<hr />
				<OutputComponent
					output={JSON.stringify(userStore?.data?.data)}
				/>
			</div>
		</React.Fragment>
	)
}
export default App