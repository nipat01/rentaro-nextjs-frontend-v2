import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../layout/navbar'
import ListCar from '../component/listCar'
import Typography from '@mui/material/Typography';

const Home: NextPage = () => {

  return (
    <div>
      <main>
        <Image layout="responsive" src="/test1.jpg" alt="Vercel Logo" width={72} height={16} />
        <div className={styles.container}>
          <Typography align="center" sx={{ mt: 5 }}>
            <h3>Product List</h3>
          </Typography>
          <ListCar list={[1, 2, 3, 4, 5, 6, 7]} />
        </div>
      </main>
    </div>
  )
}

export default Home
