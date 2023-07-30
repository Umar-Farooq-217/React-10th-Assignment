import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './HomePage.css'



const HomePage = () => {


    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTask = () => {
      if (inputValue.trim() !== '') {
        const newTask = {
          id: Date.now(),
          text: inputValue
        };
        setTasks([...tasks, newTask]);
        setInputValue('');
      }
    };
  
    const handleEditTask = (taskId, newText) => {
      const updatedTasks = tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, text: newText };
        }
        return task;
      });
      setTasks(updatedTasks);
    };
    const handleDeleteTask = (taskId) => {
        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
      };


    return (
        <div className='mainapp' style={{ backgroundColor: 'rgba(60,123,203,255)', width: '100%' }}>
            <div>

                <h1 style={{ color: 'white', fontWeight: 'bolder', textAlign: 'center', fontSize: '55px' }}>To-Do App </h1>
                <p style={{ backgroundColor: "green", height: '1px' }}></p>
                <h1 style={{ color: 'white', fontWeight: 'bolder', textAlign: 'center', fontSize: '55px' }}>HTML , CSS AND JAVASCRIPT</h1>


                <div className="box">
                    <div className='inbox'>
                        <input type="text"
                            className='input1'value={inputValue} onChange={handleInputChange}   placeholder='Add new task' /><button className='button'onClick={handleAddTask} >ADD TASK</button>
                    </div>

                </div>

                <div style={{backgroundColor:'white', margin:'30px'}}>
                    <h1 styl>Tasks List</h1>
                    <div style={{margin:'30px',backgroundColor:'rgba(60,123,203,255)'}}>
                    <ul style={{margin:'30px',marginTop:'30px'}}>
        {tasks.map(task => (
          <li style={{listStyle:'none',position:'relative',top:'20px',maxWidth:'100%'}} key={task.id}>
            <p style={{marginTop:'20px',border:'2px solid black',fontSize:'30px',backgroundColor:'white'}}>{task.text}</p>
            <button className='btn btn-outline-dark' onClick={() => handleEditTask(task.id, prompt('Edit Task:', task.text))}>
              Edit
            </button>
            <button className="btn btn-outline-danger" onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
                    </div>

                </div>







             






                </div>
            </div>

  

















    );
}

export default HomePage;
