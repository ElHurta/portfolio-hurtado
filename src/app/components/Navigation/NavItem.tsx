import { Route } from "@/app/routers"
import Link from "next/link"

import styles from './NavItem.module.css'

export function NavItem({route}: {route: Route}){
    return (
        <li className={styles.navitem}>
            <p>---</p>
            <div className={styles.navButton}>
                <div className={styles.buttonContent}>
                    <Link href={route.path}>
                        <div className={styles.routeIcon}></div>
                        <p>{route.label}</p>
                    </Link>
                </div>
            </div>
        </li>
    )
}