
import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { CreateTask } from './components/CreateTask'
import { Task } from './components/Task'
import { useState } from 'react'
import { ListHeader } from './components/ListHeader'
import { Empty } from './components/Empty'


function App() {
  const [tasks, setTasks] = useState(() => {
    const tasksOnStorage = localStorage.getItem('tasks')

    if(tasksOnStorage) {
        return JSON.parse(tasksOnStorage)
    }

    return []

}
)
  const [count, setCount] = useState(0)

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }
    return prevValue
  }, 0)

  function onTaskCreated(content){
    const newTask = {
        id: crypto.randomUUID(),
        date: new Date(),
        content,
        isChecked: false,
    }

    const tasksArray = [...tasks, newTask]

    setTasks(tasksArray)

    localStorage.setItem('tasks', JSON.stringify(tasksArray))

    setCount(count + 1)
}

  function onTaskDeleted(id) {
    const tasksArray = tasks.filter(task => {
      return task.id !== id
    })

    setTasks(tasksArray)

    localStorage.setItem('tasks', JSON.stringify(tasksArray))

    if(count > 0) {
      setCount(count - 1)
    } else {
      setCount(count)
    }

}

  function handleToggleTask({ id, value }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }


  return (
    <main>
      <Header />
      
      <section className={styles.wrapper}>
        <CreateTask onTaskCreated={onTaskCreated}/>
        <div>
          <div className={styles.taskList}>
            <ListHeader 
              tasksCounter={tasks.length} 
              checkedTasksCounter={checkedTasksCounter}
            />  
          </div>
          {tasks.length > 0 ? (
            <div>
              {tasks.map(task => (
                <Task 
                  key={task.id} 
                  task={task} 
                  onTaskDeleted={onTaskDeleted} 
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty/>
          )}

          
        </div>
      </section>
    </main>
  )
}

export default App
