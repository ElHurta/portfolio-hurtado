import { routes } from "@/app/routers"
import { NavItem } from "./NavItem"

import styles from './Navigation.module.css'

export function Navigation() {
    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <ul>
                    {
                        routes.map((route) => (
                        <NavItem
                            key = {route.path}
                            route = {route}
                        />
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}