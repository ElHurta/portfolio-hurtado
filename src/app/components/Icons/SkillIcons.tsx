import IconsProvider from './IconsProvider';

import styles from './SkillIcons.module.css'

export default function SkillIcons() {

  const icons = [
    'FaReact',
    'SiJavascript',
    'SiTypescript',
    'SiHtml5',
    'SiCss3',
    'FaAws',
  ]

  return (
    <div className={styles.iconsContainer}>
        {
            icons.map((icon, index) => (
                <IconsProvider key={index} requestedIcon={icon} />
            ))
        }
    </div>
  )
}
