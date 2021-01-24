import logo from "./logo.svg";
import "./App.css";
import AddNewTask from "./AddNewTask/AddNewTask";
import ToDoList from "./ToDoList/ToDoList";
import { useState, useEffect } from "react";

const listTask = [
  {
    id: 0,
    title: "Do homework",
    description: "Exercise 2",
    date: new Date().toDateString(),
    piority: "Normal",
  },
  {
    id: 1,
    title: "Do housework",
    description: "Clean my room",
    date: new Date().toDateString(),
    piority: "Normal",
  },
];

function App() {
  const [tasks, setTasks] = useState(listTask);
  useEffect(() => {
    if (localStorage.getItem("tasksData")) {
      setTasks(JSON.parse(localStorage.getItem("tasksData")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasksData", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <div className='container'>
        <AddNewTask setTasks={setTasks} />
        <ToDoList listTask={tasks} setTasks={setTasks} />
      </div>

    </div>
  );
}

export default App;
