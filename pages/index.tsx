import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../layout/navbar'

const Home: NextPage = () => {
  return (
    <div>

      {/* <main> */}
      <Image layout="responsive" src="/test1.jpg" alt="Vercel Logo" width={72} height={16} />
      <div className={styles.container}>
        <p>hello world</p>
      </div>
      {/* </main> */}


    </div>
  )
}

export default Home
