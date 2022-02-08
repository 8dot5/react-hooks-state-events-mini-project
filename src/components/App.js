import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });


function App() {

  //tasks object in state
  const [tasksState, setTasksState] = useState([...TASKS])

  //copy and remove the elements we don't want; use setter to update the state
  function handleDelete(element) {
		const updatedTasks = tasksState.filter((task) => task.text !== element);
		setTasksState(updatedTasks);
	}

  //using the array in state (useTasks)
  //fns a prop made avail to grandchildren
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
      />
      <NewTaskForm />
      <TaskList
        tasks={tasksState}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
