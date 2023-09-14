import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Audio Content Summarization Tool</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            {'Audio Based Content Summarization Tool'}

          </div>
        </div>
        <div className={styles.grid}>
          <a
            href="/record"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Record <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Record audio to be summarized
            </p>
          </a>

          <a
            href="/submit"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Upload <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Upload audio to be summarized
            </p>
          </a>

          
        </div>
      </main>
    </>
  )
}
