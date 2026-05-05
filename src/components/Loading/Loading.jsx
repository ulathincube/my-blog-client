import styles from "./Loading.module.css"

function Loading() {
  return (
    <div className={styles.loader}>
      <span className={`material-symbols-outlined ${styles.icon}`}>
        donut_large
      </span>
    </div>
  )
}

export default Loading
