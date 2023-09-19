import React, { useState } from 'react'

export default function TasksSection(props) {
  return (
    <div className='taskspart'>
       <div className="tasksinfo">
        <span>Total Tasks:&ensp;&ensp;&ensp;<span style={{color:"red",fontWeight:"bolder",fontSize:"120%"}}>{props.Total}</span></span>
        <span>Completed:&ensp;&ensp;&ensp;<span style={{color:"red",fontWeight:"bolder",fontSize:"120%"}}>{props.Complete>=0?props.Complete:"0"}</span></span>
        <span>Pending:&ensp;&ensp;&ensp;<span style={{color:"red",fontWeight:"bolder",fontSize:"120%"}}>{props.Total - props.Complete>0?props.Total - props.Complete:"0"}</span></span>
       </div>
    </div>
  )
}
