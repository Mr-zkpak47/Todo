import React from 'react'

export default function Createbtn(props) {
    return (
        <>
            <div className="createbtn">
                <span className="btN" onClick={props.onClick}>
                    <i className="fa-solid fa-plus fa-xl"></i>
                    Create
                </span>
            </div>
        </>
    )
}
