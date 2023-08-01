import { getProfile } from '@/utils/api-service'

import AboutMe from './components/Home/AboutMe'
import Introduction from './components/Home/Introduction'

import styles from './page.module.css'
import './globals.css'

export default async function Home() {

  const profile = await getProfile('d7ebgjum5yvlfna')

  return (
    <>
      <h1 className='section-title'>ABOUT ME</h1>
      <header className={styles.nameContainer}>
        <h2 className={styles.nameTitle}>{profile.name}</h2>
      </header>

      <article className={styles.homeContainer}>
        <Introduction
          profile={profile}
        />
        <AboutMe />
      </article>
    </>
  )
}
