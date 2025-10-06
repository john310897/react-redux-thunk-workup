import { useEffect } from "react"
import { getUserData } from "./reducers"
import { useSelector, useDispatch } from "react-redux"

const App = () => {
  const dispatch: any = useDispatch();
  const userStore: any = useSelector(data => data)

  useEffect(() => {
    console.log(userStore)

  }, [])

  const handleButtonClick = () => {
    console.log(userStore)
    dispatch(getUserData())
  }
  return (
    <>
      <button onClick={handleButtonClick}>get updated state</button>
      <br /><br />
      <button>
        <p>dispatch api status: <b>{userStore?.data?.status}</b></p>
      </button>
    </>
  )
}
export default App