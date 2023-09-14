import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'] })
export default function Register() {
    return <>
        <Head>
            <title>Submit</title>
            <meta name="description" content="VBA7 registration page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <div className={styles.grid}>
          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Single Source<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Non conversational
            </p>
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Single Source<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Conversational
            </p>
          </a>

          <a
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Multi Source<span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Conversational
            </p>
          </a>  
          
        </div>
        </main>
    </>
}