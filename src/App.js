import {useSelector, useDispatch} from 'react-redux';
import { increament, decreament } from './actions/counter';
import { islogged, notlogged } from './actions/logged';

// Action :- Like increament or decreament
// const increament = () => {
//   return {
//     type : 'INCREAMENT'
//   }
// }

//Reducer :- Check which action in performing and modify and update the store
// const counter = (state=0, action) => {
//   switch(action.type)
//   {
//     case 'INCREAMENT' :
//       return state + 1;
//     case 'DECREAMENT' :
//       return state - 1;
//     default :
//       return state;
//   }
// }

// Store :- Globalised state
// let Store = createStore(counter); 
// Store.subscribe(()=>console.log(Store.getState()))

// Dispatch :- Execute actions 
// Store.dispatch(increament())

function App() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.counterReducer)
  let newValue = 50;
  const isLogged = useSelector(state => state.isloggedReducer)
  return (
    <div className="App">
      <h1>React Redux Tutorial</h1>
      <h1>Counter : {counter}</h1>
      {/* call action in dispatch */}
      <button onClick={()=>dispatch(increament(newValue))}>Increament</button>
      <button onClick={()=>dispatch(decreament())}>Decreament</button>
      <h1>{isLogged==false? <button onClick={()=>dispatch(islogged())}>Log In</button> : <button onClick={()=>dispatch(notlogged())}>Log Out</button>}</h1>
      
      <h1>{isLogged==true? "Is logged" : "Not logged"}</h1>

    </div>
  );
}

export default App;
