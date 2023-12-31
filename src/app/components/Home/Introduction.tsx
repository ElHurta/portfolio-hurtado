import styles from './Introduction.module.css'
import Image from 'next/image'
import { api_config } from '@/app/config'
import DevFeatures from './DevFeatures';

const calculateAge = (birthday: string) => {
  const ageDifMs = Date.now() - Date.parse(birthday);
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function Introduction({profile} :{ profile: any }) {
  return (
    <div className={styles.IntroContainer}>
      <header>
        <p>{`${profile.name}`}</p>
        <p>Lv: {calculateAge(profile.birthday)}</p>
      </header>
      <main className={styles.IntroInfo}>
        <Image className={styles.profilePic}
            src={`${api_config.api_host}${api_config.api_port}/api/files/developer/${profile.id}/${profile.picture}`}
            width={1728}
            height={2304}
            alt={`Profile Picture of ${profile.name}`}
        />
        <article className={styles.bulletDesc}>
          <ul>
            <DevFeatures
              features={profile.features.split(',')}
              languages={profile.expand.languages}
            />
          </ul>
        </article>
      </main>
    </div>
  )
}
