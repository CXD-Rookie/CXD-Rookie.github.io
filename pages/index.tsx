import type { ReactElement } from 'react'

import styles from '@/styles/Home.module.css'
import Layout from '../components/layout'

export default function Home() {
  return (
      <div className={styles.home}>

      </div>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>{page}</Layout>
    )
}
