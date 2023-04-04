import React, { useReducer } from 'react'



const reducer = (state , action) => {
    if (action.type === 'Incr'){
        state = state + 1; 
    }
   if(state >0 && action.type === 'Decr'){
    state = state - 1; 
   }
   return state;
};


const UseReducer = () => {

    // const [myNum, setmyNum] = React.useState(0);
    const initialData = 10;
    const [state , dispatch] = useReducer(reducer , initialData);

  return (
    <>
       <div className="center_div">
                <p className='myData'>{state}</p>
                <div className='buttons'>
                <div className="button1 button" onClick={() => dispatch({type: 'Incr'})}>
                </div>
                <div className="button2 button" onClick={() => dispatch({type: 'Decr'})}>
                </div>
            </div>
        </div>
    </>
  )
}

export default UseReducer
