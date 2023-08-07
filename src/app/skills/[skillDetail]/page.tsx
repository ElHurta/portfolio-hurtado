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
        <aside style={{color: '#FFF'}} className={styles.iconContainer}>
          <IconsProvider
            requestedIcon={currentSkill.big_icon_name}
          />
        </aside>
        <aside className={styles.skillInfo}>
          <div>
            <header className={styles.detailHeader}>
              Description
            </header>
            <p>{currentSkill.description}</p>
          </div>
          <div>
            <header className={styles.detailHeader}>
              Related Experience
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nihil illo dolores! Illo esse accusantium voluptate, molestias quidem porro debitis.</p>
          </div>
        </aside>
      </main>
    </article>
  )
}
