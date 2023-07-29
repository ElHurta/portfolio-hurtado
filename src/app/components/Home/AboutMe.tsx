import styles from './AboutMe.module.css'
import SkillIcons from './SkillIcons'

export default function AboutMe() {
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.longDesc}>
        I am a software developer with a passion for learning and creating. I
        have experience in full-stack development, but I am always looking to
        expand my knowledge and skills. I am currently looking for a position
        where I can grow as a developer and contribute to a team.
      </p>
      <hr className={styles.solid}/>
      {/* Skills Icons */}
      <SkillIcons />
    </div>
  )
}
