import React from 'react'
import IconsProvider from '../../components/Icons/IconsProvider';
import { getSkillByID } from '@/utils/api-service';

import styles from './page.module.css'

export default async function SkillDetail({params}: {params: {skillDetail: string}}) {

  const currentSkill = await getSkillByID(params.skillDetail)

  return (
    <article className={styles.skillDetailContainer}>
      <header className={styles.detailHeader}>
        <p>{currentSkill.name} - Info</p>
      </header>
      <main className={styles.skillMainInfo}>
        <aside className={styles.iconContainer}>
          <IconsProvider
            applyColor = {true}
            requestedIcon={currentSkill.big_icon_name}
          />
        </aside>
        <aside className={styles.skillInfo}>
          <div className={styles.skillDesc}>
            <header className={styles.detailHeader}>
              I can:
            </header>
            <p>{currentSkill.description}</p>
          </div>
        </aside>
      </main>
    </article>
  )
}
