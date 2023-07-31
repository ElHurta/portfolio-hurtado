import styles from "./AboutMe.module.css";
import SkillIcons from "../Icons/SkillIcons";

export default function AboutMe() {
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.longDesc}>
        I&apos;m a software developer with a passion for learning and creating
      </p>
      <hr className={styles.solid} />
      {/* Skills Icons */}
      <SkillIcons />
    </div>
  );
}
