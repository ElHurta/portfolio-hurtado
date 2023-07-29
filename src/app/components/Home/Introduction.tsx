import styles from './Introduction.module.css'
import profile from './profile.jpg'
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
        <article>
          <p>
            I am a software developer with a passion for learning.
          </p>
          <hr />
        </article>
      </main>
    </div>
  )
}
