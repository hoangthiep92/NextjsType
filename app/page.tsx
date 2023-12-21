import Image from 'next/image'
import styles from './styles/home.module.css'
import Navbar from './component/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <div className={styles.title} >Homepage</div>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veniam adipisci inventore minus ea optio amet quisquam aliquid sapiente! Earum dolore optio quia fugit expedita laborum numquam molestias modi veniam.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse veniam adipisci inventore minus ea optio amet quisquam aliquid sapiente! Earum dolore optio quia fugit expedita laborum numquam molestias modi veniam.</p>
      <Link href='/dashboard'
        className={styles.btn}>
        <div>See List</div>
      </Link>
    </div>
  )
}
