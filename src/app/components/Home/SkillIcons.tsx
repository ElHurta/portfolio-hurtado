import {FaReact} from 'react-icons/fa'
import {SiJavascript, SiTypescript, SiHtml5, SiCss3} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

export default function SkillIcons() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
    }}>
        <FaReact />
        <SiJavascript />
        <SiTypescript />
        <SiHtml5 />
        <SiCss3 />
        <FaAws />
    </div>
  )
}
