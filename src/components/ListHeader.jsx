import styles from './ListHeader.module.css'


export function ListHeader({ tasksCounter, checkedTasksCounter }) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Created Tasks</p>
        <span>{tasksCounter}</span>
      </aside>

      <aside>
        <p>Completed</p>
        <span>
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  )
}