import styles from './LoadingButton.module.scss'

export function LoadingButton() {
  return (
    <div className={styles.button}>
      <div className={styles.loading}></div>
    </div>
  )
}