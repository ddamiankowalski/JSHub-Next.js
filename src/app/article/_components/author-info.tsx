import styles from './author-info.module.css';

export default function AuthorInfo() {
  return (
    <div className="flex justify-center gap-4 my-8 text-sm">
      <span className={styles.minutes}>12 mins read</span>
      <span>Damian Kowalski</span>
    </div>
  )
}