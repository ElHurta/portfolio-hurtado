import styles from './page.module.css'
import './globals.css'
import AboutMe from './components/Home/AboutMe'
import Introduction from './components/Home/Introduction'

export default function Home() {
  return (
    <>
      <h1 className='section-title'>ABOUT ME</h1>
      <header className={styles.nameContainer}>
        <h2 className={styles.nameTitle}>Juan Hurtado</h2>
      </header>

      <article className={styles.homeContainer}>
        <AboutMe />
        <Introduction />
      </article>
    </>
  )
}
