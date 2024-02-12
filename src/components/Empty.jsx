import styles from './Empty.module.css'
import Clipboard from '../assets/Clipboard.svg'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={Clipboard} alt="ícone de prancheta" />
      <p>
        <strong>You still have not registered any task</strong>
        Create a task and organize your todos
      </p>
    </div>
  )
}