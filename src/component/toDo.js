import React, { useState } from 'react';

// import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask.trim()) return;
    const task = {
      text: newTask,
      time: newTime
    };
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
    setNewTime('');
  };
  return(
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Task" value={newTask}
                onChange={(e) => setNewTask(e.target.value)} /><br/>
        
        <input type="time" placeholder="Add Time" value={newTime}
        onChange={(e) => setNewTime(e.target.value)} /><br/>
        
        <button type="submit"><b>ADD</b></button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <div>{task.text}</div>
            <div>{task.time}</div>
          </li>
        ))}
      </ul>

      
    </div>
  );
}

export default App;