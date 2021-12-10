import React from "react";
import FormAddTasks from './Components/FormAddTask/FormAddTasks'
import ListTasks from './Components/ListTasks/ListTasks'

function App() {
  const [tasks, setTasks] = React.useState(() => {
    let listTasksJSON = localStorage.getItem('tasks')
    let listTasks = JSON.parse(listTasksJSON);
    if (!listTasks) {
      return []
    } else {
      return listTasks
    }
  })

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const handleAddTask = (text) => {
    setTasks(preTasks => [...preTasks, { content: text, isComplete: false }]);
  }

  const handleDeleteTask = (index) => {
    setTasks(preTasks => preTasks.filter((taskItem, idx) => idx !== index));
  }

  const handleChecked = (checked, index) => {
    setTasks(preTasks => {
      const newTask = [...preTasks]
      newTask[index].isComplete = checked
      return newTask
    })
    
  }

  const title = React.useMemo(() => {
    const unCompletedTasks = tasks.filter((task) => !task.isComplete)
    
    if (unCompletedTasks.length === 0) {
      return `All tasks are done.`;
    }

    const taskTitle = unCompletedTasks.length > 1 ? "tasks" : "task";

    return `There is ${unCompletedTasks.length} ${taskTitle} done.`;
  }, [tasks]);

  return (
    <div className="App ">
      <FormAddTasks handleAddTask={handleAddTask} />
      <div className="my-2">{title}</div>
      <ListTasks tasks={tasks} handleDeleteTask={handleDeleteTask} handleChecked={handleChecked} />
    </div>
  );
}

export default App;
