import React, {useState} from "react";
import Task from "./Task";

function TaskList( { tasksData, categoriesData }) {
  // console.log(tasks)

  const [taskItem, setTaskItem] = useState(tasksData)

  
  function deleteTask(e) {
    //console.log(e.target.parentNode.children[1].innerText)
    let selectedTask = e.target.parentNode.children[1].innerText

    let filteredTasks = taskItem.filter(task => {
      //console.log(task.text)
      return task.text !== selectedTask
    })

    console.log(filteredTasks)
    setTaskItem(filteredTasks)
    
  }


  function renderTasks() {
    return tasksData.map(task => {
      return (
        <Task
          key={task.text}
          text={task.text}
          category={task.category}
          deleteTaskFnProp={deleteTask}
        />
      )
    })
  }



  // function renderTasks() {
  //   return tasks.map(task => {
  //     return (
  //       <Task
  //         key={task.text}
  //         text={task.text}
  //         category={task.category}
  //       />
  //     )
  //   })
  // }

  return (
    <div className="tasks">
      {renderTasks()}
    </div>
  );
}

export default TaskList;
