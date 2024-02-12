import styles from './CreateTask.module.css'
import {PlusCircle} from 'phosphor-react'
import { useState } from 'react' 

export function CreateTask({onTaskCreated}) {

    const [content, setContent] = useState('')

    function handleContentChanged(event) {
        setContent(event.target.value)
    }

    function handleTaskCreated(event) {
        event.preventDefault()

        if (content === '') {
            return
        }

        onTaskCreated(content)

        setContent('')
    }

    return (
        <div>
            <form onSubmit={handleTaskCreated} className={styles.taskForm}>
                <textarea 
                    name="newTask" 
                    placeholder="Write new task"
                    onChange={handleContentChanged}
                    value={content}
                    required
                />

                <div><button type="submit">Add <PlusCircle size={16} weight='bold'/></button></div>
            </form>
        </div>
    )
}