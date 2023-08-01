import IconsProvider from './IconsProvider';

import styles from './SkillIcons.module.css'

export default function SkillIcons({icons}: {icons: any[]}) {
  return (
    <div className={styles.iconsContainer}>
        {
            icons.map((icon, index) => (
                <IconsProvider key={index} requestedIcon={icon.small_icon_name} />
            ))
        }
    </div>
  )
}
