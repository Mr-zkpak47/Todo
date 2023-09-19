/* import React, { useState } from 'react'

export default function TodoCard(props) {
  const [complete, setComplete] = useState("Complete")
  const Complete = () => {
    setComplete("Completed")
      props.setCompleteNumber(props.completeNumber + 1)
      console.log(props.data)
  }
  return (
    <div>
      <div className="card my-3 mx-3" style={{ background: props.bgColor }}>
        <div className="cardOptions">
          <div className="flex-1 py-2 px-2 d-flex">
            <span className='complete' onClick={Complete}>{complete}</span>
            <span className="edit">
              <i className="fa-solid fa-pencil" style={{ color: "#000000" }}></i>
              <span className="edittext" onClick={props.EditContent}>
                &ensp;{props.data}
              </span>
            </span>
          </div>
          <div className='cross px-2'>
            <i className="fa-solid fa-circle-xmark fa-xl" onClick={props.removeTask}></i>
          </div>
        </div>
        <div className="cardChild">
          <p><span>{props.Title}</span></p>
          <p className="task px-3 my-3">{props.Context}</p>
        </div>
        <div className="cardStatus my-1 mt-2 text-center">
          <span className="status text-center"><span style={{ color: "red", fontWeight: "bolder" }}>Status:</span>&ensp;<span className="pending mx-1">{complete === "Complete" ? "Pending" : `Completed`}</span><i className={complete === "Complete" ? "fa-regular fa-clock fa-lg pl-2" : "fa-solid fa-check fa-lg pl-2"} style={{ color: "#5c5c5c" }}></i></span>
        </div>
      </div>
    </div>
  )
}
 */

import React, { useState } from 'react';

export default function TodoCard(props) {
  const [complete, setComplete] = useState("Complete")
  const Complete = () => {
    setComplete("Completed")
      props.setCompleteNumber(props.completeNumber + 1)
      console.log(props.data)
  }
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.Title);
  const [editedContext, setEditedContext] = useState(props.Context);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Update the task with the edited values
    // For simplicity, you can update the local state.
    setEditedTitle(editedTitle);
    setEditedContext(editedContext);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="card my-3 mx-3" style={{ background: props.bgColor }}>
        <div className="cardOptions">
          <div className="flex-1 py-2 px-2 d-flex">
            {isEditing ? (
              <>
                <button className="btn btn-success" onClick={handleSaveClick}>
                  Save
                </button>
                <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className='complete' onClick={Complete}>{complete}</span>
                <button className='edit' onClick={handleEditClick}>
                <i className="fa-solid fa-pencil" style={{ color: "#000000" }}></i>
                  <span className="edittext">
                    &ensp;Edit
                  </span>
                </button>
              </>
            )}
          </div>
          <div className='cross px-2'>
            <i className="fa-solid fa-circle-xmark fa-xl" onClick={props.removeTask}></i>
          </div>
        </div>
        <div className="cardChild">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                value={editedContext}
                onChange={(e) => setEditedContext(e.target.value)}
              />
            </>
          ) : (
            <>
              <p><span>{props.Title}</span></p>
              <p className="task px-3 my-3">{props.Context}</p>
            </>
          )}
        </div>
        <div className="cardStatus my-1 mt-2 text-center">
          <span className="status text-center"><span style={{ color: "red", fontWeight: "bolder" }}>Status:</span>&ensp;
            <span className="pending mx-1">
              {isEditing ? "Editing" : complete === "Complete" ? "Pending" : "Completed"}
            </span>
            <i
              className={isEditing ? "fa-regular fa-clock fa-lg pl-2" : complete === "Complete" ? "fa-regular fa-clock fa-lg pl-2" : "fa-solid fa-check fa-lg pl-2"}
              style={{ color: "#5c5c5c" }}
            ></i>
          </span>
        </div>
      </div>
    </div>
  );
}
