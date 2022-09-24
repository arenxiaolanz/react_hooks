import React ,{useReducer,useState} from 'react';

const Counterreducer = () => {

  const reducer = (state,action) => {
    switch (action.type) {
      case 'decrement':
        return {count:state.count - 1};
      case 'increment':
        return {count: state.count + 1};
      case 'reset':
        return init(action.payload);
      default:
        throw new Error()
    }
  }

  const init = (initialCount) => {
    return {count:initialCount}
  }

  const [initialCount] = useState(0)
  const [state,dispatch] = useReducer(reducer,initialCount,init)

  return (
    <div>
      Count:{state.count}
      <button onClick={() => {
        dispatch({type:'increment'})
      }}>+</button>
      <button  onClick={() => {
        dispatch({type:'decrement'})
      }}>-</button>
      <button onClick={() => {
        dispatch({type:'reset',payload:initialCount})
      }} >重置</button>
    </div>
  );
};

export default Counterreducer;