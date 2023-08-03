import styles from './page.module.css'
import SkillsList from './components/SkillsList'

export default function SkillsLayout({children,}: {
  children: React.ReactNode
  }) {

  return (
    <>
      <h1 className='section-title'>SKILLS</h1>
      <article className={styles.skillSection}>
        <SkillsList />
        {children}
      </article>
    </>
  )
}
