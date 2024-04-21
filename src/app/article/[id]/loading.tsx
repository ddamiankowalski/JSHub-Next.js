import styles from './loading.module.css';

export default function Loading() {
  return (
    <div className='m-auto flex w-4/6 flex-col items-center '>
      <div className='flex flex-col gap-y-1.5 py-6 w-full items-center'>
        <div className={`${styles.loading} w-4/5 h-10 rounded-md`}></div>
        <div className={`${styles.loading} w-2/5 h-10 rounded-md opacity-80`}></div>
      </div>
      <div className={`${styles.loading} my-10 w-56 h-5 rounded-md opacity-80`}></div>
      <div className={`${styles.loading} w-28 h-12 rounded-md opacity-70`}></div>
    </div>
  )
}