import React , {useState , useEffect} from 'react'
import "./style.css"


const UseEffect = () => {


    const [myNum, setmyNum] = useState(0);

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     };
    // }, [input]);  this input is provide only first time when page reload it intreact otherwise not

    useEffect(() => {
        document.title = `Chats(${myNum})`;
    });

  return (
    <>
       <div className="center_div">
                <p className='myData'>{myNum}</p>
                <div className='buttons'>
                <div className="button1 button" onClick={() => setmyNum(myNum + 1)}>
                </div>
                {/* <div className="button2 button" onClick={() => myNum > 0 ?setmyNum(myNum - 1) : setmyNum(0)}>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default UseEffect
