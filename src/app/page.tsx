import { getProfile, loginToPocketbase } from '@/utils/api-service'

import AboutMe from './components/Home/AboutMe'
import Introduction from './components/Home/Introduction'

import styles from './page.module.css'
import './globals.css'

export default async function Home() {

  const token = await loginToPocketbase('jhurtado', '*3guL*QoIAS$j39X')
  const profile = await getProfile(token)
  console.log(profile)
  
  return (
    <>
      <h1 className='section-title'>ABOUT ME</h1>
      <header className={styles.nameContainer}>
        <h2 className={styles.nameTitle}>{profile.items[0].name}</h2>
      </header>

      <article className={styles.homeContainer}>
        <Introduction/>
        <AboutMe />
      </article>
    </>
  )
}
