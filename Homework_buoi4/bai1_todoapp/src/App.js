import {useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from "./components/About";

function App() {
  const [listTasks, setListTasks] = useState([
      {
        id: 1,
        text: "DO hw",
        time: "20/07/2022 19:30",
        reminder: true,
    },
    {
        id: 2,
        text: "Code web",
        time: "20/07/2022 19:30",
        reminder: false,
    },
    {
        id: 3,
        text: "Traing yolov5 2d detection model",
        time: "20/07/2022 19:30",
        reminder: true,
    },
    {
        id: 4,
        text: "Cho meo an",
        time: "20/07/2022 19:30",
        reminder: true,
    },
  ])
  

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random()*10000) + 1;
    const newtask = {id, ...task}
    setListTasks([...listTasks, newtask]);
  }
  //Delelte Task
  function deleteTask(id) {
    setListTasks(listTasks.filter((task) => task.id !== id));
  }
  // Update Reminder 
  function updateReminder(id) {
    setListTasks(
      listTasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  }
  return (
    <BrowserRouter>
      <div className="container">
        <Header title = "Bootcamp todoapp"/>
        <Routes>
          <Route path='/' element = {
            <>
              <AddTask onAdd = {addTask}/>
              <Tasks tasks={listTasks}
              onDelete = {deleteTask}
              onUpdate = {updateReminder}/>
              <Link to = '/about'>About page</Link>
            </>
          }></Route>
          <Route path='/about' element={<About/>}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
