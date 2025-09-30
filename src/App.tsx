import { useEffect } from "react"
import { getUserData } from "./reducers"
import { useSelector, useDispatch } from "react-redux"

const App = () => {
  const dispatch: any = useDispatch();
  const userStore = useSelector(data => data)

  useEffect(() => {
    console.log(userStore)
    dispatch(getUserData())
  }, [])

  const handleButtonClick = () => {
    console.log(userStore)
  }
  return (
    <>
      <button onClick={handleButtonClick}>get updated state</button>
    </>
  )
}
export default App