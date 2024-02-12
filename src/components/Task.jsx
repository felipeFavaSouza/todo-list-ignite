import { Trash, Check } from 'phosphor-react'
import styles from './Task.module.css'

export function Task({task, onTaskDeleted, toggleTaskStatus}) {

    function handleTaskToggle() {
        toggleTaskStatus({id: task.id, value: !task.isChecked})
    }

    const checkboxCheckedClassname = task.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']
    const paragraphCheckedClassname = task.isChecked
    ? styles['paragraph-checked']
    : ''

    return(
        <div className={styles.container}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={task.isChecked}/>
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {task.isChecked && <Check size={12} />}
                    </span>
                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {task.content}
                    </p>
                </label>
                
            </div>
            
            
            <button type='button' onClick={() => onTaskDeleted(task.id)} title='Delete Task'>
                <Trash size={20} color="#808080"/>
            </button>
        </div>
    )
}