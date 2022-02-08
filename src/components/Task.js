import React from "react";

function Task({ text, category, deleteTaskFnProp }) {
  // console.log(text)

  //to remove the task from the DOM
  // function handleClick(e) {
  //   //console.log(e.target.parentElement)
  //   //console.log(e.target.parentNode)
  //   // e.target.parentNode.remove();
  // }

  //to remove the task from the State; calling the fn as prop
  return (
    <div className="task">
      <div className="label">{text}</div>
      <div className="text">{category}</div>
      <button
        onClick={deleteTaskFnProp}
        className="delete"
        >X
        </button>
    </div>
  );
}

export default Task;
