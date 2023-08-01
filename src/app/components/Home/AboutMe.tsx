import styles from "./AboutMe.module.css";
import SkillIcons from "../Icons/SkillIcons";
import { Profile } from "@/interfaces/portfolio.interfaces";

export default function AboutMe({profile}: {profile: Profile}) {
  return (
    <div className={styles.aboutContainer}>
      <p className={styles.longDesc}>
        I&apos;m a software developer with a passion for learning and creating
      </p>
      <hr className={styles.solid} />
      {/* Skills Icons */}
      <SkillIcons
        icons={profile.expand.skills}
      />
    </div>
  );
}
