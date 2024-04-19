import styles from './author-info.module.css';

export default function AuthorInfo() {
  return (
    <div className='my-8 flex justify-center gap-4 text-sm'>
      <span className={styles.minutes}>12 mins read</span>
      <span>Damian Kowalski</span>
    </div>
  );
}
