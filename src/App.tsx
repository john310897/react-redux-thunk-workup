import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from './reducers';

function App() {
  const dispatch = useDispatch();
  const userData = useSelector((data: any) => data?.data);
  useEffect(() => {
    console.log('in loading use effect app.js file', userData);
    dispatch(getUserData());
  }, [dispatch]);

  const getUpdatedStateData = () => {
    console.log(userData);
  };
  return (
    <>
      <button onClick={getUpdatedStateData}>get updated state data</button>
    </>
  );
}

export default App;
