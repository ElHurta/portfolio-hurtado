import React from 'react'
import { getSkills } from '@/utils/api-service'

import styles from './SkillsList.module.css'
import Link from 'next/link'

export default async function SkillsList() {

  const skills = await getSkills()

  return (
    <div className={styles.box}>
      <article className={styles.skillsContainer}>
        {
          skills.map(skill => (
            <Link className={styles.listElement} href={`/skills/${skill.id}`} key={skill.id}>
                <div className={styles.customMarker}></div>
                <li>{skill.name}</li>
            </Link>
          ))
        }
      </article>
    </div>
  )
}
