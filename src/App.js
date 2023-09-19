import React, { useState } from 'react'
import "./App.css"
import Createbtn from './Components/Createbtn'
import Navbar from './Components/Navbar'
import TasksSection from './Components/TasksSection'
import TodoCard from './Components/TodoCard'
// import DialogBox from './Components/DialogBox'

export default function App() {
  let val = 0;
  let i = 0;
  const [editingIndex, setEditingIndex] = useState(-1);
  const [addClass, setAddClass] = useState(false)
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tasks, setTasks] = useState([])
  const [total, setTotal] = useState(0)
  const [completeNumber, setCompleteNumber] = useState(0)
  const [color, setColor] = useState("")
  const [complete, setComplete] = useState()
  const [completeText, setCompleteText] = useState("Complete")
  const [popUp, setPopUp] = useState(true)
  const [data,setData] = useState()
  const ShowDialogBox = () => {
    setAddClass(true)
    setTitle("");
    setDescription("")
  }
  const RemoveDialogBox = () => {
    setAddClass(false)
  }
  const onChange = (event) => {
    setTitle(event.target.value)
  }
  const onDescriptionChange = (event) => {
    setDescription(event.target.value)
  }
  /*   const OnAddClick = () => {
      const task = {
        title: title,
        description: description,
        id: id,
        color: color,
        complete: false
      }
      setTasks([...tasks, task]);
      RemoveDialogBox()
      setTotal(total + 1)
    } */
  const id = () => {
    return val++;
  }
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setTotal(total - 1); // Decrease the total count
    // You can also update the complete count if needed.
  };
  return (
    <>
      <section className='body-flex'>
        <nav>
          <Navbar />
          <Createbtn onClick={ShowDialogBox} />
          <TasksSection Total={total} Complete={completeNumber} />
        </nav>
        <section className='tasksSection'>
          <div className="container" style={{ height: "100vh", overflowY: "scroll" }}>
            {/*   <DialogBox color1 = "red" color2="pink" color3 = "orangered" color4 = "purple" color5 = "chocolate" selectColor = {setColor} className={addClass ? "" : "dialogBoxActive"} OnCancelClick={RemoveDialogBox} OnAddClick={OnAddClick} onChange={onChange} Title={title} onDescriptionChange={onDescriptionChange} Description={description} />
           */}
            <div className={addClass ? "dialogBox container p-2 " : `dialogBox container p-2 dialogBoxActive`} id="Dialog">
              <div className={popUp?"popUp d-flex align-items-center text-center disactive":"popUp d-flex align-items-center text-center"}>
                <div className="container d-flex align-items-center text-center">
                  <p className='text-center'>
                    Please add title and description.
                  </p>
                </div>
                  <i className='fa-solid fa-circle-xmark' onClick={()=>{
                    setPopUp(true)
                  }}></i>
              </div>
              <span>Add Task</span>
              <input type="text" name="title" className={'tasktitle mb-2'} placeholder='Title' onChange={onChange} value={title} disabled = {!popUp}/>
              <textarea type="text" name="description" className='taskdescription mb-2' placeholder='Description' onChange={onDescriptionChange} value={description} disabled = {!popUp}/>
              <span>Color <br /></span>
              <div className="colors">
                <span style={{ background: "#adb5bd", cursor: "pointer" }} disabled = {!popUp} onClick={() => {
                  setColor("#adb5bd")
                }}></span>
                <span style={{ background: "#ffc107", cursor: "pointer" }} disabled = {!popUp} onClick={() => {
                  setColor("#ffc107")
                }}></span>
                <span style={{ background: "#ffeb3b", cursor: "pointer" }} disabled = {!popUp} onClick={() => {
                  setColor("#ffeb3b")
                }}></span>
                <span style={{ background: "tan", cursor: "pointer" }} disabled = {!popUp} onClick={() => {
                  setColor("tan")
                }}></span>
                <span style={{ background: "#fff3cd", cursor: "pointer" }} disabled = {!popUp} onClick={() => {
                  setColor("#fff3cd")
                }}></span>
              </div>
              <div className="btns">
                <button className="btn btn-primary me-2" disabled = {!popUp} onClick={() => {
                  const task = {
                    title: title,
                    description: description,
                    id: id,
                    color: color,
                    complete: false
                  }
                  setTasks([...tasks, task]);
                  setPopUp(false)
                  if (task.title !== "" && task.description !== "") {
                    RemoveDialogBox()
                    setTotal(total + 1)
                    setPopUp(true)
                  }
                }}>Add</button>
                <button className="btn btn-danger" disabled = {!popUp} onClick={RemoveDialogBox}>Cancel</button>
              </div>
            </div>
            <div className="row">
              {tasks.map((task, index) => {
                return (task.title !== "" && task.description !== "" &&
                  <div className={"col justify-content-center d-flex"} key={index}>
                    <TodoCard complete={complete} completeText={completeText} 
                    setCompleteText={setCompleteText} setComplete={setComplete}
                     Title={task.title} Context={task.description} bgColor={task.color} removeTask={() => {
                      removeTask(index);
                      setCompleteNumber(completeNumber - 1)
                    }} completeNumber={completeNumber}
                    EditContent = {()=>{
                      setData(task.title)
                    }}
                    setData = {setData}
                    data = {data}
                      setCompleteNumber={setCompleteNumber} Complete={task.complete} />
                  </div>
                )
              })
              }
            </div>
          </div>
        </section>
      </section>
    </>
  )
}
