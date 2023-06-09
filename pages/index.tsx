import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'

let SNI:any = {}

async function loadSNI() {
  const commands = await import('@/lib/sni')
  SNI = commands
}

export default function Home() {
  useEffect(() => {
    loadSNI()
  }, [])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={() => {
          SNI.ListDevices()
        }}>
          List Devices
        </button>
      </main>
    </>
  )
}
