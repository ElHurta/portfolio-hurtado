'use client'
import SkillsList from "./components/SkillsList";
import SkillDetail from "./components/SkillDetail";

import { useState } from "react"
import VerticalBarSVG from '../components/Icons/VerticalBarSVG';

import styles from './page.module.css'

export default function SkillsPage({}) {

  const [selectedSkill, setSelectedSkill] = useState('')

  return (
    <>
      <h1 className='section-title'>SKILLS</h1>
      <article className={styles.skillSection}>
        <VerticalBarSVG
          height={200}
        />
        <SkillsList />
        <SkillDetail />
      </article>
    </>
  )
}
