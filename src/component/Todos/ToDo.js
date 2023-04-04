import React , {useState , useEffect} from 'react'
import  "./style.css"




// get local storage data 

const getLocalData = () => {
  const lists = localStorage.getItem("mytodoList");

  if(lists) {
    return JSON.parse(lists);
  }else{
    return[];
  }
}

const ToDo = () => {

  const [inputData, setinputData] = useState("");
  const [Items , setItems] = useState(getLocalData());
  const [isEdititem , setisEdititem] = useState("");
  const [toggleButton , settoggleButton] = useState(false)


  // add the items function 
  const addItems = () => {
      if(!inputData){
        alert("plz fill the Data")
      }
      else if(inputData && toggleButton) {

        setItems(
          Items.map((curElem) => {
            if(curElem.id === isEdititem){
              return{...curElem , name : inputData};
            }
            return curElem;
          })
        )

        setinputData("");
        setisEdititem(null);
        settoggleButton(false)
      }
      else{

        const myNewInputData ={
          id: new Date().getTime().toString(),
          name : inputData,
        }

        setItems([...Items, myNewInputData]);
        // remove the data from search box 
        setinputData("");
      }
  }


  // edit items 

  const editItem = (index) => {
    const item_todo_edited = Items.find((curElem)=>{
      return curElem.id === index;
    });
    setinputData(item_todo_edited.name);
    setisEdititem(index);
    settoggleButton(true)
  }

  // Delete item 
  const deleteItem = (index) => {
    const updatedItem = Items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems( updatedItem);
  }

  // remove alll the element 
  const removeAll = () => {
    setItems([]);
  }

  // adding local storage 

  useEffect(() => {
    localStorage.setItem("mytodoList" , JSON.stringify(Items))
  }, [Items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
                <img src="./images/todo.svg" alt="todologo" />
                <figcaption>
                  add Your List Here 👌
                </figcaption>
            </figure>
            <div className="addItems">
              <input type="text" placeholder='✍ Add items' className='form-control' value={inputData} 
                onChange = {(event) => setinputData(event.target.value) }
              />

              {toggleButton ? (
                <i className="far fa-edit add-btn" onClick={addItems}></i>
              ) : <i className="fa fa-plus add-btn" onClick={addItems}></i>
              }
              
            </div>

            {/* show Our items  */}
            <div className="showItems">
             {
               Items.map((curElem) => {
                return (
                  <div className="eachItem" key={curElem.id}>
                    <h3>{curElem.name}</h3>
                    <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={() => editItem(curElem.id)}></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(curElem.id)}></i>
                    </div>
                  </div>
                );
               })
             }
            </div>

            <div className="showItems">
              <button className='btn effect04' data-sm-link-text="Remove All"
               onClick={removeAll}><span>Check List</span></button>
            </div>
        </div>
      </div>
    </>
  )
}

export default ToDo;

