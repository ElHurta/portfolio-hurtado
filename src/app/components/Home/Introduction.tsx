import styles from './Introduction.module.css'
import profile from '../../../../assets/profile.jpg'
import Image from 'next/image'

export default function Introduction() {
  return (
    <div className={styles.IntroContainer}>
      <header>
        <p>Juan Hurtado</p>
        <p>Lv: 22</p>
      </header>
      <main className={styles.IntroInfo}>
        <Image className={styles.profilePic}
            src={profile}
            alt="Picture of the author"
        />
        <article className={styles.bulletDesc}>
          <ul>
            <li>Full Stack Developer</li>
            <li>Software Engineer</li>
            <li>Systems Engineering Student</li>
            
          </ul>
          <hr className={styles.solid}/>
        </article>
      </main>
    </div>
  )
}
