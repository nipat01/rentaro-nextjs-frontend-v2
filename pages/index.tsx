import React, { useEffect, useState } from 'react';
import Router from 'next/router'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../layout/navbar'
import ListCar from '../component/listCar'
import Typography from '@mui/material/Typography';
import { useSession, signIn, signOut } from "next-auth/react"
import { getCarAll } from '../service/rentaro.service';

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [carData, setCarData] = useState()
  useEffect(() => {
    console.log("session =>", session);
    getCarAll().then(res => {
      console.log("res =>", res);
      setCarData(res);
    });

  }, [])

  return (
    <div>
      <main>
        <Image layout="responsive" src="/test1.jpg" alt="Vercel Logo" width={72} height={16} />
        <div className={styles.container}>
          <Typography align="center" sx={{ mt: 5 }}>
            <h3>Product List</h3>
          </Typography>
          <ListCar list={carData} />
        </div>
      </main>
    </div>
  )
}

export default Home
