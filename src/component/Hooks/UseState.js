import React   from 'react';
 import "./style.css"

const UseState = () => {

    // const initialData = 0; // inital data add in bottom
    const [myNum, setmyNum] = React.useState(0);

    return (
        <>
            <div className="center_div">
                <p className='myData'>{myNum}</p>
                <div className='buttons'>
                <div className="button1 button" onClick={() => setmyNum(myNum + 1)}>
                </div>
                <div className="button2 button" onClick={() => myNum > 0 ?setmyNum(myNum - 1) : setmyNum(0)}>
                </div>
            </div>
            </div>
        </>
    )
}

export default UseState
