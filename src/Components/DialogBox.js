import React from 'react'

export default function DialogBox(props) {
    return (
        <>
            <div className={`dialogBox container p-2 ${props.className}`} id = "Dialog">
                <span>Add Task</span>
                <input type="text" name="title" className='tasktitle mb-2' placeholder='Title' onChange={props.onChange} value={props.Title}/>
                <textarea type="text" name="description" className='taskdescription mb-2' placeholder='Description' onChange={props.onDescriptionChange} value = {props.Description}/>
                <span>Color <br/></span>
                <div className="colors">
                    <span style = {{background : "red",cursor:"pointer"}} onClick={props.selectColor}></span>
                    <span style = {{background : "chocolate",cursor:"pointer"}} onClick={props.selectColor}></span>
                    <span style = {{background : "tan",cursor:"pointer"}} onClick={props.selectColor}></span>
                    <span style = {{background : "deepskyblue",cursor:"pointer"}} onClick={props.selectColor}></span>
                    <span style = {{background : "deeppink",cursor:"pointer"}} onClick={props.selectColor}></span>
                </div>
                <div className="btns">
                    <button className="btn btn-primary me-2" onClick = {props.OnAddClick}>Add</button>
                    <button className="btn btn-danger" onClick={props.OnCancelClick}>Cancel</button>
                </div>
            </div>
        </>
    )
}
