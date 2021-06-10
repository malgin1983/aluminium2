import type { NextPage } from 'next'
import { Button } from 'react-bootstrap'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
           <Button variant="primary" href="https://nextjs.org/docs">
              BUTTON BOOTSTRAP
           </Button>
      </header>
    </div>
  )
}

export default IndexPage
